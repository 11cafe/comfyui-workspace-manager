import platform
from aiohttp import web
import asyncio
import json
import os
import glob
from threading import Lock
import server
import uuid
from .db_service import get_my_workflows_dir

@server.PromptServer.instance.routes.post('/workspace/file/scan_my_workflows_folder')
async def scan_my_workflows_files(request):
    reqJson = await request.json()
    path = reqJson['path']
    path = os.path.join(get_my_workflows_dir(), path)
    recursive = reqJson.get('recursive', False)
    metaInfoOnly = reqJson.get('metaInfoOnly', False)
    
    fileList = await asyncio.to_thread(folder_handle, path, recursive, metaInfoOnly)
    return web.Response(text=json.dumps(fileList), content_type='application/json')

def folder_handle(path, recursive, metaInfoOnly, fileList=None):
    if fileList is None:
        fileList = []
    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        try:
            if os.path.isfile(item_path) and item_path.endswith('.json'):
                file_handle(item, fileList, item_path, metaInfoOnly)

            elif os.path.isdir(item_path):
                createTime, updateTime = getFileCreateTime(item_path)
                fileList.append({
                    'name': item,
                    'type': 'folder',
                    'createTime': createTime,
                    'updateTime': updateTime
                })
                # Recursively scan if recursive is True
                if recursive:
                    folder_handle(item_path, recursive, metaInfoOnly, fileList)
        except Exception as e:
            print(f"Error scanning item {item}: {e}")
    return fileList

def file_handle(name, fileList, file_path, metaInfoOnly):
    with open(file_path, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    createTime, updateTime = getFileCreateTime(file_path)
    workspace_info = json_data.get('extra', {}).get('workspace_info', {})   
    workflow_id = workspace_info.get('id', str(uuid.uuid4())) 
    # Update JSON data with new ID if needed and write back to file
    if 'id' not in workspace_info:
        if 'extra' not in json_data:
            json_data['extra'] = {}
        if 'workspace_info' not in json_data['extra']:
            json_data['extra']['workspace_info'] = {}
        json_data['extra']['workspace_info']['id'] = workflow_id
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=4)
    
    fileInfo = {
            'name': name,
            'type': "workflow",
            'id': workflow_id,
            'createTime': createTime,
            'updateTime': updateTime
        }
    
    if not metaInfoOnly:
        fileInfo['json'] = json.dumps(json_data)
        
    fileList.append(fileInfo)

def getFileCreateTime(path):
    # Cross-platform compatibility for creation time
    file_stats = os.stat(path)
    if platform.system() == 'Windows':
        createTime = int(file_stats.st_ctime * 1000)
    else:  # macOS and potentially others
        createTime = int(getattr(file_stats, 'st_birthtime', file_stats.st_ctime) * 1000)
    
    updateTime = int(file_stats.st_mtime * 1000)
    return createTime, updateTime