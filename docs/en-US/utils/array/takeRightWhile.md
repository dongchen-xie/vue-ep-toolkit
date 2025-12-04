# takeRightWhile

::: tip Syntax

_.takeRightWhile(array, [predicate=_.identity])

:::

## Description

从 array 数组的最后一个元素开始提取元素，直到 predicate（断言） Returns假值。predicate 会传入三个Parameters： (value, index, array)。

## Parameters

|   Parameters    |                Type                | Default |     Description     |
| :-------: | :--------------------------------: | :----: | :----------: |
|   array   |               Array                |   -    | The array to query |
| predicate | Array / Function / Object / string |   -    |    The iteratee    |

## Returns

- array(Array): Returns array 数组的切片

## Examples

```js
var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false }
]

_.takeRightWhile(users, function (o) {
  return !o.active
})
// => [{ user: 'fred', active: false }, { user: 'pebbles', active: false }]

// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { user: "pebbles", active: false })
// => [{ user: 'pebbles', active: false }]

// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ["active", false])
// => [{ user: 'fred', active: false }, { user: 'pebbles', active: false }]

// The `_.property` iteratee shorthand.
_.takeRightWhile(users, "active")
// => []
```
