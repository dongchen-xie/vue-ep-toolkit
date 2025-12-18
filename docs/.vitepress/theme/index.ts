import DefaultTheme from "vitepress/theme"
import VueEpToolkit from "vue-ep-toolkit"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
// import "vue-ep-toolkit/dist/index.css"
import "./style.scss"
import "virtual:uno.css"
import { globals } from "../vitepress"
import type { Router } from "vitepress"

NProgress.configure({ showSpinner: false })

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }: { app: any; router: Router }) {
    app.use(VueEpToolkit)
    Object.entries(globals).forEach(([name, Comp]) => {
      app.component(name, Comp)
    })

    router.onBeforeRouteChange = () => {
      NProgress.start()
    }
    router.onAfterRouteChange = () => {
      NProgress.done()
    }
  }
}
