---
title: Breadcrumb 面包屑
lang: zh-CN
---

# Breadcrumb 面包屑

基于 [Element Plus Breadcrumb](https://element-plus.org/zh-CN/component/breadcrumb.html) 增强的面包屑组件。

展示当前页面的位置，方便用户进行页面回溯。

## 基本用法

:::demo 在每个 `Breadcrumb` 组件中，需要使用 `bk-breadcrumb-item` 组件来表示从首页开始的每一级。也可以通过 `items` 和 `current-item` 属性以配置驱动的方式配置页面层级数据和当前层级。该组件有一个字符串类型的属性 `separator`，用于决定分隔符，默认值为 '/'。

breadcrumb/basic

:::

## 图标分隔符

:::demo 设置 `separator-icon` 属性可以使用 SVG 图标作为分隔符，该属性会覆盖 `separator` 属性的效果。

breadcrumb/icon

:::

## Breadcrumb API

### Breadcrumb 属性

| 属性名                 | 说明                 | 类型                        | 默认值 |
| ---------------------- | -------------------- | --------------------------- | ------ |
| separator-icon ^(扩展) | 图标分隔符的图标组件 | ^[string] / ^[Component]    | —      |
| config                 | 面包屑配置对象       | ^[object]`BreadcrumbConfig` | —      |
| items                  | 面包屑项数组         | ^[array]`BreadcrumbItem[]`  | —      |
| currentItem            | 当前项路径           | ^[string]                   | —      |

<details>
<summary>Element Plus Breadcrumb 原生属性</summary>

| 属性名    | 说明       | 类型      | 默认值 |
| --------- | ---------- | --------- | ------ |
| separator | 分隔符字符 | ^[string] | /      |

</details>

## BreadcrumbItem

继承 Element Plus 所有 BreadcrumbItemProps 原生属性，并扩展以下特性：

| 属性名    | 说明           | 类型                       | 默认值 |
| --------- | -------------- | -------------------------- | ------ |
| id        | 菜单项唯一标识 | ^[number] / ^[string]      | —      |
| icon      | 显示的图标     | ^[string]                  | —      |
| menu_name | 菜单项显示名称 | ^[string]                  | —      |
| link      | URL 或路由路径 | ^[string]                  | —      |
| children  | 子菜单项数组   | ^[array]`BreadcrumbItem[]` | —      |

### Breadcrumb 插槽

<details>
<summary>Element Plus Breadcrumb 原生插槽</summary>

| 插槽名  | 说明           | 子标签          |
| ------- | -------------- | --------------- |
| default | 自定义默认内容 | Breadcrumb Item |

</details>

## BreadcrumbItem API

### BreadcrumbItem 属性

<details>
<summary>Element Plus BreadcrumbItem 原生属性</summary>

| 属性名  | 说明                                             | 类型                                    | 默认值 |
| ------- | ------------------------------------------------ | --------------------------------------- | ------ |
| to      | 链接的目标路由，与 `vue-router` 的 `to` 属性一致 | ^[string] / ^[object]`RouteLocationRaw` | ''     |
| replace | 若为 `true`，导航时不会留下历史记录              | ^[boolean]                              | false  |

</details>

### BreadcrumbItem 插槽

<details>
<summary>Element Plus BreadcrumbItem 原生插槽</summary>

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

</details>
