import asyncio
import tempfile
import server
import os
from aiohttp import web
import json
import uuid

# For two way sync
# Scan .json and folders, extract extra.workspace_info.id in the .json files 
@server.PromptServer.instance.routes.post("/workspace/scan_my_workflows_files")
async def scan_local_new_files(request):
    reqJson = await request.json()
    path = reqJson['path']
    print("Scanning path: ", path)
    
    fileList = await asyncio.to_thread(folder_handle, path)

    
    return web.Response(text=json.dumps(fileList), content_type='application/json')

def folder_handle(path):
    fileList = []
    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        if os.path.isfile(item_path) and item_path.endswith('.json'):
            with open(item_path, 'r', encoding='utf-8') as f:
                file_handle(item, f, fileList, item_path)

        elif os.path.isdir(item_path):
            fileList.append({
                'name': item,
                'type': 'folder',
            })
    return fileList

def file_handle(name, file, fileList, file_path):
    json_data = json.load(file)
    if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
        workflow_id = json_data['extra']['workspace_info']['id']
    else:
        # If ID does not exist, generate a new UUID and add it to the JSON data
        new_id = str(uuid.uuid4())
        json_data.setdefault('extra', {}).setdefault('workspace_info', {})['id'] = new_id
        atomic_json_update(file_path, json_data)
    fileInfo = {
            'json': json.dumps(json_data),
            'name': name,
            'type': "workflow",
            'id': json_data['extra']['workspace_info']['id']
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