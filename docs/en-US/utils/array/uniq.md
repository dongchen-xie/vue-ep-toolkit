# uniq

::: tip Syntax

\_.uniq(array)

:::

## Description

创建一个去重后的 array 数组副本。使用了[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做等值比较。只有第一次出现的元素才会被保留。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## Returns

- array(Array): Returns新的去重后的数组

## Examples

```js
_.uniq([2, 1, 2])
// => [2, 1]
```
