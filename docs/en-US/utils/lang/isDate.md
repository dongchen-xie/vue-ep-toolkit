# isDate

::: tip Syntax

\_.isDate(value)

:::

## Description

Checks if `value` 是否是个 `Date` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个日期对象，Returns `true`，否则 `false`。

## Examples

```js
_.isDate(new Date())
// => true

_.isDate("Mon April 23 2012")
// => false
```
