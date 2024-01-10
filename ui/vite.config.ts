import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // a hacky resolution for reactDOM process is not defined error
    "process.env.NODE_ENV": '"production"',
  },
  envDir: ".",
  build: {
    watch: {
      include: ["src/**"],
    },
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["/scripts/app.js", "/scripts/api.js"],
      input: {
        input: "/src/entry.ts",
      },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          app: "app",
          Litegraph: "LiteGraph",
        },
        dir: "../dist",
        assetFileNames: "[name]-[hash][extname]",
        entryFileNames: "entry/workspace-manager-[hash].js",
      },
    },
  },
  // plugins: [react(), watch({ dir: "public" })],
  plugins: [react()],
});
