# includes

::: tip 语法

\_.includes(collection, value, [fromIndex=0])

:::

## 描述

检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。

## 参数

|    参数    |          类型           | 默认值 |       说明       |
| :--------: | :---------------------: | :----: | :--------------: |
| collection | Array / Object / string |   -    |   要检索的集合   |
|   value    |           any           |   -    |    要检索的值    |
| fromIndex  |         number          |   0    | 要检索的索引位置 |

## 返回

- boolean: 如果找到 value 返回 true， 否则返回 false

## 例子

```js
_.includes([1, 2, 3], 1)
// => true

_.includes([1, 2, 3], 1, 2)
// => false

_.includes({ user: "fred", age: 40 }, "fred")
// => true

_.includes("pebbles", "eb")
// => true
```
