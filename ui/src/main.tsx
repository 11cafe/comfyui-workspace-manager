import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertDialogProvider } from "./components/AlertDialogProvider.tsx";
import CSSReset from "./MyCSSReset.tsx";

const startWorkspace = () => {
  const topbar = document.createElement("div");
  document.body.append(topbar);
  const App = React.lazy(() =>
    import("./App.tsx").then(({ default: App }) => ({
      default: App,
    }))
  );

  ReactDOM.createRoot(topbar).render(
    <React.StrictMode>
      <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
        <CSSReset scope=".workspace_manager" />
        <ColorModeScript />
        <AlertDialogProvider>
          <Suspense>
            <App />
          </Suspense>
        </AlertDialogProvider>
      </ChakraProvider>
    </React.StrictMode>
  );

  // hacky fix for chakra add extra className (chakra-ui-light) into body
  // and resulted in user unable to copy new nodes into clipboard, because of this check: e.target.className === "litegraph"
  // (https://github.com/comfyanonymous/ComfyUI/blob/57926635e8d84ae9eea4a0416cc75e363f5ede45/web/scripts/app.js#L861)
  const targetNode = document.body;
  const observerConfig = { attributes: true, attributeFilter: ["class"] };
  // Callback function to execute when mutations are observed
  const callback = function (mutationsList: MutationRecord[]) {
    // remove color-scheme property from <html> element, this made the checkboxes dark
    const htmlElement = document.documentElement;
    if (htmlElement.style.colorScheme === "dark") {
      // Remove the color-scheme property
      htmlElement.style.removeProperty("color-scheme");
    }

    // remove chakra from <body> class list, this broke the copy node feature
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        // remove all chakra classes from body element
        for (const className of targetNode.classList) {
          if (className.includes("chakra")) {
            targetNode.classList.remove(className);
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, observerConfig);
};

/**
   1. The workspace needs to use app.js and api.js provided by comfyui. These two js files are in the ComfyUI/web/scripts directory.
   2. In a production environment, you need to obtain the reference to app/api through import xxx from "/scripts/xxx.js".
   3. In the development environment, since the dev server is started in the workspace/ui directory, you need to obtain the reference
      to app/api by importing xxx from "../../../../scripts/xxx.js".
   4. Therefore, the two environments need to use asynchronous import respectively. However, in the development environment, 
      the app/  api reference obtained through asynchronous import is not the same one used by ComfyUI, but there is no problem in the production environment.
   5. So in the development environment, we modify the ComfyUI/web/index.html file and mount the reference to the app/api on the   
      window in index.html. And ComfyUI itself has mounted the app on the window in the scripts of index.html. In the production environment, use the following code to perform asynchronous import.
 */
if (process.env.NODE_ENV === "production") {
  const promiseList = [];
  if (!window.app) {
    promiseList.push(
      new Promise((resolve, reject) => {
        import("/scripts/app.js")
          .then((module) => {
            window.app = module.app;
            console.log("window.app-import()", window.app);
            resolve(true);
          })
          .catch((err) => {
            console.error("Error: ComfyUI app failed to mount", err);
            reject(err);
          });
      })
    );
  }

  promiseList.push(
    new Promise((resolve, reject) => {
      import("/scripts/api.js")
        .then((module) => {
          window.api = module.api;
          console.log("window.api-import()", window.app);
          resolve(true);
        })
        .catch((err) => {
          console.error("Error: ComfyUI api failed to mount", err);
          reject(err);
        });
    })
  );

  Promise.all(promiseList).then(() => {
    startWorkspace();
  });
} else {
  startWorkspace();
}