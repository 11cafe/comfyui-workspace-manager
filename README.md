# ComfyUI Workspace Manager

Manage all your workflows in one place, seamlessly switch between workflows. Create, update, delete workflows in one workspace.

Sincerely looking for colaborators and coworkers to develop this **ComfyUI project management tool** plugin. If you know React, Python or ML model deployment, please reach out to me if you're interested! We want to make it easy to **manage, share and deploy** ComfyUI project.

## Install

in your ComfyUI root folder

```
cd custom_nodes && git clone https://github.com/11cafe/comfyui-workspace-manager.git
```

## Features

demo video: https://youtu.be/II7Xxpz4TVw

- Switch between workflows in your workspace
- Create and rename workflows
- One-click install models (Upcoming!)
- One-click share workflow (Upcoming!)

![switch between flows demo](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/ad3495ee-b4c5-4747-a149-0ba69c2f1630)

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
