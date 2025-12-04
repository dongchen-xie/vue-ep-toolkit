# sortedUniqBy

::: tip 语法

\_.sortedUniqBy(array, [iteratee])

:::

## 描述

这个方法类似[`_.uniqBy`](/Array/uniqBy)，除了它会优化排序数组。

## 参数

|   参数   |   类型   | 默认值 |     说明     |
| :------: | :------: | :----: | :----------: |
|  array   |  Array   |   -    | 要检查的数组 |
| iteratee | Function |   -    |   迭代函数   |

## 返回

- array(Array): 返回一个新的不重复的数组

## 例子

```js
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
// => [1.1, 2.3]
```
