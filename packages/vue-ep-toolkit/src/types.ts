import type { App } from "vue"
import type { Language } from "./locale"

export interface VueEpToolkitOptions {
  locale?: Language
}

export interface VueEpToolkit {
  install(app: App, options?: VueEpToolkitOptions): void
}
