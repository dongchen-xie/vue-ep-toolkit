# lte

::: tip Syntax

\_.lte(value, other)

:::

## Description

Checks if `value` 是否小于等于 `other`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to compare |
| other | any  |   -    | 另一个The value to compare |

## Returns

- boolean: 如果 `value` 小于等于 `other`，Returns `true`，否则 `false`。

## Examples

```js
_.lte(1, 3)
// => true

_.lte(3, 3)
// => true

_.lte(3, 1)
// => false
```
