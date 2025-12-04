# unionBy

::: tip Syntax

_.unionBy([arrays], [iteratee=_.identity])

:::

## Description

这个方法类似[`_.union`](/Array/union) ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个Parameters：(value)。

## Parameters

|   Parameters   |                Type                | Default |     Description     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |               Array                |   -    | 要检查的数组 |
| iteratee | Array / Function / Object / string |   -    |   迭代函数   |

## Returns

- array(Array): Returns一个新的联合数组

## Examples

```js
_.unionBy([2.1], [1.2, 2.3], Math.floor)
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
_.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")
// => [{ 'x': 1 }, { 'x': 2 }]
```
