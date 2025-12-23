import { defineConfig } from "vitepress"
import { mdPlugin } from "./plugins"
import { getViteConfig } from "./vite"
import enUS from "../i18n/pages/en-US"
import zhCN from "../i18n/pages/zh-CN"
import zhCNSearch from "../i18n/pages/zh-CN-search"

export default defineConfig({
  title: "Vue Business Kit",
  description: "Vue3 + TypeScript + Element Plus + Lodash component function library",
  base: "/vue-business-kit/",
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/vue-business-kit/favicon.ico" }]],
  rewrites: {
    "index.md": "en-US/index.md"
  },
  locales: {
    ...enUS,
    ...zhCN
  },
  themeConfig: {
    logo: "/favicon.ico",
    search: {
      provider: "local",
      options: {
        locales: {
          ...zhCNSearch
        }
      }
    },
    socialLinks: [{ icon: "github", link: "https://github.com/dongchen-xie/vue-business-kit" }]
  },
  vite: getViteConfig(),
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
