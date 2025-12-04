# xorBy

::: tip 语法

_.xorBy([arrays], [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.xor`](/Array/xor) ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数：(value).

## 参数

|   参数   |                类型                | 默认值 |     说明     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |              ...Array              |   -    | 要检查的数组 |
| iteratee | Array / Function / Object / string |   -    |   迭代函数   |

## 返回

- array(Array): 返回过滤值后的新数组

## 例子

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2, 3.4]

// The `_.property` iteratee shorthand.
_.xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")
// => [{ 'x': 2 }]
```
