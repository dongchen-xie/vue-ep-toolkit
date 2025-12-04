# castArray

::: tip Syntax

\_.castArray(value)

:::

## Description

如果 value 不是数组, 那么强制转为数组。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要处理的值 |

## Returns

- Array: ReturnsConverts后的数组

## Examples

```js
_.castArray(1)
// => [1]

_.castArray({ a: 1 })
// => [{ 'a': 1 }]

_.castArray("abc")
// => ['abc']

_.castArray(null)
// => [null]

_.castArray(undefined)
// => [undefined]

_.castArray()
// => []

var array = [1, 2, 3]
console.log(_.castArray(array) === array)
// => true
```
