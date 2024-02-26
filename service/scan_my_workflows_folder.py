import os
import json
import uuid
import tempfile
import server
import asyncio
from aiohttp import web

id_cache = {}
# Scan .json and folders in the given path
@server.PromptServer.instance.routes.post("/workspace/scan_my_workflows_files")
async def scan_local_new_files(request):
    reqJson = await request.json()
    path = reqJson['path']
    print("Scanning path: ", path)
    
    fileList = await asyncio.to_thread(folder_handle, path)
    return web.Response(text=json.dumps(fileList), content_type='application/json')

def folder_handle(path):
    global id_cache
    fileList = []
    for item in os.listdir(path):
        try:
            item_path = os.path.join(path, item)
            if os.path.isfile(item_path) and item_path.endswith('.json'):
                stats = os.stat(item_path)
                creation_time = stats.st_ctime
                update_time = stats.st_mtime
                with open(item_path, 'r', encoding='utf-8') as f:
                    file_handle(item, f, fileList, item_path, creation_time, update_time)

            elif os.path.isdir(item_path):
                fileList.append({
                    'name': item,
                    'type': 'folder',
                })
        except Exception as e:
            print(f"Error scanning file {item}: {e}")
    return fileList

def file_handle(name, file, fileList, file_path, creation_time, update_time):
    json_data = json.load(file)
    if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
        workflow_id = json_data['extra']['workspace_info']['id']
        if workflow_id in id_cache and id_cache[workflow_id] < creation_time:
            # File with later creation time found, assign new ID
            workflow_id = str(uuid.uuid4())
            json_data['extra']['workspace_info']['id'] = workflow_id
            atomic_json_update(file_path, json_data)
        id_cache[workflow_id] = creation_time
    else:
        # If ID does not exist, generate a new UUID and add it to the JSON data
        workflow_id = str(uuid.uuid4())
        json_data.setdefault('extra', {}).setdefault('workspace_info', {})['id'] = workflow_id
        atomic_json_update(file_path, json_data)
        id_cache[workflow_id] = creation_time
    fileInfo = {
            'json': json.dumps(json_data),
            'name': name,
            'type': "workflow",
            'id': workflow_id,
            'createTime': creation_time,
            'updateTime': update_time
        }
    fileList.append(fileInfo)

def atomic_json_update(filepath, data):
    # Generate a temporary file
    dir_name, file_name = os.path.split(filepath)
    with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=dir_name, delete=False) as tmp_file:
        json.dump(data, tmp_file, indent=4)
        temp_name = tmp_file.name
    # Replace the old file with the new file atomically
    os.replace(temp_name, filepath)
