# sortedIndex

::: tip 语法

\_.sortedIndex(array, value)

:::

## 描述

使用二进制的方式检索来决定 value 值 应该插入到数组中 尽可能小的索引位置，以保证 array 的排序。

## 参数

| 参数  | 类型  | 默认值 |       说明       |
| :---: | :---: | :----: | :--------------: |
| array | Array |   -    | 要检查的排序数组 |
| value |  any  |   -    |    要评估的值    |

## 返回

- number(number): 返回 value 值 应该在数组 array 中插入的索引位置 index

## 例子

```js
_.sortedIndex([30, 50], 40)
// => 1
```
