import asyncio
import os
import folder_paths
import server
from aiohttp import web
import hashlib
import shelve
import threading
import os
import urllib.request
import json
from .model_preview import preview_file

# The path to the file where file_hash_dict will be saved
FILE_HASH_DICT_FOLDER_PATH = os.path.join(os.path.dirname(__file__), "../../hash")
FILE_HASH_DICT_PATH = os.path.join(FILE_HASH_DICT_FOLDER_PATH, "file_hash_dict")
if not os.path.exists(FILE_HASH_DICT_FOLDER_PATH):
    os.makedirs(FILE_HASH_DICT_FOLDER_PATH)

# Early open shelve for better performance
with shelve.open(FILE_HASH_DICT_PATH) as file_hash_dict_early_open:
    print(f"Workspace manager - Openning file hash dict")

file_list = []
file_list_lock = threading.Lock()

# Add a global variable to track if populate_file_hash_dict is done
is_populating = False


def save_file_hash(file_path, file_hash):
    with shelve.open(FILE_HASH_DICT_PATH) as file_hash_dict:
        file_hash_dict[file_path] = file_hash


def compute_hash(file_path):
    # sha256 hash of the file
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        # Read and update hash string value in blocks of 4K
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()


def process_file(folder, file):
    file_path = folder_paths.get_full_path(folder, file)
    # check if the file hash is already calculated
    file_hash = None
    with shelve.open(FILE_HASH_DICT_PATH) as file_hash_dict:
        if file_path in file_hash_dict:
            file_hash = file_hash_dict[file_path]
    [model_name, model_extension] = os.path.splitext(file)
    return {
        "model_name": model_name,
        "model_type": folder,
        "model_extension": model_extension,
        "file_hash": file_hash,
        "preview": preview_file(file_path),
        "date": os.path.getmtime(file_path),
    }


def populate_file_hash_dict():
    global is_populating, file_list
    local_file_list = []
    folder_list = dict(folder_paths.folder_names_and_paths)
    for folder in folder_list:
        if folder == "configs" or folder == "custom_nodes":
            continue
        files = folder_paths.get_filename_list(folder)
        for file in files:
            try:
                local_file_list.append(process_file(folder, file))
            except Exception as e:
                print(f"Error processing file: {file} in folder: {folder}. Error: {e}")
    with file_list_lock:
        file_list = local_file_list
        send_ws("model_list", file_list)  # send the list without hash to the client
    # After all files are added, calculate hashes for those that don't have it yet
    for file in file_list:
        try:
            if file["file_hash"] is None:
                file_path = folder_paths.get_full_path(
                    file["model_type"], file["model_name"] + file["model_extension"]
                )
                file_hash = compute_hash(file_path)
                with shelve.open(FILE_HASH_DICT_PATH) as file_hash_dict:
                    file_hash_dict[file_path] = file_hash
                with file_list_lock:
                    file["file_hash"] = file_hash
                    send_ws("model_list", file_list)  # update the list with the new hash
        except Exception as e:
            print(f"Error calculating hash for file: {file}. Error: {e}")
    # Set populate_done to True when done
    is_populating = False


def civit_get_model_by_hash(file_hash: str):
    if file_hash is None:
        return None
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        }
        url = f"https://civitai.com/api/v1/model-versions/by-hash/{file_hash}"
        req = urllib.request.Request(url, headers=headers)
        # Making a GET request
        with urllib.request.urlopen(req) as response:
            data = response.read()
            encoding = response.info().get_content_charset("utf-8")
            result = json.loads(data.decode(encoding))
        return result
    except Exception as e:
        return None


def start_populate_file_hash_dict():
    global populate_thread, is_populating
    if is_populating:
        return
    is_populating = True
    populate_thread = threading.Thread(target=populate_file_hash_dict)
    populate_thread.daemon = True
    populate_thread.start()


@server.PromptServer.instance.routes.get("/model_manager/get_model_list")
def get_model_list(request):
    start_populate_file_hash_dict()
    with file_list_lock:
        return web.json_response(file_list, content_type="application/json")


@server.PromptServer.instance.routes.get("/model_manager/get_folder_list")
def get_folder_list(request):
    dirList = {k: v[0] for k, v in folder_paths.folder_names_and_paths.items()}
    return web.json_response(dirList, content_type="application/json")


loop = asyncio.get_event_loop()
def send_ws(event, data):
    asyncio.run_coroutine_threadsafe(
        server.PromptServer.instance.send(event, data), loop
    )