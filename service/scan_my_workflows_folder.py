from aiohttp import web
import asyncio
import json
import os
import glob
from threading import Lock
import server

@server.PromptServer.instance.routes.post('/workspace/file/scan_dup_id')
async def scan_my_workflows_folder_recursive(request):
    reqJson = await request.json()
    path = reqJson.get('path')
    data = await asyncio.to_thread(scan_folder_sync, path)
    return web.json_response(data, content_type='application/json')

def scan_folder_sync(path):
    id_cache = {}  # Reset cache for each call
    id_cache_lock = Lock()  # Ensure thread safety

    def scan_folder(path):
        for json_file in glob.glob(os.path.join(path, '**/*.json'), recursive=True):
            with open(json_file, 'r', encoding='utf-8') as file:
                try:
                    data = json.load(file)
                    if 'extra' in data and 'workspace_info' in data['extra'] and 'id' in data['extra']['workspace_info']:
                        workspace_id = data['extra']['workspace_info']['id']
                        file_info = {
                            'path': json_file,
                            'createTime': os.path.getctime(json_file)
                        }

                        with id_cache_lock:
                            if workspace_id in id_cache:
                                id_cache[workspace_id].append(file_info)
                            else:
                                id_cache[workspace_id] = [file_info]
                except json.JSONDecodeError:
                    print(f"Error decoding JSON from file: {json_file}")

    scan_folder(path)

    duplicates = {workspace_id: infos for workspace_id, infos in id_cache.items() if len(infos) > 1}
    return {'duplicates': duplicates}


