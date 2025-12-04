# sortedIndexOf

::: tip Syntax

\_.sortedIndexOf(array, value)

:::

## Description

这个方法类似[`_.indexOf`](/Array/indexOf)，除了它是在已经排序的数组 array 上执行二进制检索。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要搜索的数组 |
| value |  any  |   -    |   搜索的值   |

## Returns

- number(number): Returns匹配值的索引位置，否则Returns -1

## Examples

```js
_.sortedIndexOf([4, 5, 5, 5, 6], 5)
// => 1
```
