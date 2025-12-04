# sampleSize

::: tip Syntax

\_.sampleSize(collection, [n=1])

:::

## Description

从 collection（集合）中获得 n 个随机元素。

## Parameters

|    Parameters    |      Type      | Default |      Description      |
| :--------: | :------------: | :----: | :------------: |
| collection | Array / Object |   -    |  要取样的集合  |
|     n      |     number     |   -    | 取样的元素个数 |

## Returns

- Array: Returns n 个元素组成的数组

## Examples

```js
_.sampleSize([1, 2, 3], 2)
// => [3, 1]

_.sampleSize([1, 2, 3], 4)
// => [2, 3, 1]
```
