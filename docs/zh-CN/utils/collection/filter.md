# filter

::: tip 语法

_.filter(collection, [predicate=_.identity])

:::

## 描述

遍历 collection（集合）元素，返回 predicate（断言函数）返回真值的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。

::: warning 注意

与[`_.remove`](/Array/remove)不同, 这个方法返回一个新数组.

:::

## 参数

|    参数    |                类型                | 默认值 |        说明        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      迭代函数      |

## 返回

- array(Array): 返回一个新的过滤后的数组

## 例子

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
