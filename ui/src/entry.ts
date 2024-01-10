// setTimeout(() => {
//   import("./main.tsx").then(({ setupReact }) => {
//     setupReact();
//   });
// }, 1);

// Select the node that will be observed for mutations
const targetNode = document.body; // or any other parent element you want to observe

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
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
