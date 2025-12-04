# dropWhile

::: tip Syntax

_.dropWhile(array, [predicate=_.identity])

:::

## Description

创建一个切片数组，去除 array 中从开头到The iterateeReturns假值结束的部分。predicate 会传入 3 个Parameters： (value, index, array)。

## Parameters

|          Parameters          |   Type   | Default |      Description      |
| :--------------------: | :------: | :----: | :------------: |
|         array          |  Array   |   -    | The array to process |
| [predicate=_.identity] | Function |   -    |     The iteratee     |

## Returns

- array (Array): Returns切片后的新数组

## Examples

```js
var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true }
]

_.dropWhile(users, function (o) {
  return !o.active
})
// => [ { user: 'pebbles', active: true } ]

// The `_.matches` iteratee shorthand.
_.dropWhile(users, { user: "barney", active: false })
// => [ { user: 'fred', active: false },{ user: 'pebbles', active: true } ]

// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ["active", false])
// => [ { user: 'pebbles', active: true } ]

// The `_.property` iteratee shorthand.
_.dropWhile(users, "active")
// => [ { user: 'barney', active: true },{ user: 'fred', active: false },{ user: 'pebbles', active: false } ]
```
