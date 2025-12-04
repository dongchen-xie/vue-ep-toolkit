# flip

::: tip 语法

\_.flip(func)

:::

## 描述

创建一个函数，调用`func`时候接收翻转的参数。

## 参数

| 参数 |   类型   | 默认值 |       说明       |
| :--: | :------: | :----: | :--------------: |
| func | Function |   -    | 要翻转参数的函数 |

## 返回

- Function: 返回新的函数

## 例子

```js
var flipped = _.flip(function () {
  return _.toArray(arguments)
})

flipped("a", "b", "c", "d")
// => ['d', 'c', 'b', 'a']
```
