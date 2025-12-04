# defer

::: tip 语法

\_.defer(func, [args])

:::

## 描述

推迟调用`func`，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给`func`。

## 参数

|  参数  |   类型   | 默认值 |             说明             |
| :----: | :------: | :----: | :--------------------------: |
|  func  | Function |   -    |         要延迟的函数         |
| [args] |   any    |   -    | 会在调用时传给 `func` 的参数 |

## 返回

- number: 返回计时器 id

## 例子

```js
_.defer(function (text) {
  console.log(text)
}, "deferred")
// => 一毫秒或更久一些输出 'deferred'。
```
