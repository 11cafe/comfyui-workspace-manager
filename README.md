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
- [beta] organize workflows with **tags**
- [beta] auto backup workspace locally
- auto export all workflows in your selected local directory (Upcoming!)
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- One-click share workflow (Upcoming!)

![switch between flows demo](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/ad3495ee-b4c5-4747-a149-0ba69c2f1630)
<img width="1053" alt="recent workflows list" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/52355940-b7ac-41b2-843e-5c7bd19438d8">
<img width="948" alt="workflow name topbar" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/9aaf4d76-a44e-45f2-ab24-9ef5cf36d4a9">

**Looking for colaborators and coworkers** to develop this ComfyUI project management tool. If you know React, Python or ML model deployment, please reach out to weixuanfu01@gmail.com We want to make it easy to **manage, share and deploy** ComfyUI project.

## FAQ

### Where are my workflow and workspace data stored?

We are now storing your workflow data in your disk under /ComfyUI/custom_nodes/comfyui-workspace-manager/db/
we will enable export dir to store all the json files.
~~Right now we are storing in your browser's [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)~~

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
