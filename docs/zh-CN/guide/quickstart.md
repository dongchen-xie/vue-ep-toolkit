---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节介绍如何在项目中使用 Vue Business Kit。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts [main.ts]
import { createApp } from "vue"
import VueBusinessKit from "vue-business-kit"
import "vue-business-kit/dist/index.css"
import App from "./App.vue"

const app = createApp(App)
app.use(VueBusinessKit)
app.mount("#app")
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.types` 指定全局组件类型。

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...
    "types": ["vue-business-kit"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</el-tag>

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件。

::: code-group

```shell [npm]
$ npm install -D unplugin-vue-components unplugin-auto-import
```

```shell [yarn]
$ yarn add -D unplugin-vue-components unplugin-auto-import
```

```shell [pnpm]
$ pnpm install -D unplugin-vue-components unplugin-auto-import
```

:::

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中。

##### Vite

```ts [vite.config.ts]
import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { VueBusinessKitResolver } from "vue-business-kit"

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [VueBusinessKitResolver()]
    }),
    Components({
      resolvers: [VueBusinessKitResolver()]
    })
  ]
})
```

##### Webpack

```js [webpack.config.js]
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { VueBusinessKitResolver } = require("vue-business-kit")

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [VueBusinessKitResolver()]
    }),
    Components({
      resolvers: [VueBusinessKitResolver()]
    })
  ]
}
```

想了解更多打包工具（[Rollup](https://rollupjs.org/)、[Vue CLI](https://cli.vuejs.org/)）的配置，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

### 手动导入

Vue Business Kit 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

```vue [App.vue]
<template>
  <bk-button>我是 BkButton</e-button>
</template>

<script>
import { BkButton } from "vue-business-kit"

export default {
  components: { BkButton }
}
</script>
```

## 全局配置

在引入 Vue Business Kit 时，可以传入一个包含 `size` 和 `zIndex` 属性的全局配置对象。
`size` 用于设置表单组件的默认尺寸，`zIndex` 用于设置弹出组件的层级，`zIndex` 的默认值为 `2000`。

完整引入：

```ts [main.ts]
import { createApp } from "vue"
import VueBusinessKit from "vue-business-kit"
import App from "./App.vue"

const app = createApp(App)
app.use(VueBusinessKit, { size: "small", zIndex: 3000 })
```

按需引入：

```vue [App.vue]
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from "vue"
import { ElConfigProvider } from "element-plus"

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zIndex: 3000,
      size: "small"
    }
  }
})
</script>
```

## 开始使用

您可以从现在起启动您的项目。对于各个组件的使用方法，请参阅[各个组件的文档](/zh-CN/components/button.html)。
