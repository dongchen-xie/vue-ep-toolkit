# toPlainObject

::: tip Syntax

\_.toPlainObject(value)

:::

## Description

Converts `value` 为普通对象。 包括继承的可枚举属性。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- Object: ReturnsConverts后的普通对象。

## Examples

```js
function Foo() {
  this.b = 2
}

Foo.prototype.c = 3

_.assign({ a: 1 }, new Foo())
// => { 'a': 1, 'b': 2 }

_.assign({ a: 1 }, _.toPlainObject(new Foo()))
// => { 'a': 1, 'b': 2, 'c': 3 }
```
