import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/abstracts/variables" as *;`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Correção para o erro de depreciação e undefined
        assetFileNames: (assetInfo) => {
          // Pega o nome do asset, tratando o caso de ser undefined
          const name = assetInfo.name ?? "";

          if (name.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
