# isPlainObject

::: tip Syntax

\_.isPlainObject(value)

:::

## Description

Checks if `value` 是否是普通对象。 也就是说该对象由 `Object` 构造函数创建，或者 `[[Prototype]]` 为 `null` 。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个普通对象，Returns `true`，否则 `false`。

## Examples

```js
function Foo() {
  this.a = 1
}

_.isPlainObject(new Foo())
// => false

_.isPlainObject([1, 2, 3])
// => false

_.isPlainObject({ x: 0, y: 0 })
// => true

_.isPlainObject(Object.create(null))
// => true
```
