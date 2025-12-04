# intersectionBy

::: tip Syntax

_.intersectionBy([arrays], [iteratee=_.identity])

:::

## Description

这个方法类似[`_.intersection`](/Array/intersection)，区别是它接受一个 iteratee 调用每一个 arrays 的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一个数组中选择。

## Parameters

|   Parameters   |                Type                | Default |     Description     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |              ...Array              |   -    | The arrays to inspect |
| iteratee | Array / Function / Object / string |   -    |    The iteratee    |

## Returns

- array(Array): Returns一个包含所有传入数组交集元素的新数组

## Examples

```js
/**
 * 1: 使用Math.floor方法迭代所有元素，处理之后的结果为: [2.1, 1.2] => [２, １], [4.3, 2.4] => [4, 2]
 * 2: 于是就变成了处理 _.intersectionBy([2, 1], [4, 2])，参照 intersectionBy 文档得结果为: [2]
 * 3: Returns处理的结果，结果从第一个数组中选择。但不能Returns为 [2]，应当Returns为迭代为1之前的初始值，及 [2.1]
 */
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)
// => [2.1]

// The `_.property` iteratee shorthand.
_.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")
// => [{ 'x': 1 }]
```
