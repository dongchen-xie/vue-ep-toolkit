# reverse

::: tip 语法

\_.reverse(array)

:::

## 描述

反转 array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。

::: warning 注意

该方法会改变原数组。

:::

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要修改的数组 |

## 返回

- array(Array): 返回数组

## 例子

```js
var array = [1, 2, 3]

_.reverse(array)
// => [3, 2, 1]

console.log(array)
// => [3, 2, 1]
```
