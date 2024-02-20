import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import localize from "./localize-plugin";

const lang =
  process.argv.find((arg) => arg.startsWith("--lang=")).split("=")[1] || "en";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), localize(lang)],
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
