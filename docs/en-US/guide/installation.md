---
title: Installation
lang: en-US
---

# Installation

## Compatibility

Vue EP Toolkit provides both components and utility functions with different browser compatibility requirements.

Since Vue 3 no longer supports IE11, Vue EP Toolkit does not support IE either.

| Feature           | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ----------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Components        | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                          | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |
| Utility Functions | Chrome ≥ 74                                                                                | Edge ≥ 18                                                                          | Firefox ≥ 66                                                                                   | Safari ≥ 11                                                                                |

### Sass

Version `2.8.5` and later, the minimum compatible version of [Sass](https://github.com/sass) is `1.79.0`.

If your terminal prompts `legacy JS API Deprecation Warning`, you can configure the following code in [vite.config.ts](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions).

```ts{3}
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```

### Version

Vue EP Toolkit is currently in a rapid development iteration. [![VueEpToolkit version badge](https://img.shields.io/npm/v/vue-ep-toolkit.svg?style=flat-square)](https://www.npmjs.org/package/vue-ep-toolkit)

## Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Vue EP Toolkit**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

Choose a package manager you like.

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

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [npmmirror](https://npmmirror.com/).

```shell
npm config set registry https://registry.npmmirror.com
```

## Import in Browser

Import Vue EP Toolkit through browser HTML tags directly, and use global variable `VueEpToolkit`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/vue-ep-toolkit/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/vue-ep-toolkit"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-ep-toolkit/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-ep-toolkit"></script>
</head>
```

:::tip

We recommend using CDN to import Vue EP Toolkit users to lock the version
on the link address, so as not to be affected by incompatible updates when Vue EP Toolkit
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::
