# eq

::: tip 语法

\_.eq(value, other)

:::

## 描述

执行[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)比较两者的值，来确定它们是否相等。

## 参数

| 参数  | 类型 | 默认值 |       说明       |
| :---: | :--: | :----: | :--------------: |
| value | any  |   -    |    要比较的值    |
| other | any  |   -    | 另一个要比较的值 |

## 返回

- boolean: 如果两个值相等，返回 `true`，否则 `false`。

## 例子

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
