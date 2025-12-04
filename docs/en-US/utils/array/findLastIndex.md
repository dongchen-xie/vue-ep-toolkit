# findLastIndex

::: tip Syntax

_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])

:::

## Description

这个方法 l 类似于[`_.findIndex`](/Array/findIndex)，但是它从右向左遍历集合并Returns满足The iteratee查询到最后一次的索引值。

## Parameters

|   Parameters    |   Type   |      Default      |       Description       |
| :-------: | :------: | :--------------: | :--------------: |
|   array   |  Array   |        -         |  The array to inspect  |
| predicate | Function |        -         |      The iteratee      |
| fromIndex |  number  | array.length - 1 | The index to search from |

## Returns

- number (number): Returns查找到的元素索引值，未找到Returns -1。

## Examples

```js
var users = [
  { name: "张三", age: 20, alive: false },
  { name: "李四", age: 20, alive: false },
  { name: "王五", age: 30, alive: true },
  { name: "赵六", age: 30, alive: true }
]

_.findLastIndex(users, function (o) {
  return o.age == 20
})
// => 1

// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { name: "李四", age: 20 })
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ["age", 20])
// => 1

// The `_.property` iteratee shorthand.
_.findLastIndex(users, "alive")
// => 3
```
