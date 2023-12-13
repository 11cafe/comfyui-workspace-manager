import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // a hacky resolution for reactDOM process is not defined error
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    watch: {
      include: ["src/**"],
    },
    outDir: "../../dist",
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["/scripts/app.js"],
      input: {
        input: "entry.js"
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
        entryFileNames: "workspace-manager-[hash].js"
      },
    },
  },
  // plugins: [react(), watch({ dir: "public" })],
  plugins: [react()],
});
