# without

::: tip Syntax

\_.without(array, [values])

:::

## Description

创建一个剔除所有给定值的新数组，剔除值的时候，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)做相等比较。

::: warning Note

不像[`_.pull`](/Array/pull), 这个方法会Returns一个新数组。

:::

## Parameters

|  Parameters  |   Type   | Default |     Description     |
| :----: | :------: | :----: | :----------: |
| array  | ...Array |   -    | 要检查的数组 |
| values |  ...any  |   -    |  要剔除的值  |

## Returns

- array(Array): Returns过滤值后的新数组

## Examples

```js
_.without([2, 1, 2, 3], 1, 2)
// => [3]
```
