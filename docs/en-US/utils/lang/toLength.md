# toLength

::: tip Syntax

\_.toLength(value)

:::

## Description

Converts `value` 为用作类数组对象的长度整数。

::: warning Note

这个方法基于 [ToLength](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- number: ReturnsConverts后的整数。

## Examples

```js
_.toLength(3.2)
// => 3

_.toLength(Number.MIN_VALUE)
// => 0

_.toLength(Infinity)
// => 4294967295

_.toLength("3.2")
// => 3
```
