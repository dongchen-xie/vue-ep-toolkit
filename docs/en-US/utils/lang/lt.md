# lt

::: tip Syntax

\_.lt(value, other)

:::

## Description

Checks if `value` 是否小于 `other`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to compare |
| other | any  |   -    | 另一个The value to compare |

## Returns

- boolean: 如果 `value` 小于 `other`，Returns `true`，否则 `false`。

## Examples

```js
_.lt(1, 3)
// => true

_.lt(3, 3)
// => false

_.lt(3, 1)
// => false
```
