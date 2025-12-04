# find

::: tip Syntax

_.find(collection, [predicate=_.identity], [fromIndex=0])

:::

## Description

遍历 collection（集合）元素，Returns predicate（The predicate函数）第一个Returns真值的第一个元素。predicate（The predicate函数）调用 3 个Parameters：(value, index|key, collection)。

## Parameters

|    Parameters    |                Type                | Default |        Description        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      The iteratee function      |
| fromIndex  |               number               |   0    |   开始搜索的位置   |

## Returns

- any(any): Returns匹配到的元素， 未匹配到Returns undefined

## Examples

```js
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true }
]

_.find(users, function (o) {
  return o.age < 40
})
// => { user: 'barney', age: 36, active: true }

// The `_.matches` iteratee shorthand.
_.find(users, { age: 1, active: true })
// => { user: 'pebbles', age: 1, active: true }

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ["active", false])
// => { user: 'fred', age: 40, active: false }

// The `_.property` iteratee shorthand.
_.find(users, "active")
// => { user: 'barney', age: 36, active: true }
```
