# toFinite

::: tip Syntax

\_.toFinite(value)

:::

## Description

Converts `value` 为一个有限数字。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- number: ReturnsConverts后的数字。

## Examples

```js
_.toFinite(3.2)
// => 3.2

_.toFinite(Number.MIN_VALUE)
// => 5e-324

_.toFinite(Infinity)
// => 1.7976931348623157e+308

_.toFinite("3.2")
// => 3.2
```
