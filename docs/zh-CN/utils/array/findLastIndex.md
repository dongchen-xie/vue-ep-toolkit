# findLastIndex

::: tip 语法

_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])

:::

## 描述

这个方法 l 类似于[`_.findIndex`](/Array/findIndex)，但是它从右向左遍历集合并返回满足迭代器查询到最后一次的索引值。

## 参数

|   参数    |   类型   |      默认值      |       说明       |
| :-------: | :------: | :--------------: | :--------------: |
|   array   |  Array   |        -         |  需要检索的数组  |
| predicate | Function |        -         |      迭代器      |
| fromIndex |  number  | array.length - 1 | 开始搜索的索引值 |

## 返回

- number (number): 返回查找到的元素索引值，未找到返回 -1。

## 例子

```js
var users = [
  { name: "张三", age: 20, alive: false },
  { name: "李四", age: 20, alive: false },
  { name: "王五", age: 30, alive: true },
  { name: "赵六", age: 30, alive: true }
]

_.findLastIndex(users, function (o) {
  return o.age == 20
})
// => 1

// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { name: "李四", age: 20 })
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ["age", 20])
// => 1

// The `_.property` iteratee shorthand.
_.findLastIndex(users, "alive")
// => 3
```
