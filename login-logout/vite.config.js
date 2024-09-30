import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import localize from "./vite-plugin-react-localize";

// is this a "vite build" command?
const isBuildingBundle =
  process.argv.length > 0 && process.argv[process.argv.length - 1] === "build";

export default defineConfig({
  plugins: [react(), localize(isBuildingBundle)],
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
