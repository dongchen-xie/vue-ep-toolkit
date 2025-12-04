# toSafeInteger

::: tip Syntax

\_.toSafeInteger(value)

:::

## Description

Converts `value` 为安全整数。 安全整数可以用于比较和准确的表示。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- number: ReturnsConverts后的整数。

## Examples

```js
_.toSafeInteger(3.2)
// => 3

_.toSafeInteger(Number.MIN_VALUE)
// => 0

_.toSafeInteger(Infinity)
// => 9007199254740991

_.toSafeInteger("3.2")
// => 3
```
