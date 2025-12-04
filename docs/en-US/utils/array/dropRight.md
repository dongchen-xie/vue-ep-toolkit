# dropRight

::: tip Syntax

\_.dropRight(array, [n=1])

:::

## Description

创建一个切片数组，去除 array 末尾的 n 个元素。（n Default为 1。）

## Parameters

| Parameters  |  Type  | Default |      Description      |
| :---: | :----: | :----: | :------------: |
| array | Array  |   -    | The array to process |
| [n=1] | number |   1    |  The number to drop  |

## Returns

- array (Array): Returns`array`的剩余切片

## Examples

```js
_.dropRight([1, 2, 3])
// => [1, 2]

_.dropRight([1, 2, 3], 2)
// => [1]

_.dropRight([1, 2, 3], 5)
// => []

_.dropRight([1, 2, 3], 0)
// => [1, 2, 3]
```
