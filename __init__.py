import server
from aiohttp import web
import aiohttp
import shutil
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

def search_github(node_name):
    url = f"https://api.github.com/search/repositories"
    params = {
        'q': query,
        'per_page': per_page,
        'page': page
    }
    headers = {
        'Accept': 'application/vnd.github.v3+json'
    }
    response = requests.get(url, params=params, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        return response.json()


@server.PromptServer.instance.routes.get("/workspace/install_nodes")
async def install_nodes(request):
    nodes_to_install = request.rel_url.query["nodes"]





