# pullAllWith

::: tip 语法

\_.pullAllWith(array, values, [comparator])

:::

## 描述

这个方法类似[\_.pullAll](/Array/pullAll)，区别是这个方法接受 comparator 调用 array 中的元素和 values 比较。comparator 会传入两个参数：(arrVal, othVal)。

::: warning 注意

和[`differenceWith`](/Array/differenceWith)方法不同，该方法会改变原数组。

:::

## 参数

|    参数    |   类型   | 默认值 |     说明     |
| :--------: | :------: | :----: | :----------: |
|   array    |  Array   |   -    | 要修改的数组 |
|   values   |  Array   |   -    |  要删除的值  |
| comparator | Function |   -    |    比较器    |

## 返回

- array(Array): 返回数组

## 例子

```js
var array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 }
]

_.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual)
console.log(array)
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```
