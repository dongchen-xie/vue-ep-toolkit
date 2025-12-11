---
title: Quick Start
lang: en-US
---

# Quick Start

This section describes how to use Vue EP Toolkit in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```ts [main.ts]
import { createApp } from "vue"
import VueEpToolkit from "vue-ep-toolkit"
import "vue-ep-toolkit/dist/index.css"
import App from "./App.vue"

const app = createApp(App)
app.use(VueEpToolkit)
app.mount("#app")
```

#### Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...
    "types": ["vue-ep-toolkit"]
  }
}
```

### On-demand Import

You need to use an additional plugin to import components you used.

#### Auto import <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">Recommend</el-tag>

First you need to install `unplugin-vue-components` and `unplugin-auto-import`.

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

Then add the code below into your `Vite` or `Webpack` config file.

##### Vite

```ts [vite.config.ts]
import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { VueEpToolkitResolver } from "vue-ep-toolkit"

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [VueEpToolkitResolver()]
    }),
    Components({
      resolvers: [VueEpToolkitResolver()]
    })
  ]
})
```

##### Webpack

```js [webpack.config.js]
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { VueEpToolkitResolver } = require("vue-ep-toolkit")

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [VueEpToolkitResolver()]
    }),
    Components({
      resolvers: [VueEpToolkitResolver()]
    })
  ]
}
```

For more bundlers ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) and configs please reference [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install).

### Manually import

Vue EP Toolkit provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

```vue [App.vue]
<template>
  <ep-button>I am EpButton</e-button>
</template>

<script>
import { EpButton } from "vue-ep-toolkit"

export default {
  components: { EpButton }
}
</script>
```

## Global Configuration

When registering Vue EP Toolkit, you can pass a global config object with `size` and
`zIndex` to set the default `size` for form components, and `zIndex` for
popup components, the default value for `zIndex` is `2000`.

Full import:

```ts [main.ts]
import { createApp } from "vue"
import VueEpToolkit from "vue-ep-toolkit"
import App from "./App.vue"

const app = createApp(App)
app.use(VueEpToolkit, { size: "small", zIndex: 3000 })
```

On-demand:

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

## Let's Get Started

You can bootstrap your project from now on. For each components usage, please
refer to [the individual component documentation](/en-US/components/button.html).
