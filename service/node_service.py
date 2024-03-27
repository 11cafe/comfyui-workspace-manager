import inspect
import json
import os
import subprocess
from nodes import NODE_CLASS_MAPPINGS
import server
from aiohttp import web

def get_git_repo(node_type: str):
    if node_type not in NODE_CLASS_MAPPINGS:
        return None
    
    cls = NODE_CLASS_MAPPINGS[node_type]
    source_file = inspect.getfile(cls)
    directory = os.path.dirname(source_file)
    
    # Attempt to get the remote repository URL directly
    try:
        git_repo = subprocess.check_output(["git", "-C", directory, "config", "--get", "remote.origin.url"], text=True).strip()
    except subprocess.CalledProcessError:
        return None

    # Attempt to get the current commit hash
    try:
        commit_hash = subprocess.check_output(["git", "-C", directory, "rev-parse", "HEAD"], text=True).strip()
    except subprocess.CalledProcessError:
        return None
    if git_repo.endswith(".git"):
        git_repo = git_repo[:-4]
    username = git_repo.split("/")[-2]
    repo_name = git_repo.split("/")[-1]
    return {"repoID": f"{username}/{repo_name}", "commitHash": commit_hash}

@server.PromptServer.instance.routes.post("/workspace/fetch_node_repos")  # Handle POST requests
async def fetch_node_repos(request):
    data = await request.json()
    nodetypes = data.get("nodes")
    if not nodetypes:
        return web.Response(status=400, text="NodeTypes parameter is required and should be a list of node types.")
    repos = {}
    for nodetype in nodetypes:
        try:
            repo = get_git_repo(nodetype)
            if repo:
                repos[repo.get('repoID')] = repo
        except Exception as e:
            print(f"Error fetching repo for {nodetype}: {e}")
    result = list(repos.values())
    return web.Response(text=json.dumps(result), content_type='application/json')

