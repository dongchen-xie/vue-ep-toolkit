# union

::: tip Syntax

\_.union([arrays])

:::

## Description

创建一个**按顺序排列的唯一值**的数组。所有给定数组的元素值使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做等值比较。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## Returns

- array(Array): Returns一个新的联合数组

## Examples

```js
_.union([2], [1, 2])
// => [2, 1]
```
