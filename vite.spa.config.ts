import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import routerPlugin from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// SPA-only build for Vercel: outputs a static client bundle with index.html
export default defineConfig({
  plugins: [routerPlugin(), react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
});
