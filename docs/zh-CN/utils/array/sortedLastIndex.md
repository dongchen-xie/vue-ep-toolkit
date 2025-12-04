# sortedLastIndex

::: tip 语法

\_.sortedLastIndex(array, value)

:::

## 描述

此方法类似于[`_.sortedIndex`](/Array/sortedIndex)，除了 它返回 value 值 在 array 中尽可能大的索引位置

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要搜索的数组 |
| value |  any  |   -    |   搜索的值   |

## 返回

- number(number): 返回 value 值 应该在数组 array 中插入的索引位置 index。

## 例子

```js
_.sortedLastIndex([4, 5, 5, 5, 6], 5)
// => 4
```
