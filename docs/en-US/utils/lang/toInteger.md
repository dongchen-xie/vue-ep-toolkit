# toInteger

::: tip Syntax

\_.toInteger(value)

:::

## Description

Converts `value` 为一个整数。

::: warning Note

这个方法基于 [ToInteger](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- number: ReturnsConverts后的整数。

## Examples

```js
_.toInteger(3.2)
// => 3

_.toInteger(Number.MIN_VALUE)
// => 0

_.toInteger(Infinity)
// => 1.7976931348623157e+308

_.toInteger("3.2")
// => 3
```
