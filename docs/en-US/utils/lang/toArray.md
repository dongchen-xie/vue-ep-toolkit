# toArray

::: tip Syntax

\_.toArray(value)

:::

## Description

Converts `value` 为一个数组。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- Array: ReturnsConverts后的数组。

## Examples

```js
_.toArray({ a: 1, b: 2 })
// => [1, 2]

_.toArray("abc")
// => ['a', 'b', 'c']

_.toArray(1)
// => []

_.toArray(null)
// => []
```
