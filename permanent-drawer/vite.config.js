import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const args = process.argv.slice(2);
const lang =
  args.find((arg) => arg.startsWith("--lang=")).split("=")[1] || "en";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
