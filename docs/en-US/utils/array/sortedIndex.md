# sortedIndex

::: tip Syntax

\_.sortedIndex(array, value)

:::

## Description

使用二进制的方式检索来决定 value 值 应该插入到数组中 尽可能小的索引位置，以保证 array 的排序。

## Parameters

| Parameters  | Type  | Default |       Description       |
| :---: | :---: | :----: | :--------------: |
| array | Array |   -    | 要检查的排序数组 |
| value |  any  |   -    |    要评估的值    |

## Returns

- number(number): Returns value 值 应该在数组 array 中插入的索引位置 index

## Examples

```js
_.sortedIndex([30, 50], 40)
// => 1
```
