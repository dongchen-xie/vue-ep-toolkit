# sortedUniqBy

::: tip Syntax

\_.sortedUniqBy(array, [iteratee])

:::

## Description

这个方法类似[`_.uniqBy`](/Array/uniqBy)，除了它会优化排序数组。

## Parameters

|   Parameters   |   Type   | Default |     Description     |
| :------: | :------: | :----: | :----------: |
|  array   |  Array   |   -    | 要检查的数组 |
| iteratee | Function |   -    |   迭代函数   |

## Returns

- array(Array): Returns一个新的不重复的数组

## Examples

```js
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
// => [1.1, 2.3]
```
