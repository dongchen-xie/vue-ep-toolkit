# intersectionWith

::: tip 语法

\_.intersectionWith([arrays], [comparator])

:::

## 描述

这个方法类似[`_.intersection`](/Array/intersection)，区别是它接受一个 comparator 调用比较 arrays 中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

## 参数

|    参数    |   类型   | 默认值 |     说明     |
| :--------: | :------: | :----: | :----------: |
|   array    | ...Array |   -    | 待检查的数组 |
| comparator | Function |   -    |    比较器    |

## 返回

- array(Array): 返回一个包含所有传入数组交集元素的新数组

## 例子

```js
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 }
]
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 }
]

_.intersectionWith(objects, others, _.isEqual)
// => [{ 'x': 1, 'y': 2 }]
```
