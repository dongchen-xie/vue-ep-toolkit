# isMatchWith

::: tip Syntax

\_.isMatchWith(value)

:::

## Description

这个方法类似`_.isMatch`。 除了它接受一个 `customizer` 定制比较的值。 如果 `customizer` Returns `undefined` 将会比较处理方法代替。 `customizer` 会传入 5 个Parameters：(objValue, srcValue, index|key, object, source)。

## Parameters

|     Parameters     |   Type   | Default |         Description         |
| :----------: | :------: | :----: | :------------------: |
|    object    |  Object  |   -    |     要Checks if的对象     |
|    source    |  Object  |   -    |  属性值相匹配的对象  |
| [customizer] | Function |   -    | 这个函数用来定制比较 |

## Returns

- boolean: 如果 `object` 匹配，Returns `true`，否则 `false`。

## Examples

```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value)
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true
  }
}

var object = { greeting: "hello" }
var source = { greeting: "hi" }

_.isMatchWith(object, source, customizer)
// => true
```
