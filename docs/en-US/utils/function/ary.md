# ary

::: tip Syntax

\_.ary(func, [n=func.length])

:::

## Description

创建一个调用 func 的函数。调用 func 时最多接受 n 个Parameters，忽略多出的Parameters。

## Parameters

| Parameters |   Type   |   Default    |           Description           |
| :--: | :------: | :---------: | :----------------------: |
| func | Function |      -      | 需要被限制Parameters个数的函数 |
|  n   |  number  | func.length |      限制的Parameters数量      |

## Returns

- Function: Returns新的覆盖函数

## Examples

```js
_.map(["6", "8", "10"], _.ary(parseInt, 1))
// => [6, 8, 10]
```
