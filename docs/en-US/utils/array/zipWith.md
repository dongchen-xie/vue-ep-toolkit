# zipWith

::: tip Syntax

_.zipWith([arrays], [iteratee=_.identity])

:::

## Description

这个方法类似于[`_.zip`](/Array/zip)，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该 iteratee 调用每个组的元素： (...group).

## Parameters

|   Parameters   |   Type   | Default |         Description         |
| :------: | :------: | :----: | :------------------: |
|  arrays  | ...Array |   -    |     要处理的数组     |
| iteratee | Function |   -    | 函数用来组合分组的值 |

## Returns

- array(Array): Returns分组元素的新数组

## Examples

```js
_.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
  return a + b + c
})
// => [111, 222]
```
