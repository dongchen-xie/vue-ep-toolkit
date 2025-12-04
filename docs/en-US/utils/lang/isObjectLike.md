# isObjectLike

::: tip Syntax

\_.isObjectLike(value)

:::

## Description

Checks if `value` 是否是 类对象。 如果一个值是类对象，那么它不应该是 `null`，而且 `typeof` 后的结果是 "object"。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个类对象，Returns `true`，否则 `false`。

## Examples

```js
_.isObjectLike({})
// => true

_.isObjectLike([1, 2, 3])
// => true

_.isObjectLike(_.noop)
// => false

_.isObjectLike(null)
// => false
```
