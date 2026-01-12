---
title: Collapse 折叠面板
lang: zh-CN
---

# Collapse 折叠面板

基于 [Element Plus Collapse](https://element-plus.org/zh-CN/component/collapse.html) 增强的折叠面板组件。

使用折叠面板收纳内容区域。

## 基本用法

可以同时展开多个面板，面板之间互不影响

:::demo

collapse/basic

:::

## 手风琴模式

在手风琴模式下，每次只能展开一个面板

:::demo 通过设置 `accordion` 属性来激活手风琴模式。

collapse/accordion

:::

## 自定义标题

除了使用 `title` 属性外，还可以通过具名插槽自定义面板标题，实现添加图标等自定义内容的需求。

:::tip

`title` 插槽提供了 `isActive` 属性，用于标识当前折叠项是否处于激活状态。

:::

:::demo

collapse/customization

:::

## 自定义图标

除了使用 `icon` 属性外，还可以通过具名插槽自定义面板项的图标，支持添加个性化内容。

:::demo

collapse/custom-icon

:::

## 自定义图标位置

通过 `expand-icon-position` 属性，可以自定义展开图标的位置。

:::demo

collapse/custom-icon-position

:::

## 阻止折叠

设置 `before-collapse` 属性，若返回 `false` 或返回 Promise 且被 reject，则会阻止面板折叠/展开。

:::demo

collapse/prevent-collapsing

:::

## 工具栏

自定义折叠项的工具栏内容。

:::demo 使用 `show-export` 属性展示内置操作按钮，或通过 `toolbar` 插槽完全自定义工具栏内容。

collapse/toolbar

:::

## Collapse API

### Collapse 属性

<details>
<summary>Element Plus Collapse 原生属性</summary>

| 属性名                | 说明                                                                                    | 类型                                           | 默认值 |
| --------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------- | ------ |
| model-value / v-model | 当前激活的面板名称，手风琴模式下类型为 `string`，否则为 `array`                         | ^[string] / ^[array]                           | []     |
| accordion             | 是否开启手风琴模式，开启后每次只能展开一个面板                                          | ^[boolean]                                     | false  |
| expand-icon-position  | 设置展开图标的位置                                                                      | ^[enum]`'left' \| 'right' `                    | right  |
| before-collapse       | 折叠状态改变前的钩子函数。若返回 `false` 或返回 Promise 且被 reject，将阻止折叠状态变更 | ^[Function]`() => Promise<boolean> \| boolean` | —      |

</details>

### Collapse 事件

<details>
<summary>Element Plus Collapse 原生事件</summary>

| 事件名 | 说明                                                                | 类型                                                |
| ------ | ------------------------------------------------------------------- | --------------------------------------------------- |
| change | 激活面板改变时触发，手风琴模式下参数类型为 `string`，否则为 `array` | ^[Function]`(activeNames: array \| string) => void` |

</details>

### Collapse 插槽

<details>
<summary>Element Plus Collapse 原生插槽</summary>

| 插槽名  | 说明           | 子标签        |
| ------- | -------------- | ------------- |
| default | 自定义默认内容 | Collapse Item |

</details>

### Collapse Exposes

<details>
<summary>Element Plus Collapse Exposes</summary>

| 名称           | 说明               | 类型                                                     |
| -------------- | ------------------ | -------------------------------------------------------- |
| activeNames    | 当前激活的面板名称 | ^[object]`ComputedRef<(string \| number)[]>`             |
| setActiveNames | 设置激活的面板名称 | ^[Function]`(activeNames: (string \| number)[]) => void` |

</details>

## CollapseItems API

### CollapseItems 属性

| 属性名            | 说明                                                                         | 类型                     | 默认值     |
| ----------------- | ---------------------------------------------------------------------------- | ------------------------ | ---------- |
| title ^(extended) | 面板标题                                                                     | ^[string]                | ''         |
| subtitle          | 面板副标题                                                                   | ^[string]                | ''         |
| icon ^(extended)  | 折叠项的图标                                                                 | ^[string] / ^[Component] | ArrowRight |
| showExport        | 是否显示导出按钮，若 `onExport` 为空，将默认获取子组件 `bk-table` 的导出功能 | ^[boolean]               | false      |
| onExport          | 导出事件回调                                                                 | ^[Function]              | —          |

<details>
<summary>Element Plus CollapseItems 原生属性</summary>

| 属性名   | 说明           | 类型                  | 默认值 |
| -------- | -------------- | --------------------- | ------ |
| name     | 面板的唯一标识 | ^[string] / ^[number] | —      |
| disabled | 是否禁用该面板 | ^[boolean]            | false  |

</details>

### CollapseItems 插槽

| 插槽名            | 说明                 | 类型                             |
| ----------------- | -------------------- | -------------------------------- |
| title ^(extended) | 折叠面板项标题内容   | ^[object]`{ isActive: boolean }` |
| icon ^(extended)  | 折叠面板项图标内容   | ^[object]`{ isActive: boolean }` |
| toolbar           | 折叠面板项工具栏内容 | —                                |

<details>
<summary>Element Plus CollapseItems 原生插槽</summary>

| 插槽名  | 说明           | 类型 |
| ------- | -------------- | ---- |
| default | 折叠面板项内容 | —    |

</details>

### CollapseItems Exposes

<details>
<summary>Element Plus CollapseItems Exposes</summary>

| 名称     | 说明                     | 类型                                         |
| -------- | ------------------------ | -------------------------------------------- |
| isActive | 当前折叠项是否处于激活态 | ^[object]`ComputedRef<boolean \| undefined>` |

</details>
