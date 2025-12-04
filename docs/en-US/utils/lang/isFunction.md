# isFunction

::: tip Syntax

\_.isFunction(value)

:::

## Description

Checks if `value` 是否是 `Function` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个函数，Returns `true`，否则 `false`。

## Examples

```js
_.isFunction(_)
// => true

_.isFunction(/abc/)
// => false
```
