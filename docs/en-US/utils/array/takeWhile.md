# takeWhile

::: tip Syntax

_.takeWhile(array, [predicate=_.identity])

:::

## Description

从 array 数组的起始元素开始提取元素，直到 predicate（断言） Returns假值。predicate 会传入三个Parameters： (value, index, array)。

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
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true }
]

_.takeWhile(users, function (o) {
  return !o.active
})
// => [{ user: 'barney', active: false }, { user: 'fred', active: false }]

// The `_.matches` iteratee shorthand.
_.takeWhile(users, { user: "barney", active: false })
// => [{ user: 'barney', active: false }]

// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ["active", false])
// => [{ user: 'barney', active: false }, { user: 'fred', active: false }]

// The `_.property` iteratee shorthand.
_.takeWhile(users, "active")
// => []
```
