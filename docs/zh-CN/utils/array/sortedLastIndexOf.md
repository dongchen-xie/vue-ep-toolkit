# sortedLastIndexOf

::: tip 语法

\_.sortedLastIndexOf(array, value)

:::

## 描述

这个方法类似[`_.lastIndexOf`](/Array/lastIndexOf)，除了它是在已经排序的数组 array 上执行二进制检索。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要搜索的数组 |
| value |  any  |   -    |   搜索的值   |

## 返回

- number(number): 返回匹配值的索引位置，否则返回 -1

## 例子

```js
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5)
// => 3
```
