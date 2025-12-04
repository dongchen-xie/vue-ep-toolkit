# pullAllBy

::: tip 语法

_.pullAllBy(array, values, [iteratee=_.identity])

:::

## 描述

这个方法类似[\_.pull](/Array/pull)，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values 的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。

::: warning 注意

和[`differenceBy`](/Array/differenceBy)方法不同，该方法会改变原数组。

:::

## 参数

|   参数   |                类型                | 默认值 |     说明     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |               Array                |   -    | 要修改的数组 |
|  values  |               Array                |   -    |  要删除的值  |
| iteratee | Array / Function / Object / string |   -    |    迭代器    |

## 返回

- array(Array): 返回数组

## 例子

```js
var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]

_.pullAllBy(array, [{ x: 1 }, { x: 3 }], "x")
console.log(array)
// => [{ 'x': 2 }]
```
