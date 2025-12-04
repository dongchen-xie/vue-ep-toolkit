# isObject

::: tip Syntax

\_.isObject(value)

:::

## Description

Checks if `value` 是否为 `Object` 的 language type。 (例如： arrays, functions, objects, regexes,`new Number(0)`, 以及 `new String('')`)

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个对象，Returns `true`，否则 `false`。

## Examples

```js
_.isObject({})
// => true

_.isObject([1, 2, 3])
// => true

_.isObject(_.noop)
// => true

_.isObject(null)
// => false
```
