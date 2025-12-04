# isError

::: tip Syntax

\_.isError(value)

:::

## Description

Checks if `value` 是否是 `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, 或者 `URIError` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个错误（Error）对象，Returns `true`，否则 `false`。

## Examples

```js
_.isError(new Error())
// => true

_.isError(Error)
// => false
```
