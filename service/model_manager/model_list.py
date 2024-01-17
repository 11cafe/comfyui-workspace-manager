import os
import folder_paths
import server
from aiohttp import web
import hashlib

comfy_path = os.path.dirname(folder_paths.__file__)

model_root_dir = os.path.join(comfy_path, 'models')


# save file hash dict
file_hash_dict = {}

@server.PromptServer.instance.routes.get("/model_manager/get_model_list")
def get_model_list(request):
    file_list = []
    model_dir = folder_paths.models_dir

    for folder in folder_paths.folder_names_and_paths:
        # if model_dir not in folder_paths.folder_names_and_paths[folder][0]:
        #     continue
        if (folder == "configs" or folder == "custom_nodes"):
            continue
       
        files = folder_paths.get_filename_list(folder)
        for file in files:

            file_path = folder_paths.get_full_path(folder, file)
            # check if the file hash is already calculated
            if (file_path in file_hash_dict):
                file_hash = file_hash_dict[file_path]
            else:
                # sha256 hash of the file
                sha256_hash = hashlib.sha256()
                with open(file_path,"rb") as f:
                    # Read and update hash string value in blocks of 4K
                    for byte_block in iter(lambda: f.read(4096),b""):
                        sha256_hash.update(byte_block)
                    file_hash = sha256_hash.hexdigest()
                    file_hash_dict[file_path] = file_hash
            model_name = os.path.splitext(file)[0]
            file_list.append({"model_name": model_name, "model_type": folder, "model_extension": os.path.splitext(file)[1], "file_hash": file_hash})
    return web.json_response(file_list, content_type='application/json')

  

