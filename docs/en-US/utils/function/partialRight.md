# partialRight

::: tip Syntax

\_.partialRight(func, [partials])

:::

## Description

这个函数类似[`_.partial`](/Function/partial)，除了预设Parameters被附加到接受Parameters的后面。

这个 `_.partialRight.placeholder` 的值，默认是以 `_` 作为附加部分Parameters的占位符。

::: warning Note

这个方法不会设置 "length" 到函数上。

:::

## Parameters

|   Parameters   |   Type   | Default |      Description      |
| :------: | :------: | :----: | :------------: |
|   func   | Function |   -    | 需要预设的函数 |
| partials |  ...any  |   -    |   预设的Parameters   |

## Returns

- Function: Returns预设Parameters的函数

## Examples

```js
var greet = function (greeting, name) {
  return greeting + " " + name
}

var greetFred = _.partialRight(greet, "fred")
greetFred("hi")
// => 'hi fred'

// 使用了占位符。
var sayHelloTo = _.partialRight(greet, "hello", _)
sayHelloTo("fred")
// => 'hello fred'
```
