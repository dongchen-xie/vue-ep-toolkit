# isEqualWith

::: tip Syntax

\_.isEqualWith(value)

:::

## Description

这个方法类似`_.isEqual`。 除了它接受一个 `customizer` 用来定制比较值。 如果 `customizer` Returns `undefined` 将会比较处理方法代替。 `customizer` 会传入 6 个Parameters：(objValue, othValue [, index|key, object, other, stack])

## Parameters

|     Parameters     |   Type   | Default |         Description         |
| :----------: | :------: | :----: | :------------------: |
|    value     |   any    |   -    |     用来比较的值     |
|    other     |   any    |   -    |  另一个用来比较的值  |
| [customizer] | Function |   -    | 用来定制比较值的函数 |

## Returns

- boolean: 如果两个值完全相同，Returns `true`，否则 `false`。

## Examples

```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value)
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true
  }
}

var array = ["hello", "goodbye"]
var other = ["hi", "goodbye"]

_.isEqualWith(array, other, customizer)
// => true
```
