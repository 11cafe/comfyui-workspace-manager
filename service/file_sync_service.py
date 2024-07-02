import asyncio
import folder_paths
from datetime import datetime
import server
import os
from aiohttp import web
import json
import uuid
from pathlib import Path
from .twoway_sync_folder_service import *
import shutil
from .scan_my_workflows_folder import *

@server.PromptServer.instance.routes.post('/workspace/file/save')
async def save_file(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(save_file_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def save_file_sync(reqJson):
    current_path = reqJson.get('path')
    new_json_data_str = reqJson.get('json')
    current_path = os.path.join(get_my_workflows_dir(), current_path)
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
    except FileNotFoundError:
        return {"error": f"File not found in path {current_path}"}
    except Exception as e:
        return { "error": str(e)}
    
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
    current_path = Path(get_my_workflows_dir()) / reqJson['path']
    new_name = reqJson.get('newName')
    try:
        new_path = current_path.parent / new_name
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
    current_path = os.path.join(get_my_workflows_dir(), current_path)
    new_path = os.path.join(get_my_workflows_dir(), new_path)
    try:
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
    try:
        parentFolderPath = reqJson.get('parentFolderPath')
        name = reqJson.get('name')
        workflow_json = reqJson.get('json')
        
        if not name or workflow_json is None:
            print('🔴Create workflow missing necessary data')
            return {}  # Missing necessary data
        abs_path = Path(get_my_workflows_dir()) / parentFolderPath
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
    abs_path = os.path.join(get_my_workflows_dir(), path)
    create_time, update_time = getFileCreateTime(abs_path)
    with open(abs_path, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
        if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
            workflow_id = json_data['extra']['workspace_info']['id']
            if workflow_id == id:
                return {"json": json_data, "createTime": create_time, "updateTime": update_time}
            return {"error": "Workflow ID doesn't match"}
    return {"error": "No workspace_info.id found in the file"}


def check_and_update_workflow_id(file_path, seen_ids):
    with open(file_path, "r", encoding="utf-8") as f:
        try:
                json_data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Error reading JSON from {file_path}: {e}")
            return
        if (
            "extra" in json_data
            and "workspace_info" in json_data["extra"]
            and "id" in json_data["extra"]["workspace_info"]
        ):
            workflow_id = json_data["extra"]["workspace_info"]["id"]
            create_time, update_time = getFileCreateTime(file_path)
            if workflow_id in seen_ids:
                if create_time > seen_ids[workflow_id]["time"]:
                    # Update the current file
                    json_data["extra"]["workspace_info"]["id"] = str(uuid.uuid4())
                    with open(file_path, "w", encoding="utf-8") as f:
                        json.dump(json_data, f)
                else:
                    # Update the previously seen file
                    old_file_path = seen_ids[workflow_id]["path"]
                    with open(old_file_path, "r", encoding="utf-8") as f:
                        old_json_data = json.load(f)
                    old_json_data["extra"]["workspace_info"]["id"] = str(uuid.uuid4())
                    with open(old_file_path, "w", encoding="utf-8") as f:
                        json.dump(old_json_data, f)
            seen_ids[workflow_id] = {
                "time": create_time,
                "path": file_path,
            }


def dedupe_workflow_ids():
    abs_path = get_my_workflows_dir()
    seen_ids = {}
    for root, dirs, files in os.walk(abs_path):
        for file in files:
            if not file.endswith(".json"):
                continue
            file_path = os.path.join(root, file)
            try:
                check_and_update_workflow_id(file_path, seen_ids)
            except Exception as e:
                print(f"Error while processing file {file_path}: {e}")

@server.PromptServer.instance.routes.get('/workspace/deduplicate_workflow_ids')
async def deduplicate_workflow_ids(request):
    await asyncio.to_thread(dedupe_workflow_ids)
    return web.json_response(text="success", content_type='application/json')

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
                createTime, updateTime = getFileCreateTime(item_path)
                fileList.append({
                    'name': item,
                    'type': 'folder',
                    'createTime': createTime,
                    'updateTime': updateTime
                })
        except Exception as e:
            print(f"Error scanning file {item}: {e}")
    return fileList

def file_handle(name, file, fileList, file_path):
    json_data = json.load(file)
    createTime, updateTime = getFileCreateTime(file_path)
    if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
        workflow_id = json_data['extra']['workspace_info']['id']
    else:
        # If ID does not exist, generate a new UUID and add it to the JSON data
        new_id = str(uuid.uuid4())
        json_data.setdefault('extra', {}).setdefault('workspace_info', {})['id'] = new_id
        with open(file_path, 'w', encoding='utf-8') as file:
            json.dump(json_data, file, ensure_ascii=False, indent=4)
    
    fileInfo = {
            'json': json.dumps(json_data),
            'name': name,
            'type': "workflow",
            'id': json_data['extra']['workspace_info']['id'],
            'createTime': createTime,
            'updateTime': updateTime
        }
    fileList.append(fileInfo) 

@server.PromptServer.instance.routes.post('/workspace/file/gen_unique_name')
async def generate_unique_file_name(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(generate_unique_file_name_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def generate_unique_file_name_sync(reqJson):
    file_path = reqJson.get('path')
    if not file_path:
        return {"success": False, "error": "File path is required"}

    path = Path(get_my_workflows_dir()) / file_path
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

    path = Path(get_my_workflows_dir()) / directory_path
    if not path.is_dir():
        return {"success": False, "error": "Provided path is not a directory"}
    file_count = 0
    for file in path.rglob('*.json'):  # Only consider .json files
        if file.is_file():
            file_count += 1
    return {"success": True, "count": file_count}
# Begin: Copy all files to the new directory when switching the save directory
@server.PromptServer.instance.routes.post('/workspace/copy_json_files')
async def copy_json_files(request):
    reqJson = await request.json()
    src_dir = reqJson['src']
    dest_dir = reqJson['dst']
    try:
        for item in os.listdir(src_dir):
            src_item_path = os.path.join(src_dir, item)
            dest_item_path = os.path.join(dest_dir, item)

            if os.path.isdir(src_item_path):
                dest_item_path = await get_unique_dir_name(dest_item_path)
                await asyncio.to_thread(shutil.copytree, src_item_path, dest_item_path)
            elif item.endswith('.json'):
                dest_item_path = await get_unique_file_name(dest_item_path)
                await asyncio.to_thread(shutil.copy2, src_item_path, dest_item_path)

        return web.json_response({"success": True}, content_type='application/json')
    except Exception as e:
        return web.json_response({"success": False, "error": str(e)}, content_type='application/json')

async def get_unique_file_name(path):
    base, extension = os.path.splitext(path)
    counter = 1
    while os.path.exists(path):
        path = f"{base}_{counter}{extension}"
        counter += 1
    return path

async def get_unique_dir_name(path):
    original_path = path
    counter = 1
    while os.path.exists(path):
        path = f"{original_path}_{counter}"
        counter += 1
    return path
# End: Copy all files to the new directory when switching the save directory

@server.PromptServer.instance.routes.post('/workspace/images/save')
async def save_images(request):
    reader = await request.multipart()
    subfolder = "workspace_manager"  # 默认子文件夹，实际上你可能会从表单中动态获取
    output_path = folder_paths.get_output_directory()
    safe_dir = Path(os.path.join(output_path, subfolder))
    if not safe_dir.exists():
        safe_dir.mkdir(parents=True, exist_ok=True)

    # 用于存储保存的文件路径
    files_saved = []
    # 处理multipart/form-data中的每一部分
    async for part in reader:
        if part.name.startswith('images'):
            filename = part.filename
            if not filename:
                continue
            file_path = safe_dir / filename
            loop = asyncio.get_running_loop()
            # 异步写入文件
            with open(file_path, 'wb') as f:
                while True:
                    chunk = await part.read_chunk()  # 默认8192 bytes
                    if not chunk:
                        break
                    await loop.run_in_executor(None, f.write, chunk)
            files_saved.append(str(file_path))
    return web.Response(text=json.dumps({"imgPaths": files_saved}), content_type='application/json')
