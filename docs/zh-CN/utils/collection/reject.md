# reject

::: tip 语法

_.reject(collection, [predicate=_.identity])

:::

## 描述

[`_.filter`](/Collection/filter)的反向方法;此方法 返回 predicate（断言函数）不返回 truthy（真值）的 collection（集合）元素

## 参数

|    参数    |                类型                | 默认值 |      说明      |
| :--------: | :--------------------------------: | :----: | :------------: |
| collection |           Array / Object           |   -    | 用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    |    迭代函数    |

## 返回

- Array: 返回过滤后的新数组

## 例子

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
