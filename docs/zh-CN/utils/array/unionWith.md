# unionWith

::: tip 语法

_.unionWith([arrays], [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.union`](/Array/union) ，除了它接受一个 comparator 调用比较 arrays 数组的每一个元素。 comparator 调用时会传入 2 个参数： (arrVal, othVal)。

## 参数

|    参数    |   类型   | 默认值 |     说明     |
| :--------: | :------: | :----: | :----------: |
|   array    |  Array   |   -    | 要检查的数组 |
| comparator | Function |   -    |   比较函数   |

## 返回

- array(Array): 返回一个新的联合数组

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

_.unionWith(objects, others, _.isEqual)
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
