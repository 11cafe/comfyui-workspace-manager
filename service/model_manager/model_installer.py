import asyncio
import subprocess
import os
import re
import sys
from aiohttp import web
import folder_paths
import urllib.request
import threading
import server
import time
from .missing_models import find_missing_models  # type: ignore noqa
from .model_list import start_populate_file_hash_dict, save_file_hash

comfy_path = os.path.dirname(folder_paths.__file__)


def download_url_with_wget(url, save_path):
    print(f"Downloading {url} to {save_path} ...")
    if not is_wget_installed():
        print(
            "wget is not installed. Please install wget or use a different download method."
        )
        return False

    try:
        # url="https://github.com/Weixuanf/cdn-test/blob/main/workspace-manager-5YgCydJJ.js"
        command = f"wget -c '{url}' -O '{save_path}' --show-progress"
        process = subprocess.Popen(command, shell=True, stderr=subprocess.PIPE)

        while True:
            output = process.stderr.readline()
            if process.poll() is not None and output == b"":
                break
            if output:
                progress = parse_wget_output(output.decode())
                sys.stdout.write(f"\r{progress}")
                sys.stdout.flush()

        process.poll()
    except subprocess.CalledProcessError as e:
        print(f"Download error with wget: {e}", file=sys.stderr)
        return False
    except Exception as e:
        print(f"Unexpected error: {e}", file=sys.stderr)
        return False

    print("\nDownload completed successfully.")
    return True


def is_wget_installed():
    try:
        subprocess.run(
            "wget --version",
            shell=True,
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        return True
    except subprocess.CalledProcessError:
        return False


def parse_wget_output(output):
    """
    Parse wget output to extract and return the download progress.
    """
    match = re.search(r"\d+%|\d+K \d+Kb/s", output)
    return match.group(0) if match else ""


# Create a dictionary to store download tasks
download_tasks = []
# Create a lock object to synchronize access to the dictionary
download_tasks_lock = threading.Lock()
# Create a thread that will execute the download tasks
download_thread = None
# Create a variable to store the path of the download that needs to be canceled
cancel_path = None


def download_worker():
    while True:
        task = None
        with download_tasks_lock:
            # Get a task from the list
            if download_tasks:
                task = download_tasks.pop(0)
        if task is not None:
            # Execute the download task and update the download progress
            download_url_with_agent(
                url=task["url"],
                save_path=task["save_path"],
                file_name=task["filename"],
                file_hash=task.get("file_hash"),
                force_filename=task.get("force_filename", False),
            )
            # calculate newly downloaded models' hash
            start_populate_file_hash_dict()

        else:
            # No more tasks, break the loop
            send_ws("download_progress", [])
            break


@server.PromptServer.instance.routes.post("/model_manager/install_model")
async def install_model(request):
    global download_thread

    json_data = await request.json()
    with download_tasks_lock:
        # Add the task to the list
        download_tasks.append(json_data)

    # If the previous thread is not active, start a new one
    if download_thread is None or not download_thread.is_alive():
        download_thread = threading.Thread(target=download_worker)
        download_thread.daemon = True
        download_thread.start()

    return web.Response(
        text=f"Downloading {json_data['url']} to {json_data['save_path']} ..."
    )


@server.PromptServer.instance.routes.post("/model_manager/cancel_installation")
async def cancel_installation(request):
    global download_thread, cancel_path

    json_data = await request.json()
    save_path = json_data["save_path"]
    is_canceled = False
    with download_tasks_lock:
        # Remove the task from the list
        for task in download_tasks:
            if task["filename"] == save_path:
                download_tasks.remove(task)
                is_canceled = True
                break
        print(download_tasks)

    # if the download is not in task list, the download is in progress, cancel it
    if not is_canceled:
        cancel_path = save_path

    return web.Response(text=f"Canceled download to {save_path} ...")


def download_url_with_agent(url, save_path, file_name, file_hash, force_filename=False):
    print("download_url_with_agent", url, save_path)
    global cancel_path

    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        }
        print(f"Downloading {url} to {save_path} ...")

        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            if response.status != 200:
                raise Exception(f"Request returned status code {response.status}")

            file_size = int(response.headers.get("content-length", 0))
            print(f"File size: {file_size} bytes")
            content_disposition = response.headers.get("Content-Disposition")
            if not force_filename and content_disposition:
                pattern = re.compile(r'filename="([^"]+)"')
                match = pattern.search(content_disposition)
                if match:
                    file_name = match.group(1)
            file_path = os.path.join(get_model_dir(save_path), file_name)
            if file_hash is not None:
                save_file_hash(file_path, file_hash)

            temp_file_path = file_path + ".temp"  # Temporary file
            chunk_size = 1024  # 1KB per chunk
            downloaded = 0

            if file_size == 0:
                html = response.read().decode()
                title = re.search(r"<title>(.*?)</title>", html)[0]
                if "Sign in" in title:
                    raise ValueError("You need to add API key to download this model.")
                else:
                    raise ValueError(f"Download failed. {title}")

            if not os.path.exists(os.path.dirname(temp_file_path)):
                os.makedirs(os.path.dirname(temp_file_path))

            with open(temp_file_path, "wb") as f:
                while True:
                    if cancel_path == file_path:
                        break
                    chunk = response.read(chunk_size)
                    if not chunk:
                        break
                    f.write(chunk)
                    downloaded += len(chunk)
                    progress = (downloaded / file_size) * 100
                    print(f"\rProgress: {progress:.2f}%", end="")
                    send_download_status({"save_path": file_path, "progress": progress})

            if cancel_path == file_path:
                print(f"\nDownload to {save_path} is canceled.")
                if os.path.exists(temp_file_path):
                    os.remove(temp_file_path)
                cancel_path = None
                return False

        # Rename temp file to final filename after successful download
        os.rename(temp_file_path, file_path)

    except Exception as e:
        print(f"\nDownload error: {url} / {e}", file=sys.stderr)
        send_ws("download_error", f"{url} / {e}")
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)  # Clean up the temporary file in case of failure
        return False

    print("\nDownload complete. File saved as:", save_path)
    return True

def get_model_dir(save_path):
    if os.path.isabs(save_path):
        return save_path
    else:
        return folder_paths.folder_names_and_paths[save_path][0][0]


last_call_time = 0
def send_download_status(data):
    global last_call_time
    current_time = time.time()
    if current_time - last_call_time < 0.1:
        return
    last_call_time = time.time()
    with download_tasks_lock:
        progress_list = [data]
        for task in download_tasks:
            progress_list.append({"save_path": task["filename"], "progress": 0})
        send_ws("download_progress", progress_list)


loop = asyncio.get_event_loop()
def send_ws(event, data):
    asyncio.run_coroutine_threadsafe(
        server.PromptServer.instance.send(event, data), loop
    )
