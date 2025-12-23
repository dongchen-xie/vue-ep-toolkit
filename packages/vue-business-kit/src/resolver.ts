import type { ComponentResolver } from "unplugin-vue-components"

export interface VueBusinessKitResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css" | "sass"
}

export function VueBusinessKitResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.startsWith("Bk") || name.startsWith("El")) {
        return {
          name,
          from: "vue-business-kit"
        }
      }
    }
  }
}
