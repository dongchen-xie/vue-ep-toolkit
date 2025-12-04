# isBoolean

::: tip Syntax

\_.isBoolean(value)

:::

## Description

Checks if `value` 是否是原始 boolean Type或者对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个布尔值，Returns `true`，否则 `false`。

## Examples

```js
_.isBoolean(false)
// => true

_.isBoolean(null)
// => false
```
