# some

::: tip Syntax

_.some(collection, [predicate=_.identity])

:::

## Description

通过 predicate（The predicate函数） 检查 collection（集合）中的元素是否存在任意 truthy（真值）的元素，一旦 predicate（The predicate函数） Returns truthy（真值），遍历就停止。 predicate 调用 3 个Parameters：(value, index|key, collection)。

## Parameters

|    Parameters    |                Type                | Default |      Description      |
| :--------: | :--------------------------------: | :----: | :------------: |
| collection |           Array / Object           |   -    | 用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    | 迭代调用的函数 |

## Returns

- boolean: 如果任意元素经 predicate 检查为 truthy（真值），Returns true ，否则Returns false 。

## Examples

```js
_.some([null, 0, "yes", false], Boolean)
// => true

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false }
]

// The `_.matches` iteratee shorthand.
_.some(users, { user: "barney", active: false })
// => false

// The `_.matchesProperty` iteratee shorthand.
_.some(users, ["active", false])
// => true

// The `_.property` iteratee shorthand.
_.some(users, "active")
// => true
```
