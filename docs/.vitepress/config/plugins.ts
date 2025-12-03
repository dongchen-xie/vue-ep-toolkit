import mdContainer from "markdown-it-container"
import createDemoContainer from "../plugins/demo"
import tableWrapper from "../plugins/table-wrapper"
import tooltip from "../plugins/tooltip"

import type { MarkdownRenderer } from "vitepress"

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(tableWrapper)
  md.use(tooltip)
  md.use(mdContainer, "demo", createDemoContainer(md))
}
