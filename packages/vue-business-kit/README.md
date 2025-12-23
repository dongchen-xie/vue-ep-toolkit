<p align="center">
  <img width="200px" src="./docs/public/logo.png">
</p>

<h1 align="center">Vue Business Kit</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/vue-business-kit">
    <img src="https://img.shields.io/npm/v/vue-business-kit.svg" />
  </a>
  <a href="https://www.npmjs.org/package/vue-business-kit">
    <img src="https://img.shields.io/npm/dm/vue-business-kit.svg" />
  </a>
  <a href="https://gitee.com/xie-dongchen/vue-business-kit">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2018-47c219" />
  </a>
  <a href="https://github.com/dongchen-xie/vue-business-kit/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vue-business-kit" />
  </a>
</p>

<p align="center">Ready-to-use component library based on Vue3 + TypeScript + Element Plus + Lodash</p>

> ⚠️ **Development Status**: This project is currently under active development. APIs may change before the stable release.

> ℹ️ **Migration Notice**: This package replaces `vue-ep-toolkit`. If you were using `vue-ep-toolkit`, please migrate to this package for continued support and new features.

## ✨ Features

- 🚀 **Vue3 + TypeScript** - Built with the latest Vue3 and TypeScript, providing complete type support
- 📦 **Built-in Element Plus** - No need to install Element Plus separately, all components and icons ready to use
- 🛠️ **Built-in Lodash** - Integrated Lodash utility functions for rich data processing capabilities
- 📱 **Ready to Use** - One-time installation, no additional configuration needed, use all features immediately

## 📦 Installation

```bash
npm install vue-business-kit
# or
pnpm add vue-business-kit
```

## 🚀 Usage

```ts
import { createApp } from "vue"
import VueEPToolkit from "vue-business-kit"
import "vue-business-kit/dist/index.css"
import App from "./App.vue"

const app = createApp(App)
app.use(VueEPToolkit)
app.mount("#app")
```

## 📄 License

Released under the [MIT](https://github.com/dongchen-xie/vue-business-kit/blob/main/LICENSE) License.

Made with ❤️ by Vue Business Kit
