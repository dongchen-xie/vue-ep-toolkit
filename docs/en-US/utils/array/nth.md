# nth

::: tip Syntax

\_.nth(array, [n=0])

:::

## Description

获取`array`数组的第 n 个元素。如果 n 为负数，则Returns从数组结尾开始的第 n 个元素。

## Parameters

| Parameters  |  Type  | Default |        Description        |
| :---: | :----: | :----: | :----------------: |
| array | Array  |   -    |    The array to query    |
|   n   | number |   0    | 要Returns元素的索引值 |

## Returns

- any(any): Returns array 数组的第 n 个元素

## Examples

```js
var array = ["a", "b", "c", "d"]

_.nth(array, 1)
// => 'b'

_.nth(array, -2)
// => 'c';
```
