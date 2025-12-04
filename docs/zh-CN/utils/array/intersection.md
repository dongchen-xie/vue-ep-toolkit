# intersection

::: tip 语法

\_.intersection([arrays])

:::

## 描述

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)进行相等性比较。

## 参数

| 参数  |   类型   | 默认值 |     说明     |
| :---: | :------: | :----: | :----------: |
| array | ...Array |   -    | 待检查的数组 |

## 返回

- array(Array): 返回一个包含所有传入数组交集元素的新数组

## 例子

```js
_.intersection([2, 1], [4, 2], [1, 2])
// => [2]
```
