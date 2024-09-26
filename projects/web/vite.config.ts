import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "https://staging.openxlab.org.cn/datasets",
        target: "http://10.6.16.169:5559",
        changeOrigin: true,
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly", // transfer kebab-case to camelCase
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
