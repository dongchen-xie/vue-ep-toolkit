# union

::: tip 语法

\_.union([arrays])

:::

## 描述

创建一个**按顺序排列的唯一值**的数组。所有给定数组的元素值使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做等值比较。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## 返回

- array(Array): 返回一个新的联合数组

## 例子

```js
_.union([2], [1, 2])
// => [2, 1]
```
