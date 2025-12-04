# lastIndexOf

::: tip 语法

\_.lastIndexOf(array, value, [fromIndex=array.length-1])

:::

## 描述

这个方法类似[`_.indexOf`](/Array/indexOf) ，区别是它是从右到左遍历 array 的元素。

## 参数

|   参数    |  类型  |      默认值      |       说明       |
| :-------: | :----: | :--------------: | :--------------: |
|   array   | Array  |        -         |   要检索的数组   |
|   value   |  any   |        -         |    要检索的值    |
| fromIndex | number | array.length - 1 | 开始搜索的索引值 |

## 返回

- number(number): 返回匹配值的索引值，否则返回 -1

## 例子

```js
_.lastIndexOf([1, 2, 1, 2], 2)
// => 3

// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2)
// => 1
```
