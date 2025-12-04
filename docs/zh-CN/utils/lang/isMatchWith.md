# isMatchWith

::: tip 语法

\_.isMatchWith(value)

:::

## 描述

这个方法类似`_.isMatch`。 除了它接受一个 `customizer` 定制比较的值。 如果 `customizer` 返回 `undefined` 将会比较处理方法代替。 `customizer` 会传入 5 个参数：(objValue, srcValue, index|key, object, source)。

## 参数

|     参数     |   类型   | 默认值 |         说明         |
| :----------: | :------: | :----: | :------------------: |
|    object    |  Object  |   -    |     要检查的对象     |
|    source    |  Object  |   -    |  属性值相匹配的对象  |
| [customizer] | Function |   -    | 这个函数用来定制比较 |

## 返回

- boolean: 如果 `object` 匹配，返回 `true`，否则 `false`。

## 例子

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
