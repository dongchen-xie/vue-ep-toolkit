# isEqualWith

::: tip 语法

\_.isEqualWith(value)

:::

## 描述

这个方法类似`_.isEqual`。 除了它接受一个 `customizer` 用来定制比较值。 如果 `customizer` 返回 `undefined` 将会比较处理方法代替。 `customizer` 会传入 6 个参数：(objValue, othValue [, index|key, object, other, stack])

## 参数

|     参数     |   类型   | 默认值 |         说明         |
| :----------: | :------: | :----: | :------------------: |
|    value     |   any    |   -    |     用来比较的值     |
|    other     |   any    |   -    |  另一个用来比较的值  |
| [customizer] | Function |   -    | 用来定制比较值的函数 |

## 返回

- boolean: 如果两个值完全相同，返回 `true`，否则 `false`。

## 例子

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
