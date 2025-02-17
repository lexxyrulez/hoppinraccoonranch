import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
    },
  },
  base: "/hoppinraccoonranch/", // Set correct base for GitHub Pages
  root: path.resolve(__dirname, "client"), // Set Vite's root directory
  build: {
    outDir: path.resolve(__dirname, "dist"), // Match with gh-pages
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Proxy backend API requests
    },
  },
});
