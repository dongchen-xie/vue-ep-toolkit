# partition

::: tip Syntax

_.partition(collection, [predicate=_.identity])

:::

## Description

创建一个分成两组的元素数组，第一组包含 predicate（The predicate函数）Returns为 truthy（真值）的元素，第二组包含 predicate（The predicate函数）Returns为 falsey（假值）的元素。predicate 调用 1 个Parameters：(value)。

## Parameters

|    Parameters    |                 Type                 | Default |      Description      |
| :--------: | :----------------------------------: | :----: | :------------: |
| collection |            Array / Object            |   -    | 用来迭代的集合 |
|  iteratee  | Array / Function / / Object / string |   -    |    The iteratee function    |

## Returns

- Array: Returns按元素分组后的数组

## Examples

```js
var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false }
]

_.partition(users, function (o) {
  return o.active
})
// => [[{ "user": "fred", "age": 40, "active": true }], [{"user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }]]

// The `_.matches` iteratee shorthand.
_.partition(users, { age: 1, active: false })
// => [[{"user": "pebbles", "age": 1, "active": false }], [{ "user": "barney", "age": 36, "active": false }, { "user": "fred", "age": 40, "active": true }]]

// The `_.matchesProperty` iteratee shorthand.
_.partition(users, ["active", false])
// => [[{ "user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }], [{ "user": "fred", "age": 40, "active": true }]]

// The `_.property` iteratee shorthand.
_.partition(users, "active")
// => [[{ "user": "fred", "age": 40, "active": true }], [{ "user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }]]
```
