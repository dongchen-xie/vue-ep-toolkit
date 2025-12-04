# orderBy

::: tip 语法

_.orderBy(collection, [iteratees=[_.identity]], [orders])

:::

## 描述

此方法类似于[`_.sortBy`](/Collection/sortBy)，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。

## 参数

|    参数    |                     类型                     | 默认值 |        说明        |
| :--------: | :------------------------------------------: | :----: | :----------------: |
| collection |                Array / Object                |   -    |   用来迭代的集合   |
|  iteratee  | Array[] / Function[] / / Object[] / string[] |   -    |      迭代函数      |
|   orders   |                   string[]                   |   -    | 迭代函数的排序顺序 |

## 返回

- Array: 返回排序后的新数组

## 例子

```js
var users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 34 },
  { user: "fred", age: 40 },
  { user: "barney", age: 36 }
]

// 以 `user` 升序排序 再  `age` 以降序排序。
_.orderBy(users, ["user", "age"], ["asc", "desc"])
// => [{ user: 'barney', age: 34 }, { user: barney, age: 36 }, { user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
```
