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
    // minify: false, // ___DEBUG__MODE only
    // sourcemap: true, // ___DEBUG___MODE only
    emptyOutDir: true,
    rollupOptions: {
      // externalize deps that shouldn't be bundled into your library
      external: ["/scripts/app.js", "/scripts/api.js", "/workspace/main.js"],
      input: {
        input: "/src/main.tsx",
      },
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          app: "app",
          Litegraph: "LiteGraph",
        },
        dir: "../dist",
        // assetFileNames: "[name]-[hash][extname]",
        entryFileNames: "workspace_web/[name].js",
        chunkFileNames: `workspace_web/[name].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
  // plugins: [react(), watch({ dir: "public" })],
  plugins: [react()],
});
