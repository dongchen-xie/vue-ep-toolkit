---
title: 暗黑模式
lang: zh-CN
---

# 暗黑模式

Vue Business Kit 内置了暗黑模式支持，无需额外配置即可使用。

## 自动启用

Vue Business Kit 已经自动引入了 Element Plus 的暗黑模式样式文件，你只需要在 HTML 根元素上添加 `dark` 类名即可启用暗黑模式。

```html
<html class="dark">
  <head>
    <!-- ... -->
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## 动态切换

你可以通过 JavaScript 动态切换暗黑模式：

```vue
<template>
  <bk-button @click="toggleDark">
    {{ isDark ? "切换到亮色模式" : "切换到暗黑模式" }}
  </bk-button>
</template>

<script setup>
import { ref } from "vue"

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
</script>
```

## 使用 VueUse

推荐使用 [@vueuse/core](https://vueuse.org/) 的 `useDark` 和 `useToggle` 来管理暗黑模式：

```vue
<template>
  <bk-button @click="toggleDark()">
    {{ isDark ? "切换到亮色模式" : "切换到暗黑模式" }}
  </bk-button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
```

## 自定义暗黑模式颜色

如果你想自定义暗黑模式下的颜色，可以通过 CSS 或 SCSS 来覆盖默认值。

### 通过 CSS

使用 CSS 变量来覆盖默认值：

```css
html.dark {
  /* 自定义主题色 */
  --el-color-primary: #409eff;

  /* 自定义背景色 */
  --el-bg-color: #1a1a1a;
  --el-bg-color-page: #0a0a0a;

  /* 自定义文字颜色 */
  --el-text-color-primary: #e5eaf3;
  --el-text-color-regular: #cfd3dc;
}
```

### 通过 SCSS

使用 SCSS 变量在编译时自定义主题：

```scss
// styles/dark-theme.scss
@forward "element-plus/theme-chalk/src/dark/var.scss" with (
  $colors: (
    "primary": (
      "base": #409eff
    )
  ),
  $bg-color: (
    "": #1a1a1a,
    "page": #0a0a0a
  ),
  $text-color: (
    "primary": #e5eaf3,
    "regular": #cfd3dc
  )
);
```

然后在你的入口文件中引入：

```ts
import "./styles/dark-theme.scss"
```

## 跟随系统主题

你可以使用媒体查询来检测系统主题并自动切换：

```vue
<script setup>
import { ref, onMounted } from "vue"

const isDark = ref(false)

onMounted(() => {
  // 检测系统主题
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  isDark.value = mediaQuery.matches

  if (isDark.value) {
    document.documentElement.classList.add("dark")
  }

  // 监听系统主题变化
  mediaQuery.addEventListener("change", (e) => {
    isDark.value = e.matches
    if (e.matches) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })
})
</script>
```

## 注意事项

- 暗黑模式样式已经内置在 Vue Business Kit 中，无需额外引入
- 确保在 HTML 根元素（`<html>`）上添加 `dark` 类名
- 自定义组件需要适配暗黑模式时，请使用 Element Plus 提供的 CSS 变量
