import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import localize from "./vite-plugin-react-localize";

const lastArg =
  process.argv.length > 0 ? process.argv[process.argv.length - 1] : "";
const groups = lastArg.match(/--lang=(en|de|fr|nl|pl|ru)$/);
const lang = groups ? groups[1] : "en";

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
