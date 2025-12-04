# filter

::: tip Syntax

_.filter(collection, [predicate=_.identity])

:::

## Description

遍历 collection（集合）元素，Returns predicate（The predicate函数）Returns真值的所有元素的数组。 predicate（The predicate函数）调用三个Parameters：(value, index|key, collection)。

::: warning Note

与[`_.remove`](/Array/remove)不同, 这个方法Returns一个新数组.

:::

## Parameters

|    Parameters    |                Type                | Default |        Description        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      The iteratee function      |

## Returns

- array(Array): Returns一个新的过滤后的数组

## Examples

```js
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false }
]

_.filter(users, function (o) {
  return !o.active
})
// => [{ user: 'fred', age: 40, active: false }]

// The `_.matches` iteratee shorthand.
_.filter(users, { age: 36, active: true })
// => [{ user: 'barney', age: 36, active: true }]

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ["active", false])
// => [{ user: 'fred', age: 40, active: false }]

// The `_.property` iteratee shorthand.
_.filter(users, "active")
// => [{ user: 'barney', age: 36, active: true }]
```
