# xorWith

::: tip 语法

\_.xorWith([arrays], [comparator])

:::

## 描述

这个方法类似[`_.xor`](/Array/xor) ，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用 2 个参数：(arrVal, othVal)

## 参数

|    参数    |   类型   | 默认值 |     说明     |
| :--------: | :------: | :----: | :----------: |
|   array    | ...Array |   -    | 要检查的数组 |
| comparator | Function |   -    |   比较函数   |

## 返回

- array(Array): 返回过滤值后的新数组

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

_.xorWith(objects, others, _.isEqual)
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
