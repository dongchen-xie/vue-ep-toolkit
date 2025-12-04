# partition

::: tip 语法

_.partition(collection, [predicate=_.identity])

:::

## 描述

创建一个分成两组的元素数组，第一组包含 predicate（断言函数）返回为 truthy（真值）的元素，第二组包含 predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用 1 个参数：(value)。

## 参数

|    参数    |                 类型                 | 默认值 |      说明      |
| :--------: | :----------------------------------: | :----: | :------------: |
| collection |            Array / Object            |   -    | 用来迭代的集合 |
|  iteratee  | Array / Function / / Object / string |   -    |    迭代函数    |

## 返回

- Array: 返回按元素分组后的数组

## 例子

```js
var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false }
]

_.partition(users, function (o) {
  return o.active
})
// => [[{ "user": "fred", "age": 40, "active": true }], [{"user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }]]

// The `_.matches` iteratee shorthand.
_.partition(users, { age: 1, active: false })
// => [[{"user": "pebbles", "age": 1, "active": false }], [{ "user": "barney", "age": 36, "active": false }, { "user": "fred", "age": 40, "active": true }]]

// The `_.matchesProperty` iteratee shorthand.
_.partition(users, ["active", false])
// => [[{ "user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }], [{ "user": "fred", "age": 40, "active": true }]]

// The `_.property` iteratee shorthand.
_.partition(users, "active")
// => [[{ "user": "fred", "age": 40, "active": true }], [{ "user": "barney", "age": 36, "active": false }, { "user": "pebbles", "age": 1, "active": false }]]
```
