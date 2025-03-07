import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "transform",
    jsxFactory: "m",
    jsxFragment: "'['",
  },
  build: {
    cssFile: "style.css",
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: `build/[name].js`,
        chunkFileNames: `build/[name].js`,
        assetFileNames: `build/[name].[ext]`,
      },
    },
  },
});

