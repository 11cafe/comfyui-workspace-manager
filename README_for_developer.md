# ☕️ ComfyUI Workspace Manager - Comfyspace

This is a document specially prepared for developers, explaining some special development details.Installation

## Clean up indexdb if it's in bad state

Make sure you have .json files under `ComfyUI/comfyui-workspace-manager/db`, so your indexdb data (version history, gallery image data) can be recovered after deleting

<img width="318" alt="Screenshot 2024-03-12 at 12 35 24 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/722a96ca-82a3-4126-83fd-2951de0a18cb">

1. F12 -> Application -> IndexedDB -> delete current indexdb

<img width="731" alt="Screenshot 2024-03-12 at 12 30 48 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4c4f0f6a-e402-4fd5-94cd-b00ff6f2a96f">

3. If you want to recover your data like version history, gallery image data, F12 -> Application -> Local Storage -> delete WORKSPACE_INDEXDB_BACKFILL key in localstorage so your indexdb can be backedup (you don't have to do this if you only need workflows .json data)

<img width="723" alt="Screenshot 2024-03-12 at 12 33 08 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/c9ca969d-fdee-4c1e-bfc5-c646ce241fd8">

## Install custom git hooks

When running the project for the first time, it is recommended that you execute the following command to install our customized git hooks

```javascript
cd ui
npm run setupGithooks
```

Current hooks include:

1. When switching to a non-main/beta branch, additional .gitignore logic is automatically added to ignore the "/dist" folder.

## How to use Hot Module Replacement

1. npm run dev starts the project;
2. If the dist directory currently exists, please delete the dist directory or keep the dist directory empty;
3. Modify ComfyUI/web/index.html and add the following code. It should be noted that the port number in localhost:5173 needs to be consistent with the port number of the vite local service started by npm run dev.![image](https://github.com/11cafe/comfyui-workspace-manager/assets/26196917/ef7eabc5-8683-4f9a-93f3-e3ba2b0d3449)

   ```javascript
   import RefreshRuntime from "http://localhost:5173/@react-refresh";
   RefreshRuntime.injectIntoGlobalHook(window);
   window.$RefreshReg$ = () => {};
   window.$RefreshSig$ = () => (type) => type;
   window.__vite_plugin_react_preamble_installed__ = true;

   const head = document.getElementsByTagName("head")[0];
   const viteClientScript = document.createElement("script");
   viteClientScript.src = "http://localhost:5173/@vite/client";
   viteClientScript.type = "module";
   head.appendChild(viteClientScript);
   const workspaceMainScript = document.createElement("script");
   workspaceMainScript.src = "http://localhost:5173/src/main.tsx";
   workspaceMainScript.type = "module";
   head.appendChild(workspaceMainScript);
   ```
