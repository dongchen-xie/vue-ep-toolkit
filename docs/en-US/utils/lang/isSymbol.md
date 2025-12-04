# isSymbol

::: tip Syntax

\_.isSymbol(value)

:::

## Description

Checks if `value` 是否是原始 `Symbol` 或者对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个 symbol，Returns `true`，否则 `false`。

## Examples

```js
_.isSymbol(Symbol.iterator)
// => true

_.isSymbol("abc")
// => false
```
