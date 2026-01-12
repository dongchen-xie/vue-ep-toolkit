---
title: Breadcrumb
lang: en-US
---

# Breadcrumb

Breadcrumb component enhanced based on [Element Plus Breadcrumb](https://element-plus.org/en-US/component/breadcrumb).

Displays the location of the current page, making it easier to browser back.

## Basic usage

:::demo In In each `Breadcrumb` component, you need to use the `bk-breadcrumb-item` component to represent each level starting from the homepage. You can also configure the page level data and the current level in a configuration-driven manner via the `items` and `current-item` attributes. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

breadcrumb/basic

:::

## Icon separator

:::demo Set `separator-icon` to use `svg icon` as the separator，it will cover `separator`

breadcrumb/icon

:::

## Breadcrumb API

### Breadcrumb Attributes

| Name                       | Description                      | Type                        | Default |
| -------------------------- | -------------------------------- | --------------------------- | ------- |
| separator-icon ^(extended) | icon component of icon separator | ^[string] / ^[Component]    | —       |
| config                     | Breadcrumb configuration object  | ^[object]`BreadcrumbConfig` | —       |
| items                      | Breadcrumb item array            | ^[array]`BreadcrumbItem[]`  | —       |
| currentItem                | Current item path                | ^[string]                   | —       |

<details>
<summary>Element Plus Breadcrumb Attributes</summary>

| Name      | Description         | Type      | Default |
| --------- | ------------------- | --------- | ------- |
| separator | separator character | ^[string] | /       |

</details>

#### BreadcrumbItem

Extends all Element Plus BreadcrumbItemProps properties with additional features:

| Name      | Description                    | Type                       | Default |
| --------- | ------------------------------ | -------------------------- | ------- |
| id        | Unique identifier for the item | ^[number] / ^[string]      | —       |
| icon      | Icon to display                | ^[string]                  | —       |
| menu_name | Display name for the menu item | ^[string]                  | —       |
| link      | URL or route path              | ^[string]                  | —       |
| children  | Child items array              | ^[array]`BreadcrumbItem[]` | —       |

### Breadcrumb Slots

<details>
<summary>Element Plus Breadcrumb Slots</summary>

| Name    | Description               | Subtags         |
| ------- | ------------------------- | --------------- |
| default | customize default content | Breadcrumb Item |

</details>

## BreadcrumbItem API

### BreadcrumbItem Attributes

<details>
<summary>Element Plus BreadcrumbItem Attributes</summary>

| Name    | Description                                               | Type                                    | Default |
| ------- | --------------------------------------------------------- | --------------------------------------- | ------- |
| to      | target route of the link, same as `to` of `vue-router`    | ^[string] / ^[object]`RouteLocationRaw` | ''      |
| replace | if `true`, the navigation will not leave a history record | ^[boolean]                              | false   |

</details>

### BreadcrumbItem Slots

<details>
<summary>Element Plus BreadcrumbItem Slots</summary>

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

</details>
