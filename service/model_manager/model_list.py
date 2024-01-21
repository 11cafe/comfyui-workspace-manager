import asyncio
import os
import folder_paths
import server
from aiohttp import web
import hashlib
import shelve
import threading
import os

# The path to the file where file_hash_dict will be saved
FILE_HASH_DICT_FOLDER_PATH = os.path.join(os.path.dirname(__file__),"../../hash")
FILE_HASH_DICT_PATH = os.path.join(FILE_HASH_DICT_FOLDER_PATH,"file_hash_dict")
if not os.path.exists(FILE_HASH_DICT_FOLDER_PATH):
    os.makedirs(FILE_HASH_DICT_FOLDER_PATH)
# Use shelve to store file_hash_dict
file_hash_dict = shelve.open(FILE_HASH_DICT_PATH)

file_list = []
file_list_lock = threading.Lock()

# Add a global variable to track if populate_file_hash_dict is done
populate_started = False
populate_done = False

def compute_hash(file_path):
    # sha256 hash of the file
    sha256_hash = hashlib.sha256()
    with open(file_path,"rb") as f:
        # Read and update hash string value in blocks of 4K
        for byte_block in iter(lambda: f.read(4096),b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()

def process_file(folder, file):
    file_path = folder_paths.get_full_path(folder, file)
    # check if the file hash is already calculated
    if (file_path in file_hash_dict):
        file_hash = file_hash_dict[file_path]
    else:
        file_hash = None  # placeholder for hash
    [model_name, model_extension] = os.path.splitext(file)
    return {"model_name": model_name, "model_type": folder, "model_extension": model_extension, "file_hash": file_hash}

def populate_file_hash_dict():
    global populate_done, file_list
    local_file_list = []
    for folder in folder_paths.folder_names_and_paths:
        if (folder == "configs" or folder == "custom_nodes"):
            continue
        files = folder_paths.get_filename_list(folder)
        for file in files:
            local_file_list.append(process_file(folder, file))
    with file_list_lock:
        file_list = local_file_list
        send_ws('model_list', file_list)  # send the list without hash to the client
    # After all files are added, calculate hashes for those that don't have it yet
    for file in file_list:
        if file["file_hash"] is None:
            file_path = folder_paths.get_full_path(file["model_type"], file["model_name"] + file["model_extension"])
            file_hash = compute_hash(file_path)
            file_hash_dict[file_path] = file_hash
            with file_list_lock:
                file["file_hash"] = file_hash
                send_ws('model_list', file_list)  # update the list with the new hash
    # Set populate_done to True when done
    populate_done = True

def start_populate_file_hash_dict():
    global populate_thread, populate_started, populate_done
    populate_running = populate_started == True and populate_done == False
    if (populate_running):
        return
    populate_started = True
    populate_thread = threading.Thread(target=populate_file_hash_dict)
    populate_thread.daemon = True
    populate_thread.start()

start_populate_file_hash_dict()

@server.PromptServer.instance.routes.get("/model_manager/get_model_list")
def get_model_list(request):
    with file_list_lock:
        return web.json_response(file_list, content_type='application/json')

loop = asyncio.get_event_loop()
def send_ws(event, data):
    asyncio.run_coroutine_threadsafe(server.PromptServer.instance.send(event, data) , loop)