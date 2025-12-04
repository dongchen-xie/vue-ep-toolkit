# isError

::: tip 语法

\_.isError(value)

:::

## 描述

检查 `value` 是否是 `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, 或者 `URIError` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个错误（Error）对象，返回 `true`，否则 `false`。

## 例子

```js
_.isError(new Error())
// => true

_.isError(Error)
// => false
```
