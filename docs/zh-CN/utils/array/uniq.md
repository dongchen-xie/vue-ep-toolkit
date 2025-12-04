# uniq

::: tip 语法

\_.uniq(array)

:::

## 描述

创建一个去重后的 array 数组副本。使用了[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做等值比较。只有第一次出现的元素才会被保留。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## 返回

- array(Array): 返回新的去重后的数组

## 例子

```js
_.uniq([2, 1, 2])
// => [2, 1]
```
