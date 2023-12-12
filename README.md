# ☕️ ComfyUI Workspace Manager - Comfyspace

A ComfyUI custom node for project management to **centralize the management of all your workflows in one place**. Seamlessly switch between workflows, create and update them within a single workspace, like Google Docs.

If you have questions or suggestions, please join our [Discord Channel](https://discord.gg/bN9E8MnMT5)

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

Demo video: https://youtu.be/II7Xxpz4TVw

walkthrough tutorial: https://www.youtube.com/watch?v=QbtSkiZ9F58

- Effortlessly switch between different workflows in your workspace.
- Create new workflows and rename existing ones.
- organize workflows with **tags**
- auto exports all workflows in a single folder (right it's under /ComfyUI/my_workflows)
- [beta] auto backup workspace locally
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- One-click share workflow (Upcoming!)

![switch flow (1)](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/79cbc1b5-9b1a-44c5-835a-8c6645409d9d)
![import flows](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/884c8852-73c7-41d6-9179-7fb1fcea9d04)
<img width="500" alt="Screenshot 2023-12-13 at 1 51 59 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/63a110ac-fc61-4f64-98f4-af3d588fdd03">
<img width="500" alt="Screenshot 2023-12-13 at 1 54 04 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/6bf4d22b-f52a-4d23-8882-4a31162616f3">
<img width="800" alt="workflow name topbar" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/9aaf4d76-a44e-45f2-ab24-9ef5cf36d4a9">

**Looking for colaborators and coworkers** to develop this ComfyUI project management tool. If you know React, Python or ML model deployment, please reach out to weixuanfu01@gmail.com We want to make it easy to **manage, share and deploy** ComfyUI project.

## FAQ

### Where are my workflow and workspace data stored?

🍺 All your workflows are now output to a folder in /ComfyUI/my_workflows we will enable customize this directory to any dir you like in your computer.

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
