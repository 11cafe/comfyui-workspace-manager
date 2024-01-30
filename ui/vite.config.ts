import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rewriteImportPlugin = ({ isDev }) => {
  return {
    name: "rewrite-import-plugin", // this name will show up in warnings and errors
    resolveId(source) {
      if (!isDev) {
        return;
      }
      if (source === "/scripts/app.js") {
        // Change the path to the new host
        return "http://127.0.0.1:8188/scripts/app.js";
      }
      if (source === "/scripts/api.js") {
        return "http://127.0.0.1:8188/scripts/api.js";
      }
      return null; // Other imports should not be affected
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
      external: ["/scripts/app.js", "/scripts/api.js"],
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
        chunkFileNames: `workspace_web/[name]-[hash].js`,
        assetFileNames: `workspace_web/assets/[name]-[hash].[ext]`,
      },
    },
  },
  plugins: [react(), rewriteImportPlugin({ isDev: mode === "development" })],
}));
