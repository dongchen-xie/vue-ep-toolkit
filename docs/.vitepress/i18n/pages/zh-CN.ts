export default {
  "zh-CN": {
    label: "简体中文",
    lang: "zh-CN",
    title: "Vue EP Toolkit",
    description: "Vue3 + TypeScript + Element Plus + Lodash 组件函数库",
    themeConfig: {
      nav: [
        { text: "指南", link: "/zh-CN/guide/design" },
        { text: "组件", link: "/zh-CN/components/button" },
        { text: "工具函数", link: "/zh-CN/utils/" },
        { text: "Element Plus", link: "https://element-plus.org/" },
        { text: "Lodash", link: "https://www.lodashjs.com/" }
      ],
      sidebar: {
        "/zh-CN/guide/": [
          {
            text: "基础",
            items: [
              { text: "设计", link: "/en-US/guide/design" },
              { text: "安装", link: "/en-US/guide/installation" },
              { text: "快速开始", link: "/en-US/guide/quickstart" }
            ]
          },
          {
            text: "进阶",
            items: [{ text: "国际化", link: "/en-US/guide/i18n" }]
          }
        ],
        "/zh-CN/components/": [
          {
            text: "Basic 基础组件",
            items: [
              { text: "Button 按钮", link: "/zh-CN/components/button" },
              { text: "Icon 图标", link: "/zh-CN/components/icon" }
            ]
          },
          {
            text: "Data 数据展示",
            items: [{ text: "Table 表格", link: "/zh-CN/components/table" }]
          }
        ],
        "/zh-CN/utils/": []
      },
      outline: {
        level: [2, 6] as [number, number],
        label: "页面导航"
      },
      footer: {
        message:
          '基于<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT许可证</a>发布',
        copyright: "由Vue EP Toolkit❤️制作"
      }
    }
  }
}
