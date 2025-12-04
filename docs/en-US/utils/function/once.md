# once

::: tip Syntax

\_.once(func)

:::

## Description

创建一个只能调用 `func` 一次的函数。 重复调用Returns第一次调用的结果。 `func` 调用时， `this` 绑定到创建的函数，并传入对应Parameters。

## Parameters

| Parameters |   Type   | Default |       Description       |
| :--: | :------: | :----: | :--------------: |
| func | Function |   -    | 指定的触发的函数 |

## Returns

- Function: Returns新的受限函数

## Examples

```js
var initialize = _.once(createApplication)
initialize()
initialize()
// `initialize` 只能调用 `createApplication` 一次。
```
