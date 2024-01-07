# ☕️ ComfyUI Workspace Manager - Comfyspace

A ComfyUI workflow management extension to **organize and manage all your workflows in one place**. Seamlessly switch between workflows, track version history and image generation history within a single workspace, like Google Docs.

If you have questions or suggestions, please 
<a href="https://discord.gg/HHvfEurv2Z">
  <img src="https://animeartmagazine.com/wp-content/uploads/2022/05/discord-button600.webp" alt="Join Discord" width="120"/>
</a>

[📚Official Wiki Docs](https://github.com/11cafe/comfyui-workspace-manager/wiki)

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
### 📣Update 01/03/2024 - Gallery and cover images
Every image/video you generate will be saved in the gallery of the current workflow. You can set any image in the gallery as the cover photo of the workflow

<img width="400" alt="Screenshot 2024-01-03 at 9 05 01 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/879ea664-c06b-4abb-b4f0-a9305ade3bc9">
<img width="394" alt="Screenshot 2024-01-03 at 7 35 20 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/ae818652-8680-48a2-bdd3-bd02cb20ad16">

### 📣Update 12/29/2023 - Manual save, version history
Finally, you can **manually save** your workflow by either click the 💾 floppy disk icon beside the workflow name or Shift+S shortcut (you can customize this shortcut in Settings)
Everytime you save, it will create a new record in **Version History** (you can access this in the dropdown menu on the left side of the name topbar)
You can go back and switch versions in version history. You won't need to worry about losing any changes from now on!

<img width="400" alt="Screenshot 2023-12-29 at 9 59 57 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/88c82672-ebf2-4feb-bf5b-74b447843c2c">

- 🔁Effortlessly switch between different workflows in your workspace.
- 🤏**Drag and drop** to insert subworkflows into current flow.
- Create and name workflows
- 🗂️Organize workflows with folders, 🏷️tags
- 📂Saves all your workflows in a single folder (by default under `/ComfyUI/my_workflows`), customize this location in Settings
- 🖼️Gallery and cover images: Every image/video you generate will be saved in the gallery of the current workflow. You can set any image in the gallery as the cover photo of the workflow
- 🕛**Version control** of workflow, never lose any changes (Everytime you press save, it will log a new version in history. you can easily revert back to any versions like git)
- **Bulk import** workflows into your workspace
- 📑Quickly duplicate flow in right-click menu
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- One-click share workflow (Upcoming!)

switch between flows:

<img src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/11543a0f-6cc4-41fb-8666-772ab9a2cfe6" width="500">

🤏drag and drop to insert sub-workflow:

<img src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/7540c45b-be51-4428-8558-96adcc1024c8" width="480">

🗂️Organize your workflows with folders:

<img width="340" alt="Screenshot 2023-12-28 at 11 20 01 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/b14ede49-8d2a-486e-a9e1-5e871864e4f7">

Choose the folder location where you want to save your workflows .json files in Settings:

<img width="500" alt="Screenshot 2024-01-02 at 10 22 45 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4751b096-0886-4a32-95b1-87c7ce5b3787">


Bulk import flows:

![import flows](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/884c8852-73c7-41d6-9179-7fb1fcea9d04)

add tags to flow: <img width="500" alt="Screenshot 2023-12-13 at 1 54 04 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/6bf4d22b-f52a-4d23-8882-4a31162616f3">

Workflow operations: Manual Save, Download, Discard unsaved changes: 

<img width="500" alt="Screenshot 2023-12-29 at 9 59 57 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/88c82672-ebf2-4feb-bf5b-74b447843c2c">

Version history:

<img width="387" alt="Screenshot 2023-12-29 at 11 17 37 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/ac8c52d7-c339-46a0-8682-ed03b0cab75d">

duplicate flow by right click menu option:
<img width="385" alt="Screenshot 2023-12-29 at 9 58 26 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/b74c4405-8232-4e39-b995-3b4877d27c9e">


**Looking for colaborators and coworkers** to develop this ComfyUI project management tool. If you know React, Python or ML model deployment, please reach out to weixuanfu01@gmail.com We want to make it easy to **manage, share and deploy** ComfyUI project.

## FAQ

### Where are my workflow and workspace data stored?

🍺 All your workflows are now output to a folder in `/ComfyUI/my_workflows` ⚠️Note: this is a ONE-WAY sync folder, that will only reflect changes made from your ComfyUI workspace browser; If you add some files manually using your OS file system (e.g. Finder in MacOS, File Explorer in Windows), workspace manager will not be able to pickup those changes. You need to use the "Import" button in files side bar to add new files to workspace manager.

Our internal db data is stored in your disk under /ComfyUI/custom_nodes/comfyui-workspace-manager/db/

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
