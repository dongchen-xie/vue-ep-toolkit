# pullAll

::: tip 语法

\_.pullAll(array, values)

:::

## 描述

这个方法类似[\_.pull](/Array/pull)，区别是这个方法接收一个要移除值的数组。

::: warning 注意

和[`difference`](/Array/difference)方法不同，该方法会改变原数组。

:::

## 参数

|  参数  | 类型  | 默认值 |     说明     |
| :----: | :---: | :----: | :----------: |
| array  | Array |   -    | 要修改的数组 |
| values | Array |   -    |  要删除的值  |

## 返回

- array(Array): 返回数组

## 例子

```js
var array = [1, 2, 3, 1, 2, 3]

_.pullAll(array, [2, 3])
console.log(array)
// => [1, 1]
```
