# indexOf

::: tip Syntax

\_.indexOf(array, value, [fromIndex=0])

:::

## Description

使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)等值比较，Returns首次`value`在数组`array`中被找到的索引值， 如果 fromIndex 为负值，将从数组`array`尾端索引进行匹配。

## Parameters

|   Parameters    |  Type  | Default |      Description      |
| :-------: | :----: | :----: | :------------: |
|   array   | Array  |   -    | The array to search |
|   value   |  any   |   -    |  The value to search for  |
| fromIndex | number |   0    | The position to start searching |

## Returns

- number(number): Returns value 在数组中的索引位置, 没有找到为Returns-1

## Examples

```js
_.indexOf([1, 2, 1, 2], 2)
// => 1

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2)
// => 3
```
