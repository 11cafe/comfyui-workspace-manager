setTimeout(() => {
  import("./main.tsx").then(({ setupReact }) => {
    setupReact();
  });
}, 1);
