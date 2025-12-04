# flatMapDepth

::: tip Syntax

_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])

:::

## Description

这个方法类似[`_.flatMap`](/Collection/flatMap) 不同之处在于`_.flatMapDeep` 会根据指定的 depth（递归深度）继续扁平化递归映射结果。

## Parameters

|    Parameters    |                Type                | Default |        Description        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
|  iteratee  | Array / Function / Object / string |   -    |      The iteratee function      |
|   depth    |               number               |   1    |    最大递归深度    |

## Returns

- array(Array): Returns新的扁平化数组

## Examples

```js
function duplicate(n) {
  return [[[n, n]]]
}

_.flatMapDepth([1, 2], duplicate, 2)
// => [[1, 1], [2, 2]]
```
