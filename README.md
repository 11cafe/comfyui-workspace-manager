# ☕️ ComfyUI Workspace Manager - Comfyspace

A ComfyUI workflow and model manager extension to **organize and manage all your workflows, models and generated images in one place**. Seamlessly switch between workflows, track version history and image generation history, 1 click install models from Civit ai, browse/update your installed models

If you have questions or suggestions, please [join our Discord](https://discord.gg/HHvfEurv2Z)!

[New!] we're building a comfyui custom nodes library wiki like Pypi: https://www.nodecafe.org/
welcome any feedbacks!

🔴‼️ If you updated or cloned this repo between March 14-15, 2024, please update it again to latest verison, there were some bugs that may cause you lose changes in Auto Save mode.

<img width="610" alt="Screenshot 2024-03-08 at 6 41 18 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/30455eb1-3d12-4930-bb81-28b33148fbaa">

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
**Workflows manager**
  - 🔁Switch between different workflows easily. 1click open workflow in multiple browser tabs.
  - 🤏**Drag and drop** to insert subworkflows into current flow.
  - 🗂️Organize workflows with folders, tags
  - 📂Save and sync all your workflows in a local folder (by default under `/ComfyUI/my_workflows` customize in Settings)
    - **Save workflow by pressing the 💾 button, or ⌨Shift+S shortcut** (customize in Settings).
    - Every time you save, it will create a new record in **Version History**. You can easily revert to any version.
    - **Enable/disable autosave workflow**
  - 🕛**Version control** of workflow, create/switch versions
  - Bulk import workflows into your workspace
  - 1click download all your workflows into a .zip

**🔮Models manager**:
  - 1click install models from civitai to `models/` subfolder of the matching model type
  - Browse installed models with thumbnail image
  - drag and drop to insert "load model_type" node into workflow

**🖼️Image Gallery**: Every image/video you generate will be saved in the gallery of the current workflow. You can set any image in the gallery as the cover photo of the workflow
- Dark/light mode
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- [beta!]One-click share workflow

Recommend using Chrome browser for the best experience. Safari doesn't work well. Edge or firefox should be fine too.

[中文版教程](https://www.uisdc.com/workspace-manager) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Roadmap](https://github.com/orgs/11cafe/projects/1/views/1)

### 🦄v2.0 beta: Two-way sync with local folder, select model install path, cloud sync workflows

- Two-way sync with selected local folder so you can move files using File Explore or Finder to sync them with workspace!
- **Models manager support external models path like Automatic1111**! Choose models downloading folder from added external paths.
- Add models thumbnails image by putting a image file with the same name in models folder like A1111
- One click sharing to cloud to backup your workflows to cloud
- models list sort by date/name
  v2.0 demo: https://youtu.be/7Hht_BMe844

**Make sure you clicked these 2 buttons after updating to v2.0**
Once you have enabled two-way sync, DO NOT disable it again. We are migrating away from browser storage and embracing two-way sync with your local disk, so that everything is persistently stored in your disk.

<img width="541" alt="Screenshot 2024-03-11 at 12 24 35 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4b0d44ba-b2e4-4077-bb8a-262829787c05">

**v1.7 ComfyUI model manager, view your installed models, install models from civit ai, open workflow in multiple browser tabs**

<img width="700" alt="Screenshot 2024-02-02 at 5 51 13 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/86dc9007-c45c-4b7b-b74a-76ddc93c89a8">

<img width="400" alt="Screenshot 2024-01-23 at 12 27 34 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/3b543024-3a6b-4fca-9980-e535d83e206e">

<img width="200" alt="Screenshot 2024-01-23 at 12 26 56 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/d29d0831-a15a-4597-acf6-facee4dbc76e">

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

### How do I save my workflow?

Save your workflow by either clicking the 💾 floppy disk icon button or ⌨**Shift+S** shortcut (customize this shortcut in Settings)
Every time you save, it will create a new record in **Version History**. You can go back and switch versions in version history like git.

<img width="350" alt="Screenshot 2024-01-23 at 12 22 22 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/cc4eb504-6a65-44af-ad7f-d4a8b4ac7b9a">
<img width="300" alt="Screenshot 2024-01-23 at 12 23 21 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/041c2da8-d8cf-46b7-b9d8-45b415e764f8">

By default, We also enabled auto-saving your current workflow as a cache in case you forgot to save it manually. It will NOT affect or change your manually saved versions. You can always click **"Discard unsaved changes"** to instantly revert back to your last manually saved version.

‼️**You can disable this auto-saving behabior in Settings:**

<img width="297" alt="Screenshot 2024-01-23 at 12 37 37 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/9ca0a63e-ddae-4436-a374-6ef0276c23fb">
<img width="402" alt="Screenshot 2024-01-22 at 2 33 00 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/061a8463-f7e6-4985-9516-8117d7a5edd5">

### Where are my workflow and workspace data stored?

🗂️All your workflows are saved in a folder in `/ComfyUI/my_workflows`, you can change this path in settings.

<img width="360" alt="Screenshot 2024-01-02 at 10 22 45 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4751b096-0886-4a32-95b1-87c7ce5b3787">

Other metadata (versions, gallery images) is primarily stored in your browser cache (IndexDB) and backedup in your disk under `/ComfyUI/custom_nodes/comfyui-workspace-manager/db/`. Press F12 or Inspect in right click browser menu, go to Application -> IndexedDB -> comfyui_workspace_db to see your data (workflows, version history, gallery, etc.)

<img width="607" alt="303892585-c04ca874-03f0-4569-9a40-d8453dd9b031" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/17097e17-743d-499f-8f86-0eb1193d0e46">

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

We're constantly pushing new features in beta branch. Here is how to switch to beta branch to receive latest feature updates pre-launch! It requires you have some basic knowledge about command line and git.

- Make sure you have [git installed](https://git-scm.com/downloads)
- Open your terminal, go to the ComfyUI folder (where you do `python main.py`)
- in ComfyUI root directory, `cd custom_nodes && cd comfyui-workspace-manager`
- inside custom_nodes/comfyui-workspace-manager, do `git fetch origin beta && git checkout beta`, you should see something like:

```
From https://github.com/11cafe/comfyui-workspace-manager
 * branch            beta       -> FETCH_HEAD
Switched to branch 'beta'
Your branch is up to date with 'origin/beta'.
```

- Restart ComfyUI python server by `python main.py`

‼️ Be careful that beta branch can be unstable, so please please make sure you have backups for all your workflows! **Before switching to beta, please make a copy of these folders somewhere:**

`ComfyUI/custom_nodes/comfyui-workspace-manager/db`
or the entire `ComfyUI/custom_nodes/comfyui-workspace-manager/` folder

if anything goes wrong, you can always paste back these folders. Also, you should have your /my_workflows folder (workspace save directory) in safe place always

To revert back to main:

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
