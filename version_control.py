import urllib.request
import zipfile
import io
import os

def get_remote_version(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode('utf-8').strip()
    except urllib.error.HTTPError as http_err:
        print(f"[Workspace Manager] HTTP error occurred: {http_err}")
        return None

def is_update_needed(local_version_file, remote_version_url):
    if not os.path.exists(local_version_file):
        return True  # Local version file doesn't exist, needs update

    with open(local_version_file, 'r') as file:
        local_version = file.read().strip()

    remote_version = get_remote_version(remote_version_url)
    print(f"[Workspace Manager] Current version: {local_version}, latest version: {remote_version}")
    if remote_version and local_version != remote_version:
        return True  # Versions are different
    else:
        return False  # No update needed

def download_and_extract_repo(url, extract_to='.'):
    try:
        with urllib.request.urlopen(url) as response:
            with zipfile.ZipFile(io.BytesIO(response.read())) as zip_ref:
                zip_ref.extractall(extract_to)
    except Exception as e:
        print(f"[Workspace Manager] Error occurred during download and extraction: {e}")

#main function
def update_version_if_outdated():
    # URLs and file paths
    repo_url = 'https://github.com/11cafe/comfyui-workspace-manager/archive/refs/heads/main.zip'
    version_file_local =os.path.join(os.path.dirname(__file__),'version.txt')
    version_file_remote = 'https://raw.githubusercontent.com/11cafe/comfyui-workspace-manager/main/version.txt'

    # Check if update is needed
    if is_update_needed(version_file_local, version_file_remote):
        print("[Workspace Manager] Update is needed. Downloading latest version...")
        download_and_extract_repo(repo_url, 'path_to_extract_to')

