import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/index-local.html"
  },
  preview: {
    open: "/index.html"
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html")
      },
      output: {
        assetFileNames: `assets/[name].[ext]`, // 除了js外的其他檔案(CSS/ttf)
        entryFileNames: `assets/[name].js`, // index.js
        chunkFileNames: `assets/[name].js` // 其他js
      }
    }
  }
})
