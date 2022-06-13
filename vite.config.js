import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/index-local.html"
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
      }
    }
  }
})
