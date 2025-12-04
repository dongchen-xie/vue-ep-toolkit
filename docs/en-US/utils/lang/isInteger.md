# isInteger

::: tip Syntax

\_.isInteger(value)

:::

## Description

Checks if `value` 是否为一个整数。

::: warning Note

这个方法基于 [Number.isInteger](https://mdn.io/Number/isInteger).

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个函数，Returns `true`，否则 `false`。

## Examples

```js
_.isInteger(3)
// => true

_.isInteger(Number.MIN_VALUE)
// => false

_.isInteger(Infinity)
// => false

_.isInteger("3")
// => false
```
