# delay

::: tip Syntax

\_.delay(func, wait, [args])

:::

## Description

延迟 `wait` 毫秒后调用 `func`。 调用时，任何附加的Parameters会传给`func`。

## Parameters

|  Parameters  |   Type   | Default |             Description             |
| :----: | :------: | :----: | :--------------------------: |
|  func  | Function |   -    |         The function to delay         |
|  wait  |  number  |   -    |         延迟的毫秒数         |
| [args] |   any    |   -    | 会在调用时传给 `func` 的Parameters |

## Returns

- number: Returns计时器 id

## Examples

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
