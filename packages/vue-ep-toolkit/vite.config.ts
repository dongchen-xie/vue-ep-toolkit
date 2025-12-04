import { defineConfig } from "vite"
import { resolve } from "path"
import Vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    Vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueEpToolkit",
      fileName: (format) => `vue-ep-toolkit.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css"
          return assetInfo.name || ""
        }
      }
    }
  }
})
