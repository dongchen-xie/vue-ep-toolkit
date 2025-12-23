---
title: Dark Mode
lang: en-US
---

# Dark Mode

Vue Business Kit has built-in dark mode support, ready to use without additional configuration.

## Auto Enable

Vue Business Kit has automatically imported the Element Plus dark mode style file. You just need to add the `dark` class to the HTML root element to enable dark mode.

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

## Dynamic Toggle

You can dynamically toggle dark mode with JavaScript:

```vue
<template>
  <bk-button @click="toggleDark">
    {{ isDark ? "Switch to Light Mode" : "Switch to Dark Mode" }}
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

## Using VueUse

We recommend using `useDark` and `useToggle` from [@vueuse/core](https://vueuse.org/) to manage dark mode:

```vue
<template>
  <bk-button @click="toggleDark()">
    {{ isDark ? "Switch to Light Mode" : "Switch to Dark Mode" }}
  </bk-button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
```

## Custom Dark Mode Colors

If you want to customize colors in dark mode, you can override the default values using CSS or SCSS.

### Via CSS

Use CSS variables to override the default values:

```css
html.dark {
  /* Custom primary color */
  --el-color-primary: #409eff;

  /* Custom background colors */
  --el-bg-color: #1a1a1a;
  --el-bg-color-page: #0a0a0a;

  /* Custom text colors */
  --el-text-color-primary: #e5eaf3;
  --el-text-color-regular: #cfd3dc;
}
```

### Via SCSS

Use SCSS variables to customize the theme at compile time:

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

Then import it in your entry file:

```ts
import "./styles/dark-theme.scss"
```

## Follow System Theme

You can use media queries to detect the system theme and switch automatically:

```vue
<script setup>
import { ref, onMounted } from "vue"

const isDark = ref(false)

onMounted(() => {
  // Detect system theme
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  isDark.value = mediaQuery.matches

  if (isDark.value) {
    document.documentElement.classList.add("dark")
  }

  // Listen for system theme changes
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

## Notes

- Dark mode styles are built into Vue Business Kit, no additional imports needed
- Make sure to add the `dark` class to the HTML root element (`<html>`)
- When adapting custom components for dark mode, use CSS variables provided by Element Plus
