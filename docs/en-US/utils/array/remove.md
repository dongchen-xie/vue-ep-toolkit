# remove

::: tip Syntax

_.remove(array, [predicate=_.identity])

:::

## Description

移除数组中 predicate（断言）Returns为真值的所有元素，并Returns移除元素组成的数组。predicate（断言） 会传入 3 个Parameters： (value, index, array)。

::: warning Note

和[`_.filter`](/Collection/filter)方法不同，This method mutates array。使用[`_.pull`](/Array/pull)来根据提供的 value 值从数组中移除元素。

:::

## Parameters

|   Parameters    |                Type                | Default |        Description        |
| :-------: | :--------------------------------: | :----: | :----------------: |
|   array   |               Array                |   -    |    The array to modify    |
| predicate | Array / Function / Object / string |   -    | 每次迭代调用的函数 |

## Returns

- array(Array): Returns移除元素组成的新数组

## Examples

```js
var array = [1, 2, 3, 4]
var evens = _.remove(array, function (n) {
  return n % 2 == 0
})

console.log(array)
// => [1, 3]

console.log(evens)
// => [2, 4]
```
