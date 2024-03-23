import asyncio
import server
from aiohttp import web
import folder_paths
import shutil
import os
import sys
import subprocess  # don't remove this
from urllib.parse import urlparse
import subprocess
import os
import json
from .service.model_manager.model_installer import download_url_with_wget
from .service.model_manager.model_list import get_model_list
from .service.media_service import *
from .service.file_sync_service import *
from .service.db_service import get_my_workflows_dir
from .service.node_service import *

WEB_DIRECTORY = "entry"
NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
version = "V1.0.0"

print(f"### Loading: Workspace Manager ({version})")
workspace_path = os.path.join(os.path.dirname(__file__))
comfy_path = os.path.dirname(folder_paths.__file__)
db_dir_path = os.path.join(workspace_path, "db")

dist_path = os.path.join(workspace_path, 'dist/workspace_web')
if os.path.exists(dist_path):
    server.PromptServer.instance.app.add_routes([
        web.static('/workspace_web/', dist_path),
    ])

BACKUP_DIR = os.path.join(workspace_path, "backup")
MAX_BACKUP_FILES = 20

@server.PromptServer.instance.routes.post("/workspace/list_backup")
async def list_backup(request):
    try:
        data = await request.json()
        dir_path = os.path.join(BACKUP_DIR, data.get('dir'))
        # List all files in the directory
        files = os.listdir(dir_path)

        # Filter out .json files and sort them by filename (which starts with Unix timestamp)
        json_files = sorted(
            [file for file in files if file.endswith('.json')],
            key=lambda x: x,  # Assuming the format is 'timestamp_filename.json'
            reverse=True
        )

        # Select the 10 most recent files
        recent_json_files = json_files[:10]

        # Read the contents of each JSON file
        file_contents = []
        for file in recent_json_files:
            with open(os.path.join(dir_path, file), 'r') as f:
                content = json.load(f)
                file_contents.append({"fileName": file, "jsonStr": content})

        return web.Response(text=json.dumps(file_contents), content_type='application/json')
    except Exception as e:
        return web.Response(text=json.dumps({"error": str(e)}), status=500)


@server.PromptServer.instance.routes.post("/workspace/get_system_dir")
async def get_system_dir(request):
    try:
        reqData = await request.json()
        dir_path = reqData['absolute_dir']
        if not dir_path:
            dir_path = comfy_path
        if not os.path.isdir(dir_path):
            raise ValueError("[workspace] get_system_dir Not a directory")

        dir_contents = [folder for folder in os.listdir(dir_path)
                        if os.path.isdir(os.path.join(dir_path, folder)) and not folder.startswith('.')]

        return web.Response(text=json.dumps({"dir_path": dir_path, "dir_contents": dir_contents}), content_type='application/json')
    except Exception as e:
        print('🔴🔴Error',e)
        return web.Response(text=json.dumps({"error": str(e)}), status=500)


@server.PromptServer.instance.routes.get("/workspace/get_my_workflows_dir")
async def fetch_my_workflows_dir(request):
    try:
        dir = get_my_workflows_dir()
        return web.Response(text=json.dumps({"path": dir, "os": sys.platform}), content_type='application/json')
    except Exception as e:
        return web.Response(text=json.dumps({"error": str(e)}), status=500)

@server.PromptServer.instance.routes.post("/workspace/update_file")
async def update_file(request):
    data = await request.json()
    file_path = data['file_path']
    json_str = data['json_str']

    def write_json_to_file(json_str):
        my_workflows_dir = get_my_workflows_dir()
        full_path = os.path.join(my_workflows_dir, file_path)
        print(f"Writing to file: {full_path}")
        # Create the directory if it doesn't exist
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, 'w', encoding='utf-8') as file:
            file.write(json_str)
            
    # Offload the file update to a separate thread
    await asyncio.to_thread(write_json_to_file, json_str)
    return web.Response(text="File updated successfully")


@server.PromptServer.instance.routes.post("/workspace/delete_file")
async def delete_file(request):
    data = await request.json()
    file_path = data['file_path']
    delete_empty_folder = data['deleteEmptyFolder']

    def sync_delete_file(file_path, delete_empty_folder):
        my_workflows_dir = get_my_workflows_dir()
        full_path = os.path.join(my_workflows_dir, file_path)

        if os.path.exists(full_path):
            os.remove(full_path)
            directory = os.path.dirname(full_path)
            if delete_empty_folder and not os.listdir(directory):
                # If the directory is empty, remove the directory
                os.rmdir(directory)
                return "File and empty directory deleted successfully"
            else:
                return "File deleted successfully"
        else:
            return "File not found"

    # Run the synchronous file operation in a separate thread
    response_text = await asyncio.to_thread(sync_delete_file, file_path, delete_empty_folder)
    
    if response_text == "File not found":
        return web.Response(text=response_text, status=404)
    else:
        return web.Response(text=response_text)


@server.PromptServer.instance.routes.post("/workspace/rename_file")
async def rename_file(request):
    data = await request.json()
    file_path = data['file_path']
    new_name = data['new_file_path']

    if os.path.exists(file_path):
        os.rename(file_path, new_name)
        return web.Response(text="File renamed successfully")
    else:
        return web.Response(text="File not found", status=404)

@server.PromptServer.instance.routes.post("/workspace/open_workflow_file_browser")
async def open_workflow_file_browser(request):
    my_workflows_dir = get_my_workflows_dir()
    try:
        if sys.platform == 'win32':
            subprocess.run(['explorer', my_workflows_dir])
        elif sys.platform == 'darwin':
            subprocess.run(['open', my_workflows_dir])
        else:  # Assuming Unix/Linux
            subprocess.run(['xdg-open', my_workflows_dir])
        return web.Response(text=json.dumps('open successfully'), content_type='application/json')
    except Exception as e:
        return web.Response(text=json.dumps({"error": str(e)}), status=500)

@server.PromptServer.instance.routes.post("/workspace/delete_folder")
async def delete_folder(request):
    data = await request.json()
    folder_path = data['folder_path']

    if os.path.exists(folder_path):
        shutil.rmtree(folder_path)
        return web.Response(text="Successfully deleted folder: {folder_path}")
    else:
        return web.Response(text="folder not found: {folder_path}", status=404)
        