import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import localize from "./vite-plugin-react-localize";

export default defineConfig({
  plugins: [react(), localize()],
  build: {
    target: "es2015",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
