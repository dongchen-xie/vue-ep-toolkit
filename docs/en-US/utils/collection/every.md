# every

::: tip Syntax

_.every(collection, [predicate=_.identity])

:::

## Description

通过 predicate（The predicate函数） 检查 collection（集合）中的所有元素是否都Returns真值。一旦 predicate（The predicate函数） Returns假值，迭代就马上停止。predicate（The predicate函数）调用三个Parameters：(value, index|key, collection)。

::: warning Note

这个方法对于对于[`空集合`](https://en.wikipedia.org/wiki/Empty_set)Returns true，因为`[空集合的任何元素都是 true](https://en.wikipedia.org/wiki/Vacuous_truth)`。

:::

## Parameters

|    Parameters    |                Type                | Default |        Description        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      The iteratee function      |

## Returns

- boolean (boolean): 如果所有元素经 predicate（The predicate函数） 检查后都都Returns真值，那么就Returns true，否则Returns false 。

## Examples

```js
_.every([true, 1, null, "yes"], Boolean)
// => false

var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: false }
]

// The `_.matches` iteratee shorthand.
_.every(users, { user: "barney", active: false })
// => false

// The `_.matchesProperty` iteratee shorthand.
_.every(users, ["active", false])
// => true

// The `_.property` iteratee shorthand.
_.every(users, "active")
// => false
```
