import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  content: {
    pipeline: {
      include: [`./**/*`],
      exclude: [`./node_modules/**/*`, `./.vitepress/cache/**/*`]
    }
  }
})
