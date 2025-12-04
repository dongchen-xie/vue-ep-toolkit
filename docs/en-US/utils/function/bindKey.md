# bindKey

::: tip Syntax

\_.bindKey(object, key, [partials])

:::

## Description

创建一个函数,在 object[key]上通过接收 partials 附加Parameters，调用这个方法。
这个方法与*.bind 的不同之处在于允许重新定义绑定函数即使它还不存在。
`*.bind.placeholder`值默认是以 `\_` 作为附加部分Parameters的占位符。

::: warning Note

不同于原生的 Function 的 bind 方法，这个方法不会设置绑定函数的 "length" 属性。

:::

## Parameters

|   Parameters   |  Type  | Default |         Description         |
| :------: | :----: | :----: | :------------------: |
|  object  | Object |   -    |  需要绑定函数的对象  |
|   key    | string |   -    | 需要绑定函数对象的键 |
| partials | ...any |   -    |    附加的部分Parameters    |

## Returns

- Function: Returns新的绑定函数

## Examples

```js
var object = {
  user: "fred",
  greet: function (greeting, punctuation) {
    return greeting + " " + this.user + punctuation
  }
}

var bound = _.bindKey(object, "greet", "hi")
bound("!")
// => 'hi fred!'

object.greet = function (greeting, punctuation) {
  return greeting + "ya " + this.user + punctuation
}

bound("!")
// => 'hiya fred!'

// Bound with placeholders.
var bound = _.bindKey(object, "greet", _, "!")
bound("hi")
// => 'hiya fred!'
```
