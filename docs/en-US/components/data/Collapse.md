---
title: Collapse
lang: en-US
---

# Collapse

Collapse component enhanced based on [Element Plus Collapse](https://element-plus.org/en-US/component/collapse).

Use Collapse to store contents.

## Basic usage

You can expand multiple panels

:::demo

collapse/basic

:::

## Accordion

In accordion mode, only one panel can be expanded at once

:::demo Activate accordion mode using the `accordion` attribute.

collapse/accordion

:::

## Custom title

Besides using the `title` attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.

:::tip

The `title` slot provides an `isActive` property that indicates whether the current collapse item is active.

:::

:::demo

collapse/customization

:::

## Custom icon

Besides using the `icon` attribute, you can customize icon of panel item with named slots, which makes adding custom content.

:::demo

collapse/custom-icon

:::

## Custom icon position

using the `expand-icon-position` attribute, you can customize icon position.

:::demo

collapse/custom-icon-position

:::

## Prevent collapsing

set the `before-collapse` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing.

:::demo

collapse/prevent-collapsing

:::

## Toolbar

Customize the collapse item toolbar.

:::demo Use `show-export` attribute to display built-in action buttons, or use the `toolbar` slot to fully customize the toolbar content.

collapse/toolbar

:::

## Collapse API

### Collapse Attributes

<details>
<summary>Element Plus Collapse Attributes</summary>

| Name                  | Description                                                                                                                                          | Type                                           | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model-value / v-model | currently active panel, the type is `string` in accordion mode, otherwise it is `array`                                                              | ^[string] / ^[array]                           | []      |
| accordion             | whether to activate accordion mode                                                                                                                   | ^[boolean]                                     | false   |
| expand-icon-position  | set expand icon position                                                                                                                             | ^[enum]`'left' \| 'right' `                    | right   |
| before-collapse       | before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing | ^[Function]`() => Promise<boolean> \| boolean` | —       |

</details>

### Collapse Events

<details>
<summary>Element Plus Collapse Events</summary>

| Name   | Description                                                                                                   | Type                                                |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| change | triggers when active panels change, the parameter type is `string` in accordion mode, otherwise it is `array` | ^[Function]`(activeNames: array \| string) => void` |

</details>

### Collapse Slots

<details>
<summary>Element Plus Collapse Slots</summary>

| Name    | Description               | Subtags       |
| ------- | ------------------------- | ------------- |
| default | customize default content | Collapse Item |

</details>

### Collapse Exposes

<details>
<summary>Element Plus Collapse Exposes</summary>

| Name           | Description                  | Type                                                     |
| -------------- | ---------------------------- | -------------------------------------------------------- |
| activeNames    | currently active panel names | ^[object]`ComputedRef<(string \| number)[]>`             |
| setActiveNames | set active panel names       | ^[Function]`(activeNames: (string \| number)[]) => void` |

</details>

## Collapse Item API

### Collapse Item Attributes

| Name              | Description                                                                                                            | Type                     | Default    |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| title ^(extended) | title of the panel                                                                                                     | ^[string]                | ''         |
| subtitle          | subtitle of the panel                                                                                                  | ^[string]                | ''         |
| icon ^(extended)  | icon of the collapse item                                                                                              | ^[string] / ^[Component] | ArrowRight |
| showExport        | show export button, If `onExport` is empty, it will default to obtaining the export of the child component `bk-table`. | ^[boolean]               | false      |
| onExport          | export event                                                                                                           | ^[Function]              | —          |

<details>
<summary>Element Plus CollapseItem Attributes</summary>

| Name     | Description                        | Type                  | Default |
| -------- | ---------------------------------- | --------------------- | ------- |
| name     | unique identification of the panel | ^[string] / ^[number] | —       |
| disabled | disable the collapse item          | ^[boolean]            | false   |

</details>

### Collapse Item Slot

| Name              | Description                      | Type                             |
| ----------------- | -------------------------------- | -------------------------------- |
| title ^(extended) | content of Collapse Item title   | ^[object]`{ isActive: boolean }` |
| icon ^(extended)  | content of Collapse Item icon    | ^[object]`{ isActive: boolean }` |
| toolbar           | content of Collapse Item toolbar | —                                |

<details>
<summary>Element Plus CollapseItem Slot</summary>

| Name    | Description              | Type |
| ------- | ------------------------ | ---- |
| default | content of Collapse Item | —    |

</details>

### Collapse Item Exposes

<details>
<summary>Element Plus CollapseItem Exposes</summary>

| Name     | Description                                 | Type                                         |
| -------- | ------------------------------------------- | -------------------------------------------- |
| isActive | whether the current collapse item is active | ^[object]`ComputedRef<boolean \| undefined>` |

</details>
