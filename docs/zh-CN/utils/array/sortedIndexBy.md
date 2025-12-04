# sortedIndex

::: tip 语法

_.sortedIndexBy(array, value, [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.sortedIndex`](/Array/sortedIndex) ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和 value 值比较来计算排序。iteratee 会传入一个参数：(value)。

## 参数

|   参数   |                类型                | 默认值 |       说明       |
| :------: | :--------------------------------: | :----: | :--------------: |
|  array   |               Array                |   -    | 要检查的排序数组 |
|  value   |                any                 |   -    |    要评估的值    |
| iteratee | Array / Function / Object / string |   -    |     迭代函数     |

## 返回

- number(number): 返回 value 值 应该在数组 array 中插入的索引位置 index

## 例子

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
