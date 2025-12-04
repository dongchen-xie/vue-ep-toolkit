# takeWhile

::: tip 语法

_.takeWhile(array, [predicate=_.identity])

:::

## 描述

从 array 数组的起始元素开始提取元素，直到 predicate（断言） 返回假值。predicate 会传入三个参数： (value, index, array)。

## 参数

|   参数    |                类型                | 默认值 |     说明     |
| :-------: | :--------------------------------: | :----: | :----------: |
|   array   |               Array                |   -    | 要检索的数组 |
| predicate | Array / Function / Object / string |   -    |    迭代器    |

## 返回

- array(Array): 返回 array 数组的切片

## 例子

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
