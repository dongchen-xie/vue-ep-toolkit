# defer

::: tip Syntax

\_.defer(func, [args])

:::

## Description

推迟调用`func`，直到当前堆栈清理完毕。 调用时，任何附加的Parameters会传给`func`。

## Parameters

|  Parameters  |   Type   | Default |             Description             |
| :----: | :------: | :----: | :--------------------------: |
|  func  | Function |   -    |         The function to delay         |
| [args] |   any    |   -    | 会在调用时传给 `func` 的Parameters |

## Returns

- number: Returns计时器 id

## Examples

```js
_.defer(function (text) {
  console.log(text)
}, "deferred")
// => 一毫秒或更久一些输出 'deferred'。
```
