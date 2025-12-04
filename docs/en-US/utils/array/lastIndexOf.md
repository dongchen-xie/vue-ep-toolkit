# lastIndexOf

::: tip Syntax

\_.lastIndexOf(array, value, [fromIndex=array.length-1])

:::

## Description

这个方法类似[`_.indexOf`](/Array/indexOf) ，区别是它是从右到左遍历 array 的元素。

## Parameters

|   Parameters    |  Type  |      Default      |       Description       |
| :-------: | :----: | :--------------: | :--------------: |
|   array   | Array  |        -         |   The array to query   |
|   value   |  any   |        -         |    The value to search for    |
| fromIndex | number | array.length - 1 | The index to search from |

## Returns

- number(number): Returns匹配值的索引值，否则Returns -1

## Examples

```js
_.lastIndexOf([1, 2, 1, 2], 2)
// => 3

// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2)
// => 1
```
