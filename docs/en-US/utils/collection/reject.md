# reject

::: tip Syntax

_.reject(collection, [predicate=_.identity])

:::

## Description

[`_.filter`](/Collection/filter)的反向方法;此方法 Returns predicate（The predicate函数）不Returns truthy（真值）的 collection（集合）元素

## Parameters

|    Parameters    |                Type                | Default |      Description      |
| :--------: | :--------------------------------: | :----: | :------------: |
| collection |           Array / Object           |   -    | 用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |    The iteratee function    |

## Returns

- Array: Returns过滤后的新数组

## Examples

```js
var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true }
]

_.reject(users, function (o) {
  return !o.active
})
// => [{ user: 'fred', age: 40, active: true }]

// The `_.matches` iteratee shorthand.
_.reject(users, { age: 40, active: true })
// => [{ user: 'barney', age: 36, active: false }]

// The `_.matchesProperty` iteratee shorthand.
_.reject(users, ["active", false])
// => [{ user: 'fred', age: 40, active: true }]

// The `_.property` iteratee shorthand.
_.reject(users, "active")
// => [{ user: 'barney', age: 36, active: false }]
```
