
import server
import os
import folder_paths
import json
import asyncio
from aiohttp import web
from .model_manager.model_preview import get_thumbnail_for_image_file

workspace_path = os.path.join(os.path.dirname(os.path.dirname(__file__)))
comfy_path = os.path.dirname(folder_paths.__file__)
db_dir_path = os.path.join(workspace_path, "db")
DEFAULT_USER = "guest"

@server.PromptServer.instance.routes.post("/workspace/save_db")
async def save_db(request):
    # Extract parameters from the request
    data = await request.json()
    table = data['table']
    json_data = data['json']

    file_name = f'{db_dir_path}/{table}.json'
    # Offload file writing to a separate thread
    def write_json_string_to_db(file_name, json_data):
        if not os.path.exists(db_dir_path):
            os.makedirs(db_dir_path)
        # Write the JSON data to the specified file
        with open(file_name, 'w') as file:
            file.write(json.dumps(json_data, indent=4))
    await asyncio.to_thread(write_json_string_to_db, file_name, json_data)
    return web.Response(text=f"JSON saved to {file_name}")

def read_table(table):
    if not table:
        return None
    file_name = f'{db_dir_path}/{table}.json'
    if not os.path.exists(file_name):
        return None

    with open(file_name, 'r') as file:
        data = json.load(file)
    return data


@server.PromptServer.instance.routes.get("/workspace/get_db")
async def get_workspace(request):
    # Extract the table parameter from the query string
    table = request.query.get('table')
    data = await asyncio.to_thread(read_table, table)
    return web.json_response(data)

def get_my_workflows_dir():
    data = read_table('userSettings')
    if (data):
        records = json.loads(data)

        if DEFAULT_USER in records and 'myWorkflowsDir' in records[DEFAULT_USER]:  
            curDir = records[DEFAULT_USER]['myWorkflowsDir']  
        elif 'myWorkflowsDir' in records:  
            curDir = records['myWorkflowsDir']
        
        # this is to be compatible of a bug that a dict is stored in userSettings.myWorkflowsDir
        # should not be needed once all users refresh their settings
        if not isinstance(curDir, str):
            curDir = curDir.get('path', None)

        if curDir and os.path.exists(curDir):
            return curDir
    return os.path.join(comfy_path, 'my_workflows')
