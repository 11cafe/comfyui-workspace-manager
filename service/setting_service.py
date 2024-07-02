
import server
import os
import folder_paths
import json
import asyncio
from aiohttp import web
from .db_service import DEFAULT_USER, read_table, db_dir_path

comfy_path = os.path.dirname(folder_paths.__file__)

@server.PromptServer.instance.routes.get("/workspace/get_settings")
def get_settings_endpoint(request):
    settings = get_settings()
    return web.json_response(text=json.dumps(settings), content_type='application/json')

def get_settings():
    new_settings_path = os.path.join(db_dir_path, 'settings.json')
    if os.path.exists(new_settings_path):
        # to deprecate and remove legacy settings file
        # if os.path.exists(f'{db_dir_path}/useSettings.json'):
        #     os.remove(f'{db_dir_path}/useSettings.json')
        with open(new_settings_path, 'r') as file:
            return json.load(file)
    data = read_table('userSettings')
    if (data):
        records = json.loads(data)
        if DEFAULT_USER in records and 'myWorkflowsDir' in records[DEFAULT_USER]:  
            return records[DEFAULT_USER]
    return None

@server.PromptServer.instance.routes.post("/workspace/save_settings")
async def save_settings(request):
    data = await request.json()
    json_data = data
    file_name = f'{db_dir_path}/settings.json'
    # Offload file writing to a separate thread
    def write_json_string_to_db(file_name, json_data):
        if not os.path.exists(db_dir_path):
            os.makedirs(db_dir_path)
        # Write the JSON data to the specified file
        with open(file_name, 'w') as file:
            file.write(json.dumps(json_data, indent=4))
    await asyncio.to_thread(write_json_string_to_db, file_name, json_data)
    return web.Response(text=f"JSON saved to {file_name}")

def get_my_workflows_dir():
    data = get_settings()
    if (data):
        if 'myWorkflowsDir' in data:  
            curDir = data['myWorkflowsDir']  
        
        # this is to be compatible of a bug that a dict is stored in userSettings.myWorkflowsDir
        # should not be needed once all users refresh their settings
        if not isinstance(curDir, str):
            curDir = curDir.get('path', None)

        if curDir and os.path.exists(curDir):
            return curDir
    return os.path.join(comfy_path, 'my_workflows')
