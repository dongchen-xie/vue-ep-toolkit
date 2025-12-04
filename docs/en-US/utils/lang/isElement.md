# isElement

::: tip Syntax

\_.isElement(value)

:::

## Description

Checks if `value` 是否是可能是 DOM 元素。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个 DOM 元素，Returns `true`，否则 `false`。

## Examples

```js
_.isElement(document.body)
// => true

_.isElement("<body>")
// => false
```
