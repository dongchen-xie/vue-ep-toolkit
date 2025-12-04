# dropRightWhile

::: tip 语法

_.dropRightWhile(array, [predicate=_.identity])

:::

## 描述

创建一个切片数组，去除 array 中从结尾开始到迭代器返回假值结束的部分。predicate 会传入 3 个参数： (value, index, array)。

## 参数

|          参数          |   类型   | 默认值 |      说明      |
| :--------------------: | :------: | :----: | :------------: |
|         array          |  Array   |   -    | 需要处理的数组 |
| [predicate=_.identity] | Function |   -    |     迭代器     |

## 返回

- array (Array): 返回切片后的新数组

## 例子

```js
var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false }
]

_.dropRightWhile(users, function (o) {
  return !o.active
})
// => [ { user: 'barney', active: true } ]

// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { user: "pebbles", active: false })
// => [ { user: 'barney', active: true },{ user: 'fred', active: false } ]

// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ["active", false])
// => [ { user: 'barney', active: true } ]

// The `_.property` iteratee shorthand.
_.dropRightWhile(users, "active")
// => [ { user: 'barney', active: true },{ user: 'fred', active: false },{ user: 'pebbles', active: false } ]
```
