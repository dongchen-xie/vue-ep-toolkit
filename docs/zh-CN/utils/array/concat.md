# concat

::: tip 语法

\_.concat(array, [values])

:::

## 描述

创建一个新数组，将 `array` 与任何数组或值连接在一起。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 被连接的数组 |

## 返回

- array (Array): 连接后的新数组。

## 例子

```js
var array = [1]
var other = _.concat(array, 2, [3], [[4]])

console.log(other)
// => [1, 2, 3, [4]]

console.log(array)
// => [1]
```
