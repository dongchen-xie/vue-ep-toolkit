# findLast

::: tip Syntax

_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])

:::

## Description

这个方法类似[`_.find`](/Collection/find) ，不同之处在于`_.findLast`是从右至左遍历 collection （集合）元素的

## Parameters

|    Parameters    |                Type                |        Default         |        Description        |
| :--------: | :--------------------------------: | :-------------------: | :----------------: |
| collection |           Array / Object           |           -           | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |           -           |      The iteratee function      |
| fromIndex  |               number               | collection.length - 1 |   开始搜索的位置   |

## Returns

- any(any): Returns匹配到的元素， 未匹配到Returns undefined

## Examples

```js
_.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1
})
// => 3
```
