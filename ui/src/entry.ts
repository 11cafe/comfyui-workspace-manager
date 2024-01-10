const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// @ts-ignore
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // @ts-ignore
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === "CANVAS") {
          console.log("Canvas element added to the DOM:", node);
          import("./main.tsx").then(({ setupReact }) => {
            setupReact();
          });
        }
      });
    }
  }
};

// Create an instance of the MutationObserver
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Remember to disconnect the observer when it's no longer needed
// observer.disconnect();
