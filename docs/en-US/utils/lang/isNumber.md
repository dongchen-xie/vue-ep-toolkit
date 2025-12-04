# isNumber

::: tip Syntax

\_.isNumber(value)

:::

## Description

Checks if `value` 是否是原始 `Number` 数值型 或者 对象。

::: warning Note

要排除 `Infinity`, `-Infinity`, 以及 `NaN` 数值Type，用`_.isFinite` 方法。

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个数值，Returns `true`，否则 `false`。

## Examples

```js
_.isNumber(3)
// => true

_.isNumber(Number.MIN_VALUE)
// => true

_.isNumber(Infinity)
// => true

_.isNumber("3")
// => false
```
