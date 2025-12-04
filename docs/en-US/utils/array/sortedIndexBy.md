# sortedIndex

::: tip Syntax

_.sortedIndexBy(array, value, [iteratee=_.identity])

:::

## Description

这个方法类似[`_.sortedIndex`](/Array/sortedIndex) ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，Returns结果和 value 值比较来计算排序。iteratee 会传入一个Parameters：(value)。

## Parameters

|   Parameters   |                Type                | Default |       Description       |
| :------: | :--------------------------------: | :----: | :--------------: |
|  array   |               Array                |   -    | 要检查的排序数组 |
|  value   |                any                 |   -    |    要评估的值    |
| iteratee | Array / Function / Object / string |   -    |     迭代函数     |

## Returns

- number(number): Returns value 值 应该在数组 array 中插入的索引位置 index

## Examples

```js
var objects = [{ x: 4 }, { x: 5 }]

_.sortedIndexBy(objects, { x: 4 }, function (o) {
  return o.x
})
// => 0

// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { x: 4 }, "x")
// => 0
```
