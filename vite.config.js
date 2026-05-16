import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/baby_jwels/docs/" : "/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
}));
