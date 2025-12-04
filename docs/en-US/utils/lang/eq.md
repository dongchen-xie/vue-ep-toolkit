# eq

::: tip Syntax

\_.eq(value, other)

:::

## Description

执行[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)比较两者的值，来确定它们是否相等。

## Parameters

| Parameters  | Type | Default |       Description       |
| :---: | :--: | :----: | :--------------: |
| value | any  |   -    |    The value to compare    |
| other | any  |   -    | 另一个The value to compare |

## Returns

- boolean: 如果两个值相等，Returns `true`，否则 `false`。

## Examples

```js
var object = { a: 1 }
var other = { a: 1 }

_.eq(object, object)
// => true

_.eq(object, other)
// => false

_.eq("a", "a")
// => true

_.eq("a", Object("a"))
// => false

_.eq(NaN, NaN)
// => true
```
