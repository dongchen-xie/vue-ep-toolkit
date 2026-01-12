---
title: Dialog 对话框
lang: zh-CN
---

# Dialog 对话框

基于 [Element Plus Dialog](https://element-plus.org/zh-CN/component/dialog) 增强的对话框组件。

在保留当前页面状态的同时向用户传达信息。

## 基础用法

Dialog 会弹出一个对话框，并且具有高度的可定制性。

:::demo 通过设置布尔类型的 `model-value / v-model` 属性来控制 Dialog 的显示与隐藏。Dialog 分为 `body` 和 `footer` 两部分，其中 `footer` 需要使用名为 `footer` 的具名插槽。可选的 `title` 属性（默认为空）用于定义标题。本示例还展示了如何使用 `before-close`。
dialog/basic
:::

:::tip
`before-close` 仅在用户点击关闭图标或遮罩层时生效。如果你在 `footer` 插槽中放置了用于关闭 Dialog 的按钮，则应在按钮的点击事件处理函数中自行实现 `before-close` 中的逻辑。
:::

## 自定义内容

Dialog 的内容可以是任意内容，甚至是一张表格或一个表单。以下示例展示了如何在 Dialog 中结合使用 Table 和 Form 组件。

:::demo
dialog/customization-content
:::

## 自定义头部

可以通过 `header` 插槽来自定义标题区域。为了保证无障碍访问（accessibility），建议同时使用 `title` 属性，或者通过 `titleId` 插槽属性指定哪个元素应被读作对话框的标题。

:::demo
dialog/customization-header
:::

## 嵌套 Dialog

如果一个 Dialog 被嵌套在另一个 Dialog 内部，则必须设置 `append-to-body`。

:::demo 通常我们不推荐使用嵌套的 Dialog。如果你需要在页面上渲染多个 Dialog，建议将它们平级放置。如果确实需要嵌套，请将内层 Dialog 的 `append-to-body` 设置为 `true`，这样它会被挂载到 `body` 下而非其父节点下，从而确保两个 Dialog 都能正确渲染。
dialog/nested-dialog
:::

## 居中对齐内容

Dialog 的内容可以水平居中。

:::demo 将 `center` 设置为 `true` 可使 Dialog 的 header 和 footer 水平居中。注意：`center` 仅影响 Dialog 的 header 和 footer。Dialog 的 body 可以是任意内容，因此有时居中效果可能不理想，此时你需要额外编写 CSS 来居中 body 内容。
dialog/centered-content
:::

:::tip
Dialog 的内容采用懒加载方式渲染，即默认插槽的内容在首次打开前不会被渲染到 DOM 中。因此，如果你需要操作 DOM 或通过 `ref` 访问子组件，请在 `open` 事件回调中进行。
:::

## 屏幕居中打开 Dialog

让 Dialog 从屏幕正中央弹出。

:::demo 将 `align-center` 设置为 `true` 可使 Dialog 在水平和垂直方向都居中。此时 `top` 属性将失效，因为 Dialog 是通过 Flex 布局实现垂直居中的。
dialog/align-center
:::

## 关闭时销毁内容

启用此功能后，默认插槽中的内容将在 Dialog 关闭时通过 `v-if` 指令销毁。当你有性能方面的顾虑时，可以启用此选项。

:::demo 注意：启用该功能后，内容将在 `transition.beforeEnter` 事件触发前不会被渲染，此时 Dialog 中仅包含 `overlay`、`header`（可选）和 `footer`（可选）。
dialog/destroy-on-close
:::

## 可拖拽 Dialog

尝试拖动 Dialog 的 `header` 区域。

:::demo 将 `draggable` 设置为 `true` 即可启用拖拽功能。若同时设置 `overflow` 为 `true`，则允许 Dialog 拖出视口范围。
dialog/draggable-dialog
:::

:::tip
当 `modal` 设置为 `false` 时，请务必同时将 `append-to-body` 设置为 `true`。因为 Dialog 默认使用 `position: relative` 定位，若移除了遮罩层（modal），Dialog 将基于其在 DOM 中的位置进行定位，而不是相对于 `document.body`，这会导致样式错乱。
:::

## 全屏模式

设置 `fullscreen` 属性即可开启全屏 Dialog。

:::demo
dialog/fullscreen
:::

:::tip
当 `fullscreen` 为 `true` 时，`width`、`top` 和 `draggable` 属性将不再生效。
:::

## 非模态 Dialog

将 `modal` 设置为 `false` 可隐藏 Dialog 的遮罩层（overlay）。新增的 `modal-penetrable` 属性可用于使遮罩层可穿透（此时 `modal` 必须为 `false`）。

:::demo
dialog/modal
:::

## 自定义动画

通过 `transition` 属性自定义 Dialog 的动画效果。该属性接受以下两种值：

- 动画名称（字符串）
- Vue Transition 配置对象（对象）

:::demo 示例包括缩放（scale）、滑动（slide）、淡入淡出（fade）、弹跳（bounce）等动画，以及使用对象配置并包含自定义事件处理器的用法。
dialog/custom-animation
:::

:::tip
动画类名会根据 `transition` 名称动态生成。如需对动画行为进行精细控制，你可以显式定义这些类名。详情请参考 [Vue 自定义过渡类名](https://cn.vuejs.org/guide/built-ins/transition.html#custom-transition-classes)。
:::

## 事件顺序

打开开发者工具控制台（Ctrl + Shift + J），查看 Dialog 各事件的触发顺序。

:::demo
dialog/events
:::

## Dialog API

### Dialog 属性

<details>
<summary>Element Plus Dialog 原生属性</summary>

| 属性名                | 说明                                                                       | 类型                                  | 默认值          |
| --------------------- | -------------------------------------------------------------------------- | ------------------------------------- | --------------- |
| model-value / v-model | Dialog 是否显示                                                            | `boolean`                             | `false`         |
| title                 | Dialog 的标题，也可通过具名插槽传入                                        | `string`                              | `''`            |
| width                 | Dialog 的宽度，默认为 50%                                                  | `string` / `number`                   | `''`            |
| fullscreen            | 是否全屏显示 Dialog                                                        | `boolean`                             | `false`         |
| top                   | Dialog 的 `margin-top` 值，默认为 `15vh`                                   | `string`                              | `''`            |
| modal                 | 是否显示遮罩层                                                             | `boolean`                             | `true`          |
| modal-penetrable      | 遮罩层是否可穿透（需配合 `modal=false` 使用）                              | `boolean`                             | `false`         |
| modal-class           | 遮罩层的自定义类名                                                         | `string`                              | —               |
| header-class          | 头部容器的自定义类名                                                       | `string`                              | —               |
| body-class            | 主体容器的自定义类名                                                       | `string`                              | —               |
| footer-class          | 底部容器的自定义类名                                                       | `string`                              | —               |
| append-to-body        | 是否将 Dialog 自身插入至 body 元素下（嵌套 Dialog 必须设为 true）          | `boolean`                             | `false`         |
| append-to             | 指定 Dialog 挂载的 HTML 元素（会覆盖 `append-to-body`）                    | `CSSSelector` / `HTMLElement`         | `body`          |
| lock-scroll           | Dialog 显示时是否禁止 body 滚动                                            | `boolean`                             | `true`          |
| open-delay            | 打开 Dialog 的延迟时间（毫秒）                                             | `number`                              | `0`             |
| close-delay           | 关闭 Dialog 的延迟时间（毫秒）                                             | `number`                              | `0`             |
| close-on-click-modal  | 是否可通过点击遮罩层关闭 Dialog                                            | `boolean`                             | `true`          |
| close-on-press-escape | 是否可通过按下 ESC 键关闭 Dialog                                           | `boolean`                             | `true`          |
| show-close            | 是否显示关闭按钮                                                           | `boolean`                             | `true`          |
| before-close          | Dialog 关闭前的回调函数，会阻止 Dialog 关闭，调用 `done` 才真正关闭        | `(done: DoneFn) => void`              | —               |
| draggable             | 是否启用拖拽功能                                                           | `boolean`                             | `false`         |
| overflow              | 拖拽时是否允许超出视口                                                     | `boolean`                             | `false`         |
| center                | 是否使 header 和 footer 水平居中                                           | `boolean`                             | `false`         |
| align-center          | 是否使整个 Dialog 在屏幕中水平垂直居中                                     | `boolean`                             | `false`         |
| destroy-on-close      | 关闭时是否销毁 Dialog 中的元素                                             | `boolean`                             | `false`         |
| close-icon            | 自定义关闭图标（默认为 Close）                                             | `string` / `Component`                | —               |
| z-index               | Dialog 的 z-index 层级                                                     | `number`                              | —               |
| header-aria-level     | header 的 `aria-level` 属性                                                | `string`                              | `'2'`           |
| transition            | Dialog 动画的自定义配置，可为字符串（过渡名）或对象（Vue Transition 配置） | `string` / `object` (TransitionProps) | `'dialog-fade'` |

</details>

### Dialog 插槽

<details>
<summary>Element Plus Dialog 原生插槽</summary>

| 插槽名  | 说明                                                        |
| ------- | ----------------------------------------------------------- |
| default | Dialog 的默认内容                                           |
| header  | Dialog 的头部内容；替换此插槽会移除标题，但不会移除关闭按钮 |
| footer  | Dialog 的底部内容                                           |

</details>

### Dialog 事件

<details>
<summary>Element Plus Dialog 原生事件</summary>

| 事件名           | 说明                            | 回调参数     |
| ---------------- | ------------------------------- | ------------ |
| open             | Dialog 打开时触发               | `() => void` |
| opened           | Dialog 打开动画结束后触发       | `() => void` |
| close            | Dialog 关闭时触发               | `() => void` |
| closed           | Dialog 关闭动画结束后触发       | `() => void` |
| open-auto-focus  | Dialog 打开并完成自动聚焦后触发 | `() => void` |
| close-auto-focus | Dialog 关闭并恢复焦点后触发     | `() => void` |

</details>

### Dialog Exposes

<details>
<summary>Element Plus Dialog Exposes</summary>

| 方法名        | 说明                               | 签名         |
| ------------- | ---------------------------------- | ------------ |
| resetPosition | 重置 Dialog 位置（用于可拖拽场景） | `() => void` |
| handleClose   | 手动关闭 Dialog                    | `() => void` |

</details>

## 常见问题（FAQ）

### 在单文件组件（SFC）中使用 Dialog，scoped 样式不生效

典型问题：[#10515](https://github.com/element-plus/element-plus/issues/10515)

> 说明：由于 Dialog 使用 `Teleport` 渲染，建议将根节点的样式写在全局样式中。

### Dialog 显示/隐藏时页面元素发生抖动或位移

典型问题：[#10481](https://github.com/element-plus/element-plus/issues/10481)

> 建议：将滚动区域限制在 Vue 挂载的节点内（例如 `<div id="app" />`），并对 `body` 设置 `overflow: hidden` 样式。
