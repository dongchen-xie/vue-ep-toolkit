# isLength

::: tip Syntax

\_.isLength(value)

:::

## Description

Checks if `value` 是否为有效的类数组长度。

::: warning Note

这个方法基于 [ToLength](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

:::

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个有效长度，Returns `true`，否则 `false`。

## Examples

```js
_.isLength(3)
// => true

_.isLength(Number.MIN_VALUE)
// => false

_.isLength(Infinity)
// => false

_.isLength("3")
// => false
```
