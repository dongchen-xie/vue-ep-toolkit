# bindKey

::: tip 语法

\_.bindKey(object, key, [partials])

:::

## 描述

创建一个函数,在 object[key]上通过接收 partials 附加参数，调用这个方法。
这个方法与*.bind 的不同之处在于允许重新定义绑定函数即使它还不存在。
`*.bind.placeholder`值默认是以 `\_` 作为附加部分参数的占位符。

::: warning 注意

不同于原生的 Function 的 bind 方法，这个方法不会设置绑定函数的 "length" 属性。

:::

## 参数

|   参数   |  类型  | 默认值 |         说明         |
| :------: | :----: | :----: | :------------------: |
|  object  | Object |   -    |  需要绑定函数的对象  |
|   key    | string |   -    | 需要绑定函数对象的键 |
| partials | ...any |   -    |    附加的部分参数    |

## 返回

- Function: 返回新的绑定函数

## 例子

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
