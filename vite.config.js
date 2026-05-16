import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "pages" ? "/baby_jwels/docs/" : "/",
  build: {
    outDir: mode === "pages" ? "docs" : "dist",
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
}));
