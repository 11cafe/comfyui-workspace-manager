# ☕️ ComfyUI Workspace Manager - Comfyspace

This is a document specially prepared for developers, explaining some special development details.Installation

## How to use Hot Module Replacement

1. npm run dev starts the project;
2. If the dist directory currently exists, please delete the dist directory or keep the dist directory empty;
3. Modify ComfyUI/web/index.html and add the following code. It should be noted that the port number in localhost:5173 needs to be consistent with the port number of the vite local service started by npm run dev.![image](https://github.com/11cafe/comfyui-workspace-manager/assets/26196917/ef7eabc5-8683-4f9a-93f3-e3ba2b0d3449)

   ```javascript
   import RefreshRuntime from 'http://localhost:5173/@react-refresh'
   RefreshRuntime.injectIntoGlobalHook(window)
   window.$RefreshReg$ = () => {}
   window.$RefreshSig$ = () => (type) => type
   window.__vite_plugin_react_preamble_installed__ = true

   const head = document.getElementsByTagName('head')[0];
   const viteClientScript = document.createElement('script');
   viteClientScript.src = 'http://localhost:5173/@vite/client';
   viteClientScript.type = 'module';
   head.appendChild(viteClientScript);
   const workspaceMainScript = document.createElement('script');
   workspaceMainScript.src = 'http://localhost:5173/src/main.tsx';
   workspaceMainScript.type = 'module';
   head.appendChild(workspaceMainScript);
   ```
