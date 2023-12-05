import urllib.request
import zipfile
import io
import os
import shutil
import tempfile
import subprocess

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

def download_and_extract_repo(url, extract_to):
    print(f"[Workspace Manager] Downloading from {url} to {extract_to}")
    try:
        # Create a temporary directory to extract the zip file
        with tempfile.TemporaryDirectory() as tmp_dir:
            with urllib.request.urlopen(url) as response:
                with zipfile.ZipFile(io.BytesIO(response.read())) as zip_ref:
                    # Extract to the temporary directory
                    zip_ref.extractall(tmp_dir)
                    # Assuming the first directory in the zip is the one we want
                    extracted_folder = os.path.join(tmp_dir, os.listdir(tmp_dir)[0])

                    # Move contents to the desired location
                    for filename in os.listdir(extracted_folder):
                        shutil.move(os.path.join(extracted_folder, filename), os.path.join(extract_to, filename))

    except Exception as e:
        print(f"[Workspace Manager] Error occurred during download and extraction: {e}")

def fetch_and_merge_main():
    try:
        # Fetch the latest changes from the remote
        subprocess.run(["git", "fetch"], check=True)
        # Checkout the local main branch
        subprocess.run(["git", "checkout", "main"], check=True)
        # Merge the remote main branch into the local main branch
        subprocess.run(["git", "merge", "origin/main"], check=True)
        print("[Workspace Manager] main branch updated successfully.")

    except subprocess.CalledProcessError as e:
        print(f"[Workspace Manager] An error occurred: {e}")

#main function
def update_version_if_outdated():
    # URLs and file paths
    repo_url = 'https://github.com/11cafe/comfyui-workspace-manager/archive/refs/heads/main.zip'
    version_file_local =os.path.join(os.path.dirname(__file__),'version.txt')
    version_file_remote = 'https://raw.githubusercontent.com/11cafe/comfyui-workspace-manager/main/version.txt'

    # Check if update is needed
    if is_update_needed(version_file_local, version_file_remote):
        print("[Workspace Manager] Update is needed. Downloading latest version...")
        fetch_and_merge_main()
        # download_and_extract_repo(repo_url, os.path.dirname(__file__))

