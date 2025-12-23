---
title: 安装
lang: zh-CN
---

# 安装

## 兼容性

Vue Business Kit 提供组件和工具函数，它们有不同的浏览器兼容性要求。

由于 Vue 3 不再支持 IE11，Vue Business Kit 也不支持 IE。

| 功能     | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png)Chrome | ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png)Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png)Safari |
| -------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 组件     | Chrome ≥ 85                                                                          | Edge ≥ 85                                                                     | Firefox ≥ 79                                                                             | Safari ≥ 14.1                                                                        |
| 工具函数 | Chrome ≥ 74                                                                          | Edge ≥ 18                                                                     | Firefox ≥ 66                                                                             | Safari ≥ 11                                                                          |

### Sass

版本 `2.8.5` 及更高版本，[Sass](https://github.com/sass) 的最低兼容版本为 `1.79.0`。

如果您的终端提示 `legacy JS API Deprecation Warning`，您可以在 [vite.config.ts](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions) 中配置以下代码。

```ts{3}
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```

### 版本

Vue Business Kit 目前处于快速开发迭代中。[![VueBusinessKit version badge](https://img.shields.io/npm/v/vue-business-kit.svg?style=flat-square)](https://www.npmjs.org/package/vue-business-kit)

## 使用包管理器

**我们建议使用包管理器（NPM、[Yarn](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/)）安装 Vue Business Kit**，
这样您可以使用 [Vite](https://vitejs.dev) 和 [webpack](https://webpack.js.org/) 等打包工具。

选择一个您喜欢的包管理器。

::: code-group

```shell [npm]
$ npm install vue-business-kit --save
```

```shell [yarn]
$ yarn add vue-business-kit
```

```shell [pnpm]
$ pnpm install vue-business-kit
```

:::

如果您的网络环境不佳，建议使用镜像仓库 [cnpm](https://github.com/cnpm/cnpm) 或 [npmmirror](https://npmmirror.com/)。

```shell
npm config set registry https://registry.npmmirror.com
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Vue Business Kit，然后就可以使用全局变量 `VueBusinessKit` 了。

根据不同的 CDN 提供商有不同的引入方式。
这里我们以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。
您也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/vue-business-kit/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/vue-business-kit"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-business-kit/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- 导入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/vue-business-kit"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Vue Business Kit 的用户在链接地址上锁定版本，
以免将来 Vue Business Kit 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

:::
