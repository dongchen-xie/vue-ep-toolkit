import DefaultTheme from "vitepress/theme"
import VueEpToolkit from "vue-ep-toolkit"
// import "vue-ep-toolkit/dist/vue-ep-toolkit.css"
import "./style.scss"
import "virtual:uno.css"
import { globals } from "../vitepress"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.use(VueEpToolkit)
    Object.entries(globals).forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
