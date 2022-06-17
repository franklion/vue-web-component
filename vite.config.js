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
    lib: {
      entry: "./src/main.ce.js",
      name: "SaApp",
      fileName: format => `sa/assets/sa.${format}.js`
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
