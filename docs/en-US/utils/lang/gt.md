# gt

::: tip Syntax

\_.gt(value, other)

:::

## Description

Checks if`value`是否大于`other`。

## Parameters

| Parameters  | Type | Default |       Description       |
| :---: | :--: | :----: | :--------------: |
| value | any  |   -    |    The value to compare    |
| other | any  |   -    | 另一个The value to compare |

## Returns

- boolean: 如果`value`大于`other` ，Returns `true`，否则 `false`。

## Examples

```js
_.gt(3, 1)
// => true

_.gt(3, 3)
// => false

_.gt(1, 3)
// => false
```
