# delay

::: tip 语法

\_.delay(func, wait, [args])

:::

## 描述

延迟 `wait` 毫秒后调用 `func`。 调用时，任何附加的参数会传给`func`。

## 参数

|  参数  |   类型   | 默认值 |             说明             |
| :----: | :------: | :----: | :--------------------------: |
|  func  | Function |   -    |         要延迟的函数         |
|  wait  |  number  |   -    |         延迟的毫秒数         |
| [args] |   any    |   -    | 会在调用时传给 `func` 的参数 |

## 返回

- number: 返回计时器 id

## 例子

```js
_.delay(
  function (text) {
    console.log(text)
  },
  1000,
  "later"
)
// => 一秒后输出 'later'。
```
