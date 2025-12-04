# overArgs

::: tip 语法

_.overArgs(func, [transforms=[_.identity]])

:::

## 描述

创建一个函数，调用`func`时参数为相对应的`transforms`的返回。

## 参数

| 参数 |   类型   | 默认值 |     说明     |
| :--: | :------: | :----: | :----------: |
| func | Function |   -    | 要包裹的函数 |

## 返回

- Function: 返回新函数

## 例子

```js
function doubled(n) {
  return n * 2
}

function square(n) {
  return n * n
}

var func = _.overArgs(
  function (x, y) {
    return [x, y]
  },
  [square, doubled]
)

func(9, 3)
// => [81, 6]

func(10, 5)
// => [100, 10]
```
