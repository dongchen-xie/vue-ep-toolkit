# toNumber

::: tip Syntax

\_.toNumber(value)

:::

## Description

Converts `value` 为一个数字。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- number: ReturnsConverts后的数字。

## Examples

```js
_.toNumber(3.2)
// => 3.2

_.toNumber(Number.MIN_VALUE)
// => 5e-324

_.toNumber(Infinity)
// => Infinity

_.toNumber("3.2")
// => 3.2
```
