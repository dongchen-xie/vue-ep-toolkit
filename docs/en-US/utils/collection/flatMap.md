# flatMap

::: tip Syntax

_.flatMap(collection, [iteratee=_.identity])

:::

## Description

创建一个扁平化（注：同阶数组）的数组，这个数组的值来自 collection（集合）中的每一个值经过 iteratee（The iteratee function） 处理后Returns的结果，并且扁平化合并。 iteratee 调用三个Parameters： (value, index|key, collection)。

## Parameters

|    Parameters    |                Type                | Default |        Description        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
|  iteratee  | Array / Function / Object / string |   -    |      The iteratee function      |

## Returns

- array(Array): Returns新的扁平化数组

## Examples

```js
function duplicate(n) {
  return [n, n]
}

_.flatMap([1, 2], duplicate)
// => [1, 1, 2, 2]
```
