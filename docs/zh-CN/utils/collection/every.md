# every

::: tip 语法

_.every(collection, [predicate=_.identity])

:::

## 描述

通过 predicate（断言函数） 检查 collection（集合）中的所有元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数：(value, index|key, collection)。

::: warning 注意

这个方法对于对于[`空集合`](https://en.wikipedia.org/wiki/Empty_set)返回 true，因为`[空集合的任何元素都是 true](https://en.wikipedia.org/wiki/Vacuous_truth)`。

:::

## 参数

|    参数    |                类型                | 默认值 |        说明        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      迭代函数      |

## 返回

- boolean (boolean): 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回 true，否则返回 false 。

## 例子

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
