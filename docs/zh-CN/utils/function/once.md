# once

::: tip 语法

\_.once(func)

:::

## 描述

创建一个只能调用 `func` 一次的函数。 重复调用返回第一次调用的结果。 `func` 调用时， `this` 绑定到创建的函数，并传入对应参数。

## 参数

| 参数 |   类型   | 默认值 |       说明       |
| :--: | :------: | :----: | :--------------: |
| func | Function |   -    | 指定的触发的函数 |

## 返回

- Function: 返回新的受限函数

## 例子

```js
var initialize = _.once(createApplication)
initialize()
initialize()
// `initialize` 只能调用 `createApplication` 一次。
```
