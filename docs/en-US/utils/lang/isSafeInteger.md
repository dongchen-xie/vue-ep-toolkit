# isSafeInteger

::: tip Syntax

\_.isSafeInteger(value)

:::

## Description

Checks if `value` 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。

::: warning Note

这个方法基于 [Number.isSafeInteger](https://mdn.io/Number/isSafeInteger).

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个安全整数，Returns `true`，否则 `false`。

## Examples

```js
_.isSafeInteger(3)
// => true

_.isSafeInteger(Number.MIN_VALUE)
// => false

_.isSafeInteger(Infinity)
// => false

_.isSafeInteger("3")
// => false
```
