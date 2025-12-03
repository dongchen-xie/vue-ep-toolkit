---
title: Button 按钮
lang: zh-CN
---

# Button 按钮

基于 Element Plus 的增强按钮组件，支持 Iconify 图标。

更多详情请参考 [Element Plus Button](https://element-plus.org/zh-CN/component/button)

## 基础用法

带文本和图标支持的基础按钮。

:::demo 使用 `icon` 属性添加图标。支持 Element Plus 图标和 Iconify 图标名称（例如 'tabler:refresh'）。

button/basic

:::

## Button API

### Button 属性

| 名称 | 说明                   | 类型                     | 默认值 |
| ---- | ---------------------- | ------------------------ | ------ |
| icon | 图标组件或 iconify 图标名称 | ^[string] / ^[Component] | —      |

<details>
<summary>Element Plus Button 属性</summary>

| 名称              | 说明                                                                   | 类型                                                                                                         | 默认值  |
| ----------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | 按钮尺寸                                                               | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | 按钮类型，当设置 `color` 时，后者优先                                  | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | 是否为朴素按钮                                                         | ^[boolean]                                                                                                   | false   |
| text              | 是否为文字按钮                                                         | ^[boolean]                                                                                                   | false   |
| bg                | 是否显示文字按钮背景颜色                                               | ^[boolean]                                                                                                   | false   |
| link              | 是否为链接按钮                                                         | ^[boolean]                                                                                                   | false   |
| round             | 是否为圆角按钮                                                         | ^[boolean]                                                                                                   | false   |
| circle            | 是否为圆形按钮                                                         | ^[boolean]                                                                                                   | false   |
| loading           | 是否为加载中状态                                                       | ^[boolean]                                                                                                   | false   |
| loading-icon      | 自定义加载中图标组件                                                   | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | 是否禁用按钮                                                           | ^[boolean]                                                                                                   | false   |
| icon              | 图标组件                                                               | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | 原生 `autofocus` 属性                                                  | ^[boolean]                                                                                                   | false   |
| native-type       | 原生 `type` 属性                                                       | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | 自动在两个中文字符之间插入空格（仅当文本长度为2且全为中文字符时生效） | ^[boolean]                                                                                                   | false   |
| color             | 自定义按钮颜色，自动计算 `hover` 和 `active` 颜色                      | ^[string]                                                                                                    | —       |
| dark              | 暗黑模式，自动将 `color` 转换为暗黑模式颜色                            | ^[boolean]                                                                                                   | false   |
| tag               | 自定义元素标签                                                         | ^[string] / ^[Component]                                                                                     | button  |

</details>

### Button 插槽

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |

<details>
<summary>Element Plus Button 插槽</summary>

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| loading | 自定义加载组件 |
| icon    | 自定义图标组件 |

</details>

### Button 暴露

<details>
<summary>Element Plus Button 暴露</summary>

| 名称           | 说明             | 类型                                                                                                           |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | 按钮 html 元素   | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | 按钮尺寸         | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | 按钮类型         | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | 按钮是否禁用     | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | 是否添加空格     | ^[object]`ComputedRef<boolean>`                                                                                |

</details>

## ButtonGroup API

### ButtonGroup 属性

<details>
<summary>Element Plus ButtonGroup 属性</summary>

| 名称      | 说明                     | 类型                                                               | 默认值     |
| --------- | ------------------------ | ------------------------------------------------------------------ | ---------- |
| size      | 控制按钮组中按钮的大小   | ^[enum]`'large' \| 'default' \| 'small'`                           | —          |
| type      | 控制按钮组中按钮的类型   | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —          |
| direction | 显示方向                 | ^[enum]`'horizontal' \| 'vertical'`                                | horizontal |

</details>

### ButtonGroup 插槽

<details>
<summary>Element Plus ButtonGroup 插槽</summary>

| 名称    | 说明               | 子标签 |
| ------- | ------------------ | ------ |
| default | 自定义按钮组内容   | Button |

</details>

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
import type { ButtonProps } from "element-plus"
import type { Component } from "vue"

export interface EpButtonProps extends Omit<ButtonProps, "icon"> {
  icon?: string | Component
}
```

</details>
