# sortedLastIndex

::: tip Syntax

\_.sortedLastIndex(array, value)

:::

## Description

此方法类似于[`_.sortedIndex`](/Array/sortedIndex)，除了 它Returns value 值 在 array 中尽可能大的索引位置

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要搜索的数组 |
| value |  any  |   -    |   搜索的值   |

## Returns

- number(number): Returns value 值 应该在数组 array 中插入的索引位置 index。

## Examples

```js
_.sortedLastIndex([4, 5, 5, 5, 6], 5)
// => 4
```
