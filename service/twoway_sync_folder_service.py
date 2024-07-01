import asyncio
import shutil
from aiohttp import web
import os
from pathlib import Path
import server
from .setting_service import get_my_workflows_dir
try:
    from send2trash import send2trash
except ImportError:
    send2trash = None

@server.PromptServer.instance.routes.post('/workspace/folder/create')
async def create_folder(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(create_folder_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def create_folder_sync(reqJson):
    folder_path = reqJson.get('path')
    folder_path = os.path.join(get_my_workflows_dir(), folder_path)
    try:
        Path(folder_path).mkdir(parents=True, exist_ok=True)
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

@server.PromptServer.instance.routes.post('/workspace/folder/delete')
async def delete_folder(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(delete_folder_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def delete_folder_sync(reqJson):
    folder_path = reqJson.get('path')
    folder_path = os.path.join(get_my_workflows_dir(), folder_path)
    try:
        if send2trash:
            send2trash(folder_path)
        else:
            shutil.rmtree(folder_path)
            print("❌⛔️send2trash is not available. Deleting file permanently. Please `pip install send2trash`")
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

@server.PromptServer.instance.routes.post('/workspace/folder/rename')
async def rename_folder(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(rename_folder_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def rename_folder_sync(reqJson):
    current_path = reqJson.get('absPath')
    current_path = os.path.join(get_my_workflows_dir(), current_path)
    new_name = reqJson.get('newName')
    try:
        new_path = Path(current_path).parent / new_name
        Path(current_path).rename(new_path)
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

@server.PromptServer.instance.routes.post('/workspace/folder/move')
async def move_folder(request):
    reqJson = await request.json()
    data = await asyncio.to_thread(move_folder_sync, reqJson)
    return web.json_response(data, content_type='application/json')

def move_folder_sync(reqJson):
    current_path = reqJson.get('folder')
    current_path = os.path.join(get_my_workflows_dir(), current_path)
    new_path =  os.path.join(get_my_workflows_dir(), reqJson.get('newParentPath',"")) 
    try:
        shutil.move(current_path, new_path)
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

