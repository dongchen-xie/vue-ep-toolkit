# take

::: tip Syntax

\_.take(array, [n=1])

:::

## Description

创建一个数组切片，从 array 数组的起始元素开始提取 n 个元素

## Parameters

| Parameters  |  Type  | Default |       Description       |
| :---: | :----: | :----: | :--------------: |
| array | Array  |   -    |   The array to query   |
|   n   | number |   1    | 要提取的元素个数 |

## Returns

- array(Array): Returns从开始截取到第 n 个元素的数组切片

## Examples

```js
_.take([1, 2, 3])
// => [1]

_.take([1, 2, 3], 2)
// => [1, 2]

_.take([1, 2, 3], 5)
// => [1, 2, 3]

_.take([1, 2, 3], 0)
// => []
```
