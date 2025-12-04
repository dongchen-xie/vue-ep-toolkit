# xor

::: tip Syntax

\_.xor([arrays])

:::

## Description

创建一个给定数组唯一值的数组，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做相等比较。Returns的顺序取决于他们数组的出现顺序。

## Parameters

| Parameters  |   Type   | Default |     Description     |
| :---: | :------: | :----: | :----------: |
| array | ...Array |   -    | 要检查的数组 |

## Returns

- array(Array): Returns过滤值后的新数组

## Examples

```js
_.xor([2, 1], [2, 3])
// => [1, 3]
```
