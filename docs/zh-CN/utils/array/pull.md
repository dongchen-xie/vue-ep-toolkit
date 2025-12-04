# pull

::: tip 语法

\_.pull(array, [values])

:::

## 描述

移除数组 array 中所有和给定值相等的元素，使用 [`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero) 进行全等比较。

::: warning 注意

和[`without`](/Array/without)方法不同，该方法会改变原数组。使用[`_.remove`](/Array/remove)从一个数组中移除元素。

:::

## 参数

|  参数  | 类型  | 默认值 |     说明     |
| :----: | :---: | :----: | :----------: |
| array  | Array |   -    | 要修改的数组 |
| values |  any  |   -    |  要删除的值  |

## 返回

- array(Array): 返回数组

## 例子

```js
var array = [1, 2, 3, 1, 2, 3]

_.pull(array, 2, 3)
console.log(array)
// => [1, 1]
```
