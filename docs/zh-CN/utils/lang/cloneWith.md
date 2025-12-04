# cloneWith

::: tip 语法

\_.cloneDeepWith(value, [customizer])

:::

## 描述

这个方法类似[`_.clone`](/Lang/clone)，除了它接受一个`customizer`定制返回的克隆值。 如果`customizer`返回 undefined 将会使用拷贝方法代替处理。 `customizer` 调用 4 个参数：(value [, index|key, object, stack])。

## 参数

|     参数     |   类型   | 默认值 |         说明         |
| :----------: | :------: | :----: | :------------------: |
|    value     |   any    |   -    |     要深拷贝的值     |
| [customizer] | Function |   -    | 用来自定义克隆的函数 |

## 返回

- any: 返回拷贝后的值

## 例子

```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false)
  }
}

var el = _.cloneWith(document.body, customizer)

console.log(el === document.body)
// => false
console.log(el.nodeName)
// => 'BODY'
console.log(el.childNodes.length)
// => 0
```
