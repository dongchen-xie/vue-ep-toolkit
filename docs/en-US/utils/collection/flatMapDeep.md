# flatMapDeep

::: tip Syntax

_.flatMapDeep(collection, [iteratee=_.identity])

:::

## Description

这个方法类似[`_.flatMap`](/Collection/flatMap) 不同之处在于`_.flatMapDeep` 会继续扁平化递归映射的结果。

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
  return [[[n, n]]]
}

_.flatMapDeep([1, 2], duplicate)
// => [1, 1, 2, 2]
```
