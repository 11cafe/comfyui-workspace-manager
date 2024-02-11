# ☕️ ComfyUI Workspace Manager - Comfyspace

A ComfyUI workflow management extension to **organize and manage all your workflows, models and generated images in one place**. Seamlessly switch between workflows, track version history and image generation history, 1 click install models from Civit ai, browse/update your installed models

If you have questions or suggestions, please [join our Discord](https://discord.gg/HHvfEurv2Z)!

<a href="https://discord.gg/HHvfEurv2Z">
  <img src="https://animeartmagazine.com/wp-content/uploads/2022/05/discord-button600.webp" alt="Join Discord" width="120"/>
</a>

## Installation

### [Option 1] via ComfyUI Manager (Preferred)

Simply search for “ComfyUI Workspace Manager”, install, and restart ComfyUI.

### [Option 2] via git

Like any other custom node installation, in your ComfyUI root folder

```
cd custom_nodes && git clone https://github.com/11cafe/comfyui-workspace-manager.git
```

and restart your ComfyUI.

It is recommended to do git clone than downloading zip folder, because you can get latest updates by `git pull`!

## Features

- 🔁Effortlessly switch between different workflows in your workspace. 1click open workflow in new browser tab.
- [new!] **Model manager**: 1click install models from civitai to `models/` subfolder of the matching model type, browse all your installed models and drag and drop to insert "load model_type" node into workflow, automatic detect and install missing models for workflow from civit ai and hugging face
- 🗂️Organize workflows with folders, 🏷️tags
- 🤏**Drag and drop** to insert subworkflows into current flow.
- 📂Saves all your workflows in a single folder (by default under `/ComfyUI/my_workflows`), customize this location in Settings
- 🖼️Gallery and thumbnail: Every image/video you generate will be saved in the gallery of the current workflow. You can set any image in the gallery as the cover photo of the workflow
- 🕛**Version control** of workflow, never lose any changes (Everytime you press save, it will log a new version in history. you can easily revert back to any versions like git)
- **Bulk import/export** workflows into your workspace or select all to download into .zip
- 📑Quickly duplicate flow in right-click menu
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- One-click share workflow (Upcoming!)

Recommend using Chrome browser for the best experience. Safari doesn't work well. Edge or firefox should be fine too.

Roadmap: https://github.com/orgs/11cafe/projects/1/views/1

### v1.7 ✨New ComfyUI model manager, view all your models, browse and install models from civit ai, find missing models in workflow automatically in civit ai and hugging face!

open workflow in new tab, 1click model install from civitai, automatic install missing models for workflow, view image gen metadata in gallery (prompt, sampler, models used).

<img width="300" alt="Screenshot 2024-02-02 at 5 51 31 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/a95dbf03-bd5a-43ce-af1f-b6ff246acf77">

<img width="700" alt="Screenshot 2024-02-02 at 5 51 13 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/86dc9007-c45c-4b7b-b74a-76ddc93c89a8">

<img width="400" alt="Screenshot 2024-01-23 at 12 27 34 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/3b543024-3a6b-4fca-9980-e535d83e206e">

<img width="200" alt="Screenshot 2024-01-23 at 12 26 56 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/d29d0831-a15a-4597-acf6-facee4dbc76e">

### V1.5

Manually save your workflow by pressing the 💾 button, or ⌨**Shift+S** shortcut (customize this shortcut in Settings). Every time you save, it will create a new record in **Version History**. You can go back and switch versions in version history like git.
Every image/video you generate will be saved in the gallery of the current workflow. You can set any image in the gallery as the cover photo of the workflow.

<img width="467" alt="sidebar" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/0b9b5e1a-02b4-46ed-ab5c-cb8ed366765f">

<img width="460" alt="gallery" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/2b7886c9-2d4a-46c6-adac-429720f74f11">

switch between flows:

<img src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/11543a0f-6cc4-41fb-8666-772ab9a2cfe6" width="500">

🤏drag and drop to insert sub-workflow:

<img src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/7540c45b-be51-4428-8558-96adcc1024c8" width="480">

Bulk import flows:

<img width="400" alt="Screenshot 2024-01-02 at 10 22 45 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/884c8852-73c7-41d6-9179-7fb1fcea9d04">

add tags to flow:

<img width="400" alt="Screenshot 2023-12-13 at 1 54 04 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/6bf4d22b-f52a-4d23-8882-4a31162616f3">

Workflow operations: Manual Save, Download, Discard unsaved changes:

<img width="500" alt="Screenshot 2023-12-29 at 9 59 57 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/88c82672-ebf2-4feb-bf5b-74b447843c2c">

duplicate flow by right click menu option:

<img width="200" alt="Screenshot 2023-12-29 at 9 58 26 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/b74c4405-8232-4e39-b995-3b4877d27c9e">

### Where are my workflow and workspace data stored?

🍺 All your workflows are saved in a folder in `/ComfyUI/my_workflows`, you can change this path in settings.

⚠️Note: this is a ONE-WAY sync folder by default, that will only reflect changes made from your ComfyUI workspace browser; If you add some files manually using your OS file system (e.g. Finder in MacOS, File Explorer in Windows), workspace manager will not be able to pickup those changes. You need to use the "Import" button in files side bar to add new files to workspace manager.

<img width="360" alt="Screenshot 2024-01-02 at 10 22 45 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4751b096-0886-4a32-95b1-87c7ce5b3787">

All your data is primarily stored in your browser cache (IndexDB) and backedup in your disk under `/ComfyUI/custom_nodes/comfyui-workspace-manager/db/`. Press F12 or Inspect in right click browser menu, go to Application -> IndexedDB -> comfyui_workspace_db to see your data (workflows, version history, gallery, etc.)

<img width="400" alt="Screenshot 2024-02-11 at 9 03 53 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/c04ca874-03f0-4569-9a40-d8453dd9b031">



### How do I save my workflow?

Save your workflow by either clicking the 💾 floppy disk icon button or ⌨**Shift+S** shortcut (customize this shortcut in Settings)
Every time you save, it will create a new record in **Version History**. You can go back and switch versions in version history like git.

<img width="350" alt="Screenshot 2024-01-23 at 12 22 22 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/cc4eb504-6a65-44af-ad7f-d4a8b4ac7b9a">
<img width="300" alt="Screenshot 2024-01-23 at 12 23 21 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/041c2da8-d8cf-46b7-b9d8-45b415e764f8">

By default, We also enabled auto-saving your current workflow as a cache in case you forgot to save it manually. It will NOT affect or change your manually saved versions. You can always click **"Discard unsaved changes"** to instantly revert back to your last manually saved version.

‼️**You can disable this auto-saving behabior in Settings:**

<img width="297" alt="Screenshot 2024-01-23 at 12 37 37 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/9ca0a63e-ddae-4436-a374-6ef0276c23fb">
<img width="402" alt="Screenshot 2024-01-22 at 2 33 00 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/061a8463-f7e6-4985-9516-8117d7a5edd5">

**Looking for colaborators and coworkers** to develop this ComfyUI project management tool. If you know React, Python or ML model deployment, please reach out to weixuanfu01@gmail.com We want to make it easy to **manage, share and deploy** ComfyUI project.

## Upcoming Features

1. 1-Click Install Models
   Often when you import a json workflow from online, it will show lots of missing nodes or models errors, we will provide easy one-click install for missing models from Hugging face and Civiti

2. Modular
   Modern software development project are all modularized, the whole system is broken down into different modules. In ComfyUI each custom node is a module and should be self contained and easy to install and depend on from other modules. So that the modules (custom nodes) can be easily reused across projects.
   ➡️ We need something like web bundler, e.g. webpack, vite. This will make each custom node self contained and has a clear definition of its dependency.

3. Multi workflow project
   Now you can only work on one workflow at a time, this limits the potential to build large scale workflows that consists multiple sub-workflows parts. Each workflow can be seen as a custom node. You should be able to easily convert one workflow into one custom node. You can reuse workflow/custom node across your project.
   ➡️ We need a cross workflow, project management tool, like VSCode editor

4. Cloud running / easy deployment
   Right now you need to have python and GPU server up to run ComfyUI or Automatic111, that’s really painful for people who do not own a GPU. You should be able to run UI independently without paying for GPU💰.
   ➡️ Share and deploy your workflow to cloud in 1click and other people can easily run in browser using cloud GPU with no setup. It should be as easy as running Google Docs or Figma.

## Beta Preview

We're constantly pushing new features in beta branch, and only wait til it's thoroghly tested then push it to main. But if you would like to join our Beta Preview Program, you can receive latest feature updates pre-launch! Here is how to switch to beta, it requires you have some basic knowledge about command line and git.

- Make sure you have [git installed](https://git-scm.com/downloads)
- Open your terminal, go to the ComfyUI directory (where you usually start your python server by `python main.py`
- in ComfyUI root directory, `cd custom_nodes && cd comfyui-workspace-manager`
- inside custom_nodes/comfyui-workspace-manager, do `git fetch origin beta && git checkout beta`, you should see something like:

```
From https://github.com/11cafe/comfyui-workspace-manager
 * branch            beta       -> FETCH_HEAD
Switched to branch 'beta'
Your branch is up to date with 'origin/beta'.
```

- now go back to ComfyUI restart your python server by `python main.py`

‼️ Be careful that beta branch can be unstable, so please please make sure you have backups for all your workflows! **Before switching to beta, please make a copy of these folders somewhere:**

`ComfyUI/custom_nodes/comfyui-workspace-manager/db`
or for extra safety, you can make a copy of the entire `ComfyUI/custom_nodes/comfyui-workspace-manager/` folder

if anything goes wrong, you can always paste back these folders. Also, you should have your /my_workflows folder (workspace save directory) in safe place always

If anything goes wrong, and you want to revert back to main, please do the following:

- inside custom_nodes/comfyui-workspace-manager, do `git checkout main`, then restart your python server and you are back into main branch!

## Credits

ComfyUI: https://github.com/comfyanonymous/ComfyUI

ComfyUI Browser: https://github.com/talesofai/comfyui-browser (Media display code for reference)
And thanks to all custom node creators building the community!

## Dev

1. Clone ComfyUI
   `git clone https://github.com/comfyanonymous/ComfyUI`
   follow the install and setup instructions of ComfyUI README
2. Clone Workspace Manager
   in /ComfyUI folder

```
cd custom_nodes && git clone https://github.com/11cafe/comfyui-workspace-manager.git
```

3. npm install
   inside `/ComfyUI/custom_nodes/comfyui-workspace-manager`
   do `cd ui && npm install`
   this will install all node dependencies
4. build and run
   inside `/ComfyUI/custom_nodes/comfyui-workspace-manager/ui`
   `npm run build --watch`
   this command will watch for your file changes and automatically rebuild, you just need to refresh to see your changes in browser everyting you change some code
5. run ComfyUI server
   inside `/ComfyUI`
   do `python main.py` or `python3 main.py` depending on your version

#### IndexDB trouble shooting

If you see indexdb version mismatch error in console that looks like:

```
VersionError: The requested version (10) is less than the existing version (30)."
name
:
"DatabaseClosedError"
```

please delete indexdb manually F12 Dev tools -> Application -> IndexDB -> WorkspaceManagerDB
<img width="460" alt="Screenshot 2024-01-21 at 11 21 55 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/adcde47f-c620-42ad-9367-e16e5be92be1">

and delete localstorage.WORKSPACE_INDEXDB_BACKFILL
<img width="460" alt="Screenshot 2024-01-21 at 11 29 02 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/f3c17034-c863-481a-8771-8e7e87bcee07">

only do this if you are a developer
