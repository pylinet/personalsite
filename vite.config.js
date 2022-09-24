import { fileURLToPath, URL } from "node:url";
import process from "node:process";
import baseUrl from "./src/base";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  publicPath: baseUrl,
  plugins: [vue()],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
