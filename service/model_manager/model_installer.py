import asyncio
import subprocess
import os
import re
import sys
from aiohttp import web
import folder_paths
import urllib.request
import server
import server
from .missing_models import find_missing_models

comfy_path = os.path.dirname(folder_paths.__file__)
def download_url_with_wget(url, save_path):
    print(f"Downloading {url} to {save_path} ...")
    if not is_wget_installed():
        print("wget is not installed. Please install wget or use a different download method.")
        return False

    try:
        # url="https://github.com/Weixuanf/cdn-test/blob/main/workspace-manager-5YgCydJJ.js"
        command = f"wget -c '{url}' -O '{save_path}' --show-progress"
        process = subprocess.Popen(command, shell=True, stderr=subprocess.PIPE)

        while True:
            output = process.stderr.readline()
            if process.poll() is not None and output == b'':
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
        subprocess.run("wget --version", shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return True
    except subprocess.CalledProcessError:
        return False

def parse_wget_output(output):
    """
    Parse wget output to extract and return the download progress.
    """
    match = re.search(r'\d+%|\d+K \d+Kb/s', output)
    return match.group(0) if match else ""

import queue
import threading

# Create a Queue object
download_queue = queue.Queue()
# Create a thread that will execute the download tasks
download_thread = None
# Create a Condition object to share the download progress
download_progress = threading.Condition()
download_progress.value = {'progress': "", 'error': None}

def download_worker():
    while not download_queue.empty():
        # Get a download task from the queue
        (url, save_path) = download_queue.get()

        # Execute the download task and update the download progress
        download_url_with_agent(url, save_path)

        # Indicate that the task is done
        download_queue.task_done()

    # If all tasks are done, reset the progress and exit
    with download_progress:
        download_progress.value['progress'] = ""
        download_progress.notify_all()

@server.PromptServer.instance.routes.post("/model_manager/install_model")
async def install_model(request):
    global download_thread

    json_data = await request.json()
    url = json_data['url']
    save_path = get_model_path(json_data)

    download_queue.put((url, save_path))

    # If the previous thread is not active, start a new one
    if download_thread is None or not download_thread.is_alive():
        download_thread = threading.Thread(target=download_worker)
        download_thread.daemon = True
        download_thread.start()

    return web.Response(text=f"Downloading {url} to {save_path} ...")

@server.PromptServer.instance.routes.get("/model_manager/download_progress")
def get_download_progress(request):
    with download_progress:
        if download_progress.value['error'] is not None:
            error = download_progress.value['error']
            download_progress.value['error'] = None
            return web.Response(text=error)
        else:
            return web.Response(text=download_progress.value['progress'])

@server.PromptServer.instance.routes.post("/model_manager/install_model_stream")
async def install_model_stream(request):
    json_data = await request.json()
    model_path = get_model_path(json_data)

    response = web.StreamResponse()
    response.headers['Content-Type'] = 'text/plain'
    await response.prepare(request)
    print(f"🖌️Model Manager: Installing model '{json_data['name']}' into '{model_path}' ...")
    async def progress_callback(progress):
        progress_message = f"Installing {json_data['name']}: {progress:.2f}%\n"
        await response.write(progress_message.encode('utf-8'))

    try:
        if model_path is not None:
            result = await download_url_with_agent(json_data['url'], model_path, progress_callback)
            if result:
                await response.write(b"Installation complete.\n")
            else:
                await response.write(b"Installation failed.\n")
        else:
            print(f"Model installation error: invalid model type - {json_data['type']}")
            await response.write(b"Installation failed: Invalid model type.\n")

    except Exception as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        await response.write(f"Installation failed: {e}\n".encode('utf-8'))

    await response.write_eof()
    return response

def download_url_with_agent(url, save_path, progress_callback=None):
    print('download_url_with_agent', url, save_path)

    temp_save_path = save_path + ".temp"  # Temporary file

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        print(f"Downloading {url} to {temp_save_path} ...")

        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            file_size = int(response.headers.get('content-length', 0))
            chunk_size = 1024  # 1KB per chunk
            downloaded = 0

            if not os.path.exists(os.path.dirname(temp_save_path)):
                os.makedirs(os.path.dirname(temp_save_path))

            with open(temp_save_path, 'wb') as f:
                while True:
                    chunk = response.read(chunk_size)
                    if not chunk:
                        break
                    f.write(chunk)
                    downloaded += len(chunk)
                    progress = (downloaded / file_size) * 100
                    print(f'\rProgress: {progress:.2f}%', end='')
                    with download_progress:
                        download_progress.value['progress'] = f'Downloading {os.path.basename(save_path)}: {progress:.2f}%'  # Update the download progress
                        download_progress.notify_all()

                    # if progress_callback:
                    #     progress_callback(progress)

        # Rename temp file to final filename after successful download
        os.rename(temp_save_path, save_path)

    except Exception as e:
        print(f"\nDownload error: {url} / {e}", file=sys.stderr)
        with download_progress:
            download_progress.value['error'] = f"\nDownload error: {url} / {e}"  # Update the download progress
            download_progress.notify_all()
        if os.path.exists(temp_save_path):
            os.remove(temp_save_path)  # Clean up the temporary file in case of failure
        return False

    print("\nDownload complete. File saved as:", save_path)
    return True

def get_model_dir(data):
    if data['save_path'] != 'default':
        if '..' in data['save_path'] or data['save_path'].startswith('/'):
            print(f"[WARN] '{data['save_path']}' is not allowed path. So it will be saved into 'models/etc'.")
            base_model = "etc"
        else:
            if data['save_path'].startswith("custom_nodes"):
                base_model = os.path.join(comfy_path, data['save_path'])
            else:
                base_model = os.path.join(folder_paths.models_dir, data['save_path'])
    else:
        model_type = data['type']
        if model_type == "checkpoints":
            base_model = folder_paths.folder_names_and_paths["checkpoints"][0][0]
        elif model_type == "unclip":
            base_model = folder_paths.folder_names_and_paths["checkpoints"][0][0]
        elif model_type == "VAE":
            base_model = folder_paths.folder_names_and_paths["vae"][0][0]
        elif model_type == "lora":
            base_model = folder_paths.folder_names_and_paths["loras"][0][0]
        elif model_type == "T2I-Adapter":
            base_model = folder_paths.folder_names_and_paths["controlnet"][0][0]
        elif model_type == "T2I-Style":
            base_model = folder_paths.folder_names_and_paths["controlnet"][0][0]
        elif model_type == "controlnet":
            base_model = folder_paths.folder_names_and_paths["controlnet"][0][0]
        elif model_type == "clip_vision":
            base_model = folder_paths.folder_names_and_paths["clip_vision"][0][0]
        elif model_type == "gligen":
            base_model = folder_paths.folder_names_and_paths["gligen"][0][0]
        elif model_type == "upscale":
            base_model = folder_paths.folder_names_and_paths["upscale_models"][0][0]
        elif model_type == "embeddings":
            base_model = folder_paths.folder_names_and_paths["embeddings"][0][0]
        else:
            base_model = "etc"

    return base_model


def get_model_path(data):
    base_model = get_model_dir(data)
    return os.path.join(base_model, data['filename'])