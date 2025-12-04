# difference

::: tip Syntax

\_.difference(array, [values])

:::

## Description

创建一个新数组，使这个数组中的值为第一个数组Parameters排除了给定数组中的值。该方法使用[SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero)做相等比较。结果值的顺序是由第一个数组中的顺序确定。

## Parameters

|   Parameters   |   Type   | Default |      Description      |
| :------: | :------: | :----: | :------------: |
|  array   |  Array   |   -    | The array to process |
| [values] | ...Array |   -    |   The values to exclude   |

## Returns

- array (Array): Returns一个过滤值后的新数组。

## Examples

```js
// 从第一个数组中，排除第二个数组中的值
_.difference([3, 2, 1], [4, 2])
// => [3, 1]
```
