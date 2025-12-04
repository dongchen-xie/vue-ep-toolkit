# find

::: tip 语法

_.find(collection, [predicate=_.identity], [fromIndex=0])

:::

## 描述

遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用 3 个参数：(value, index|key, collection)。

## 参数

|    参数    |                类型                | 默认值 |        说明        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |      迭代函数      |
| fromIndex  |               number               |   0    |   开始搜索的位置   |

## 返回

- any(any): 返回匹配到的元素， 未匹配到返回 undefined

## 例子

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
