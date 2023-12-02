import server
from aiohttp import web
import aiohttp
import requests
import folder_paths
import os
import sys
import threading
import datetime
import re
import locale
import subprocess  # don't remove this
from tqdm.auto import tqdm
import concurrent
import ssl
from urllib.parse import urlparse
import http.client
import re
import signal


WEB_DIRECTORY = "ui/dist"
NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
version = "V1.0.0"

print(f"### Loading: Workspace Manager ({version})")
comfy_path = os.path.dirname(folder_paths.__file__)
js_path = os.path.join(comfy_path, "web", "extensions")

def setup_js():
    import nodes
    js_dest_path = os.path.join(js_path, WEB_DIRECTORY)
    print('wspace manager js_dest_path', js_dest_path)
    # if hasattr(nodes, "EXTENSION_WEB_DIRS"):
    #     if os.path.exists(js_dest_path):
    #         shutil.rmtree(js_dest_path)
    # else:
    #     # setup js
    #     if not os.path.exists(js_dest_path):
    #         os.makedirs(js_dest_path)
    #     js_src_path = os.path.join(comfyui_manager_path, "js", "comfyui-manager.js")

    #     print(f"### Workspace-Manager: Copy .js from '{js_src_path}' to '{js_dest_path}'")
    #     shutil.copy(js_src_path, js_dest_path)
setup_js()

def fetch_server(nodes):
    print('fetch_server search_github', nodes)
    url = 'https://jox4fzk7ppi4glx56ohupt27su0ilcmv.lambda-url.us-west-1.on.aws/'
    params = {
        'nodes': nodes,
    }
    response = requests.get(url, json=params)
    print('response', response.json())
    if response.status_code == 200:
        return response.json()
    else:
        return {
            'error': 'Failed to find custom nodes'
        }


@server.PromptServer.instance.routes.post("/workspace/install_nodes")
async def install_nodes(request):
    post_params = await request.json()
    print('postparams',post_params)
    resp = fetch_server(post_params['nodes']) # [{'authorName': 'Fannovel16', 'gitHtmlUrl': 'https://github.com/Fannovel16/comfyui_controlnet_aux', 'totalInstalls': 1, 'description': None, 'id': 'TilePreprocessor'}]
    print('resp', resp)
    return web.json_response(resp, content_type='application/json')





