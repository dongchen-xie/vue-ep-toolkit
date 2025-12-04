# isNaN

::: tip Syntax

\_.isNaN(value)

:::

## Description

Checks if `value` 是否是 `NaN`。

::: warning Note

这个方法基于 [Number.isNaN](https://mdn.io/Number/isNaN)，和全局的 `isNaN` 不同之处在于，全局的 `isNaN` 对于 `undefined` 和其他非数字的值Returns `true`。

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 是一个 `NaN`，Returns `true`，否则 `false`。

## Examples

```js
_.isNaN(NaN)
// => true

_.isNaN(new Number(NaN))
// => true

isNaN(undefined)
// => true

_.isNaN(undefined)
// => false
```
