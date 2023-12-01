import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // a hacky resolution for reactDOM process is not defined error
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "entry.js",
      name: "WorkspaceManager",
      // the proper extensions will be added
      fileName: "workspace-manager",
    },
    watch: {
      include: ["src/**"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library

      external: ["/scripts/app.js"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          app: "app",
        },
      },
    },
  },
  // plugins: [react(), watch({ dir: "public" })],
  plugins: [react()],
});
