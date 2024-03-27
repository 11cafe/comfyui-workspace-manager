export const broadcastChannel = new BroadcastChannel(
  "comfyui_workspace_manager_channel",
);

// broadcastChannel.addEventListener("message", (event) => {
//   console.log("Received message:", event.data);
// });

// broadcastChannel.postMessage("Hello from another tab!");
