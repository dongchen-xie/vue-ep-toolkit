# sortBy

::: tip 语法

_.sortBy(collection, [iteratees=[_.identity]])

:::

## 描述

创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用 1 个参数： (value)。

## 参数

|    参数    |                                         类型                                         | 默认值 |       说明       |
| :--------: | :----------------------------------------------------------------------------------: | :----: | :--------------: |
| collection |                                    Array / Object                                    |   -    |  用来迭代的集合  |
| iteratees  | ...(Array / Array[] / Function / Function[] / Object / Object[] / string / string[]) |   -    | 排序用的迭代函数 |

## 返回

- boolean: 如果任意元素经 predicate 检查为 truthy（真值），返回 true ，否则返回 false 。

## 例子

```js
var users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 }
]

_.sortBy(users, function (o) {
  return o.user
})
// => [{ user: 'barney', age: 36 },{ user: 'barney', age: 34 },{ user: 'fred', age: 48 },{ user: 'fred', age: 40 }]

_.sortBy(users, ["user", "age"])
// => [{ user: 'barney', age: 34 }, { user: 'barney', age: 36 }, { user: 'fred', age: 40 }, { user: 'fred', age: 48 }]

_.sortBy(users, "user", function (o) {
  return Math.floor(o.age / 10)
})
// => [{ user: 'barney', age: 36 },{ user: 'barney', age: 34 },{ user: 'fred', age: 48 },{ user: 'fred', age: 40 }]
```
