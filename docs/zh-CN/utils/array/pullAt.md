# pullAt

::: tip 语法

\_.pullAt(array, [indexes])

:::

## 描述

根据索引 indexes，移除 array 中对应的元素，并返回被移除元素的数组。

::: warning 注意

<!-- TODO Object/at -->
<!-- 和[`_.at`](/Object/at)方法不同，该方法会改变原数组。 -->

和`_.at`方法不同，该方法会改变原数组。

:::

## 参数

|  参数   |       类型        | 默认值 |       说明       |
| :-----: | :---------------: | :----: | :--------------: |
|  array  |       Array       |   -    |   要修改的数组   |
| indexes | number / number[] |   -    | 要移除元素的索引 |

## 返回

- array(Array): 返回移除元素组成的新数组

## 例子

```js
var array = [5, 10, 15, 20]
var evens = _.pullAt(array, 1, 3)

console.log(array)
// => [5, 15]

console.log(evens)
// => [10, 20]
```
