import asyncio
import tempfile
import server
import os
from aiohttp import web
import json
import uuid
from pathlib import Path
from .twoway_sync_folder_service import *
import shutil

@server.PromptServer.instance.routes.post('/workspace/file/save')
async def save_file(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(save_file_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def save_file_sync(reqJson):
    current_path = reqJson.get('path')
    new_json_data_str = reqJson.get('json')
    try:
        new_json_data = json.loads(new_json_data_str)
    except json.JSONDecodeError:
        return { "error": "New JSON data is not valid JSON."}
    expected_id = new_json_data.get('extra', {}).get('workspace_info', {}).get('id', None)
    
    try:
        with open(current_path, 'r', encoding='utf-8') as file:
            current_json_data = json.load(file)
        # Extract the id from the current file's content
        current_id = current_json_data.get('extra', {}).get('workspace_info', {}).get('id', None)

        # Compare the current id with the expected id
        if current_id is not None and current_id != expected_id:
            return {"error": "Mismatching workspace_info.id."}
    except json.JSONDecodeError:
        # If there's a JSON decode error, it means the file is not a valid JSON
        return { "error": "Existing file is not a valid JSON."}
    except FileNotFoundError:
        # This block is optional since os.path.exists already checks for the file's existence
        return {"error": "File not found."}
    
    # If checks pass, write the new JSON data to the file
    try:
        with open(current_path, 'w', encoding='utf-8') as file:
            file.write(new_json_data_str)
        return {"success": True}
    except Exception as e:
        return { "error": str(e)}

@server.PromptServer.instance.routes.post('/workspace/file/rename')
async def rename_file(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(rename_file_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def rename_file_sync(reqJson):
    current_path = reqJson.get('path')
    new_name = reqJson.get('newName')
    try:
        new_path = Path(current_path).parent / new_name
        # if new_path.suffix != ".json":
        #     raise ValueError("New file name must have a .json extension")
        Path(current_path).rename(new_path)
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

@server.PromptServer.instance.routes.post('/workspace/file/move')
async def move_file(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(move_file_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def move_file_sync(reqJson):
    current_path = reqJson.get('path')
    new_path = reqJson.get('newParentPath')
    try:
        target_path = Path(new_path) / Path(current_path).name
        # if target_path.suffix != ".json":
        #     raise ValueError("Target file must be a .json file")
        shutil.move(current_path, new_path)
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

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

@server.PromptServer.instance.routes.post('/workspace/file/gen_unique_name')
async def generate_unique_file_name(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(generate_unique_file_name_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def generate_unique_file_name_sync(reqJson):
    file_path = reqJson.get('path')
    if not file_path:
        return {"success": False, "error": "File path is required"}

    path = Path(file_path)
    if not path.parent.is_dir():
        return {"success": False, "error": "Directory of the provided path does not exist"}

    original_name = path.stem
    extension = path.suffix
    directory = path.parent
    counter = 1
    new_name = f"{original_name}{extension}"

    while (directory / new_name).exists():
        new_name = f"{original_name}{counter}{extension}"
        counter += 1

    return {"success": True, "uniqueName": new_name}

@server.PromptServer.instance.routes.post('/workspace/file/count_files')
async def count_files(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(count_files_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def count_files_sync(reqJson):
    directory_path = reqJson.get('path')
    if not directory_path:
        return {"success": False, "error": "Directory path is required"}

    path = Path(directory_path)
    if not path.is_dir():
        return {"success": False, "error": "Provided path is not a directory"}

    file_count = sum(1 for _ in path.rglob('*') if _.is_file())

    return {"success": True, "count": file_count}

