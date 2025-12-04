# xorBy

::: tip Syntax

_.xorBy([arrays], [iteratee=_.identity])

:::

## Description

这个方法类似[`_.xor`](/Array/xor) ，除了它接受 iteratee（The iteratee），这个The iteratee 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个Parameters：(value).

## Parameters

|   Parameters   |                Type                | Default |     Description     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |              ...Array              |   -    | 要检查的数组 |
| iteratee | Array / Function / Object / string |   -    |   迭代函数   |

## Returns

- array(Array): Returns过滤值后的新数组

## Examples

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2, 3.4]

// The `_.property` iteratee shorthand.
_.xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")
// => [{ 'x': 2 }]
```
