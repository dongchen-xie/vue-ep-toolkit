import path from "path"
import Components from "unplugin-vue-components/vite"
import type { Plugin, UserConfig } from "vitepress"
import UnoCSS from "unocss/vite"
import { MarkdownTransform } from "../plugins/markdown-transform"

type ViteConfig = Required<UserConfig>["vite"]
type ResolveOptions = Required<ViteConfig>["resolve"]
type AliasOptions = Required<ResolveOptions>["alias"]

const isProd = process.env.DOC_ENV === "production"

export const getViteConfig = () => {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    server: {
      host: true,
      port: 2000,
      watch: {
        ignored: ["**/.vitepress/dist/**", "**/.vitepress/.temp/**"]
      }
    },
    resolve: {
      alias: (isProd
        ? {}
        : {
            "vue-business-kit": path.resolve(
              __dirname,
              "../../../packages/vue-business-kit/src/index.ts"
            )
          }) as AliasOptions
    },
    plugins: [
      UnoCSS(),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [".vitepress/vitepress/components"],
        allowOverrides: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          (componentName) => {
            if (componentName.startsWith("Bk")) {
              return {
                name: componentName,
                from: "vue-business-kit"
              }
            }
          }
        ]
      }) as Plugin,
      MarkdownTransform() as Plugin
    ]
  } as ViteConfig
}
