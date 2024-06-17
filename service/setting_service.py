
import server
import os
import folder_paths
import json
import asyncio
from aiohttp import web
from .db_service import DEFAULT_USER, read_table, db_dir_path

@server.PromptServer.instance.routes.get("/workspace/get_settings")
def get_settings_endpoint(request):
    settings = get_settings()
    return web.json_response(text=json.dumps(settings), content_type='application/json')

def get_settings():
    # if os.path.exists(f'{db_dir_path}/settings.json'):
    #     with open(f'{db_dir_path}/settings.json', 'r') as file:
    #         return json.load(file)
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
