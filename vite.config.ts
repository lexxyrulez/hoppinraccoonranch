import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import checker from "vite-plugin-checker";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, overlay: false }),
    runtimeErrorOverlay(),
  ],
 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // This assumes you want to use @ as an alias for the src directory
    },
  },


  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "build"), // Using "build" as output directory
    emptyOutDir: true,
  },
});
