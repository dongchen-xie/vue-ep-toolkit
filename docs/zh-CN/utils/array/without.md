# without

::: tip 语法

\_.without(array, [values])

:::

## 描述

创建一个剔除所有给定值的新数组，剔除值的时候，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做相等比较。

::: warning 注意

不像[`_.pull`](/Array/pull), 这个方法会返回一个新数组。

:::

## 参数

|  参数  |   类型   | 默认值 |     说明     |
| :----: | :------: | :----: | :----------: |
| array  | ...Array |   -    | 要检查的数组 |
| values |  ...any  |   -    |  要剔除的值  |

## 返回

- array(Array): 返回过滤值后的新数组

## 例子

```js
_.without([2, 1, 2, 3], 1, 2)
// => [3]
```
