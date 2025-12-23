import type { App } from "vue"
import type { Language } from "./locale"

export interface VueBusinessKitOptions {
  locale?: Language
}

export interface VueBusinessKit {
  install(app: App, options?: VueBusinessKitOptions): void
}
