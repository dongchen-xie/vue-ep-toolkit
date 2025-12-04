import { LocaleConfig } from "vitepress"
import { generateSidebar } from "../../utils/generateSidebar"

export default {
  "en-US": {
    label: "English",
    lang: "en-US",
    title: "Vue EP Toolkit",
    description: "Vue3 + TypeScript + Element Plus + Lodash component library",
    themeConfig: {
      nav: [
        { text: "Guide", link: "/en-US/guide/design" },
        { text: "Components", link: "/en-US/components/" },
        { text: "Utils", link: "/en-US/utils/" },
        { text: "Element Plus", link: "https://element-plus.org/" },
        { text: "Lodash", link: "https://lodash.com/" }
      ],
      sidebar: {
        "/en-US/guide/": [
          {
            text: "Basics",
            items: [
              { text: "Design", link: "/en-US/guide/design" },
              { text: "Installation", link: "/en-US/guide/installation" },
              { text: "Quick Start", link: "/en-US/guide/quickstart" }
            ]
          },
          {
            text: "Advanced",
            items: [{ text: "i18n", link: "/en-US/guide/i18n" }]
          }
        ],
        "/en-US/components/": [
          {
            text: "Introduction",
            link: "/en-US/components/"
          },
          {
            text: "Basic",
            items: [
              { text: "Button", link: "/en-US/components/button" },
              { text: "Icon", link: "/en-US/components/icon" }
            ]
          },
          {
            text: "Data",
            items: [{ text: "Table", link: "/en-US/components/table" }]
          }
        ],
        "/en-US/utils/": [
          {
            text: "Introduction",
            link: "/en-US/utils/"
          },
          {
            text: "Array",
            collapsed: true,
            items: generateSidebar("en-US", "utils/array")
          },
          {
            text: "Collection",
            collapsed: true,
            items: generateSidebar("en-US", "utils/collection")
          },
          {
            text: "Function",
            collapsed: true,
            items: generateSidebar("en-US", "utils/function")
          },
          {
            text: "Lang",
            collapsed: true,
            items: generateSidebar("en-US", "utils/lang")
          }
        ]
      },
      outline: {
        level: [2, 6] as [number, number],
        label: "On this page"
      },
      footer: {
        message:
          'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
        copyright: "Made with ❤️ by Vue EP Toolkit"
      }
    }
  }
} as LocaleConfig
