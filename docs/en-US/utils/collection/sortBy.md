# sortBy

::: tip Syntax

_.sortBy(collection, [iteratees=[_.identity]])

:::

## Description

创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用 1 个Parameters： (value)。

## Parameters

|    Parameters    |                                         Type                                         | Default |       Description       |
| :--------: | :----------------------------------------------------------------------------------: | :----: | :--------------: |
| collection |                                    Array / Object                                    |   -    |  用来迭代的集合  |
| iteratees  | ...(Array / Array[] / Function / Function[] / Object / Object[] / string / string[]) |   -    | 排序用的The iteratee function |

## Returns

- boolean: 如果任意元素经 predicate 检查为 truthy（真值），Returns true ，否则Returns false 。

## Examples

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
