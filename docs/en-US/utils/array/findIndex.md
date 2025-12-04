# findIndex

::: tip Syntax

_.findIndex(array, [predicate=_.identity], [fromIndex=0])

:::

## Description

这个方法 l 类似于[`_.find`](/Collection/find)，但是Returns满足The iteratee查询到第一次的索引值。

## Parameters

|   Parameters    |   Type   | Default |       Description       |
| :-------: | :------: | :----: | :--------------: |
|   array   |  Array   |   -    |  The array to inspect  |
| predicate | Function |   -    |      The iteratee      |
| fromIndex |  number  |   0    | The index to search from |

## Returns

- number (number): Returns查找到的元素索引值，未找到Returns -1。

## Examples

```js
var users = [
  { name: "张三", age: 20, alive: false },
  { name: "李四", age: 20, alive: false },
  { name: "王五", age: 30, alive: true }
]

_.findIndex(users, function (o) {
  return o.age == 20
})
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { name: "李四", age: 20 })
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ["age", 20])
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, "alive")
// => 2
```
