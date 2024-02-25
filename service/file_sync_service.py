import asyncio
import tempfile
import server
import os
from aiohttp import web
import json
import uuid
from pathlib import Path

@server.PromptServer.instance.routes.post('/workspace/create_workflow_file')
async def create_workflow_file(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(create_workflow_file, reqJson)
    return web.json_response(data, content_type='application/json')
def create_workflow_file(reqJson):
    print("🍻Create workflow file:", reqJson['name'])
    try:
        parentFolderPath = reqJson.get('parentFolderPath')
        name = reqJson.get('name')
        workflow_json = reqJson.get('json')
        
        if not parentFolderPath or not name or workflow_json is None:
            return {}  # Missing necessary data

        abs_path = Path(parentFolderPath)
        # Create the directory if it does not exist
        abs_path.mkdir(parents=True, exist_ok=True)
        
        # Ensuring the file name is unique
        base_name, extension = os.path.splitext(name)
        if extension != '.json':  # Ensure the extension is .json
            extension = '.json'
        new_file_name = base_name + extension
        counter = 1
        while (abs_path / new_file_name).exists():
            new_file_name = f"{base_name}_{counter}{extension}"
            counter += 1
        
        new_file_path = abs_path / new_file_name

        # Writing JSON data to the file
        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(workflow_json)
        print("✅Created workflow file:", new_file_path)
        new_base_name,ext = os.path.splitext(new_file_name)
        return {"name": new_base_name}
    except Exception as e:
        print(f"Failed to create workflow file: {e}")
        return {}  # In case of any error

def read_workflow_file(path, id):
    print("🍻Read workflow file:", path, id)
    abs_path = Path(path)

    with open(abs_path, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
        if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
            workflow_id = json_data['extra']['workspace_info']['id']
            if workflow_id == id:
                return {"json": json_data}
            return {"error": "Workflow ID doesn't match"}
    return {"error": "No workspace_info.id found in the file"}

@server.PromptServer.instance.routes.post('/workspace/get_workflow_file')
async def get_workflow_file(request):
    reqJson = await request.json()
    path = reqJson.get('path')
    id = reqJson.get('id')
    
    data = await asyncio.to_thread(read_workflow_file, path, id)
    
    return web.json_response(data, content_type='application/json')
    
# Scan .json and folders in the given path
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
        try:
            item_path = os.path.join(path, item)
            if os.path.isfile(item_path) and item_path.endswith('.json'):
                with open(item_path, 'r', encoding='utf-8') as f:
                    file_handle(item, f, fileList, item_path)

            elif os.path.isdir(item_path):
                fileList.append({
                    'name': item,
                    'type': 'folder',
                })
        except Exception as e:
            print(f"Error scanning file {item}: {e}")
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