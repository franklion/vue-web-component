import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  server: {
    open: "/index.html"
  },
  plugins: [
    vue(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.js"
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src")
    }
  },
  build: {
    polyfillModulePreload: true,
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
})
