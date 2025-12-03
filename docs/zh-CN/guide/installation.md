---
title: 安装
lang: zh-CN
---

# 安装

## 兼容性

由于 Vue EP Toolkit 是基于 Element Plus 进行组件开发的，使用其组件需要浏览器支持最新的两个版本。

如果您确实需要支持过时的浏览器，请自行添加 [Babel](https://babeljs.io/) 和 Polyfill。

由于 Vue 3 不再支持 IE11，Vue EP Toolkit 也不支持 IE。

| 版本    | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| < 2.5.0 | Chrome ≥ 64                                                                                | Edge ≥ 79                                                                        | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                                |
| 2.5.0 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

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

Vue EP Toolkit 目前处于快速开发迭代中。[![VueEpToolkit version badge](https://img.shields.io/npm/v/vue-ep-toolkit.svg?style=flat-square)](https://www.npmjs.org/package/vue-ep-toolkit)

## 使用包管理器

**我们建议使用包管理器（NPM、[Yarn](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/)）安装 Vue EP Toolkit**，
这样您可以使用 [Vite](https://vitejs.dev) 和 [webpack](https://webpack.js.org/) 等打包工具。

选择一个您喜欢的包管理器。

::: code-group

```shell [npm]
$ npm install vue-ep-toolkit --save
```

```shell [yarn]
$ yarn add vue-ep-toolkit
```

```shell [pnpm]
$ pnpm install vue-ep-toolkit
```

:::

如果您的网络环境不佳，建议使用镜像仓库 [cnpm](https://github.com/cnpm/cnpm) 或 [npmmirror](https://npmmirror.com/)。

```shell
npm config set registry https://registry.npmmirror.com
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Vue EP Toolkit，然后就可以使用全局变量 `VueEpToolkit` 了。

根据不同的 CDN 提供商有不同的引入方式。
这里我们以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。
您也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/vue-ep-toolkit/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/vue-ep-toolkit"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-ep-toolkit/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- 导入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/vue-ep-toolkit"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Vue EP Toolkit 的用户在链接地址上锁定版本，
以免将来 Vue EP Toolkit 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

由于原生 HTML 解析行为的限制，单闭合标签可能会导致一些异常，因此请使用双闭合标签，[参考](https://cn.vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats)

```html
<!-- 示例 -->
<ep-table :raw-data="tableData" :columns="columns" />
<script>
  const tableData = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    }
  ]
  const columns = [
    {
      prop: "date",
      label: "Date",
      width: 180
    },
    {
      prop: "name",
      label: "Name",
      width: 180
    },
    {
      prop: "address",
      label: "Address"
    }
  ]
</script>
```

:::
