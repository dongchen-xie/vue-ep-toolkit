# xor

::: tip 语法

\_.xor([arrays])

:::

## 描述

创建一个给定数组唯一值的数组，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做相等比较。返回的顺序取决于他们数组的出现顺序。

## 参数

| 参数  |   类型   | 默认值 |     说明     |
| :---: | :------: | :----: | :----------: |
| array | ...Array |   -    | 要检查的数组 |

## 返回

- array(Array): 返回过滤值后的新数组

## 例子

```js
_.xor([2, 1], [2, 3])
// => [1, 3]
```
