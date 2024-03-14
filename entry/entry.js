import { app } from "/scripts/app.js";
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };
const api_base = window.location.pathname.split("/").slice(0, -1).join("/");

// @ts-ignore
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // @ts-ignore
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === "CANVAS") {
          // @ts-ignore
          import(api_base + "/workspace_web/input.js");
          observer.disconnect();
        }
      });
    }
  }
};

app._proxy_on_workflow_chang_proxy = function () {
  // do nothing when the extension unload
};

const hookMount = function (funcName, mountPoint) {
  const original = mountPoint[funcName];
  mountPoint[funcName] = function () {
    original?.apply(this, arguments);
    app._proxy_on_workflow_chang_proxy();
  };
};

app.registerExtension({
  name: "customnodes.WorkflowManager",
  async setup() {
    hookMount("change", LGraph.prototype);
  },
});

// Create an instance of the MutationObserver
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
