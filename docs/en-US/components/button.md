---
title: Button
lang: en-US
---

# Button

Enhanced button component based on Element Plus with support for Iconify icons.

For more details please refer to [Element Plus Button](https://element-plus.org/en-US/component/button)

## Basic Usage

Basic button with text and icon support.

:::demo Use `icon` prop to add an icon. Supports both Element Plus icons and Iconify icon names (e.g., 'tabler:refresh').

button/basic

:::

## Button API

### Button Attributes

| Name | Description                         | Type                     | Default |
| ---- | ----------------------------------- | ------------------------ | ------- |
| icon | Icon component or iconify icon name | ^[string] / ^[Component] | —       |

<details>
<summary>Element Plus Button Attributes</summary>

| Name              | Description                                                                                                                                          | Type                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | button size                                                                                                                                          | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | button type, when setting `color`, the latter prevails                                                                                               | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | determine whether it's a plain button                                                                                                                | ^[boolean]                                                                                                   | false   |
| text              | determine whether it's a text button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| bg                | determine whether the text button background color is always on                                                                                      | ^[boolean]                                                                                                   | false   |
| link              | determine whether it's a link button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| round             | determine whether it's a round button                                                                                                                | ^[boolean]                                                                                                   | false   |
| circle            | determine whether it's a circle button                                                                                                               | ^[boolean]                                                                                                   | false   |
| loading           | determine whether it's loading                                                                                                                       | ^[boolean]                                                                                                   | false   |
| loading-icon      | customize loading icon component                                                                                                                     | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | disable the button                                                                                                                                   | ^[boolean]                                                                                                   | false   |
| icon              | icon component                                                                                                                                       | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | same as native button's `autofocus`                                                                                                                  | ^[boolean]                                                                                                   | false   |
| native-type       | same as native button's `type`                                                                                                                       | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean]                                                                                                   | false   |
| color             | custom button color, automatically calculate `hover` and `active` color                                                                              | ^[string]                                                                                                    | —       |
| dark              | dark mode, which automatically converts `color` to dark mode colors                                                                                  | ^[boolean]                                                                                                   | false   |
| tag               | custom element tag                                                                                                                                   | ^[string] / ^[Component]                                                                                     | button  |

</details>

### Button Slots

<details>
<summary>Element Plus Button Slots</summary>

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

</details>

### Button Exposes

<details>
<summary>Element Plus Button Exposes</summary>

| Name           | Description          | Type                                                                                                           |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | button html element  | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | button size          | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | button type          | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | button disabled      | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | whether adding space | ^[object]`ComputedRef<boolean>`                                                                                |

</details>

## ButtonGroup API

### ButtonGroup Attributes

<details>
<summary>Element Plus ButtonGroup Attributes</summary>

| Name      | Description                                      | Type                                                               | Default    |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------ | ---------- |
| size      | control the size of buttons in this button-group | ^[enum]`'large' \| 'default' \| 'small'`                           | —          |
| type      | control the type of buttons in this button-group | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —          |
| direction | display direction                                | ^[enum]`'horizontal' \| 'vertical'`                                | horizontal |

</details>

### ButtonGroup Slots

<details>
<summary>Element Plus ButtonGroup Slots</summary>

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |

</details>

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
import type { ButtonProps } from "element-plus"
import type { Component } from "vue"

export interface EpButtonProps extends Omit<ButtonProps, "icon"> {
  icon?: string | Component
}
```

</details>
