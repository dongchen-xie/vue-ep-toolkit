# uniq

::: tip Syntax

_.uniqBy(array, [iteratee=_.identity])

:::

## Description

这个方法类似[`_.uniq`](/Array/uniq)，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个Parameters：(value)。

## Parameters

|   Parameters   |                Type                | Default |     Description     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |               Array                |   -    | 要检查的数组 |
| iteratee | Array / Function / Object / string |   -    |   迭代函数   |

## Returns

- array(Array): Returns新的去重后的数组

## Examples

```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
_.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x")
// => [{ 'x': 1 }, { 'x': 2 }]
```
