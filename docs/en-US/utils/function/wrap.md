# wrap

::: tip Syntax

\_.wrap(value, [wrapper=identity])

:::

## Description

创建一个函数。提供的`value`包装在 `wrapper` 函数的第一个Parameters里。 任何附加的Parameters都提供给 `wrapper` 函数。 被调用时`this`绑定在创建的函数上。

## Parameters

|  Parameters   |   Type   |  Default  |    Description    |
| :-----: | :------: | :------: | :--------: |
|  value  |   any    |    -     | 要包装的值 |
| wrapper | Function | identity |  包装函数  |

## Returns

- Function: Returns新的函数

## Examples

```js
var p = _.wrap(_.escape, function (func, text) {
  return "<p>" + func(text) + "</p>"
})

p("fred, barney, & pebbles")
// => '<p>fred, barney, &amp; pebbles</p>'
```
