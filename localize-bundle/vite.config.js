import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import localize from "./vite-plugin-react-localize";

const lastArg =
  process.argv.length > 0 ? process.argv[process.argv.length - 1] : "";
const matches = lastArg.match(/--lang=(en|de|fr)$/);
const lang = matches ? matches[1] : "en";

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
