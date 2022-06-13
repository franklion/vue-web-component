import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes("-")
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src")
    }
  },
  build: {
    lib: {
      entry: "./src/main.ce.js",
      name: "CustomElements",
      formats: ["umd"],
      fileName: format => `custom-elements.${format}.js`
    }
  }
})
