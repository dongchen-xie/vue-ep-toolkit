# isFinite

::: tip Syntax

\_.isFinite(value)

:::

## Description

Checks if `value` 是否是原始有限数值。

::: warning Note

这个方法基于 [Number.isFinite](https://mdn.io/Number/isFinite).

:::

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
