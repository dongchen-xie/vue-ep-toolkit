# cloneDeepWith

::: tip 语法

\_.cloneDeepWith(value, [customizer])

:::

## 描述

这个方法类似[`_.cloneWith`](/Lang/cloneWith)，除了它会递归拷贝 `value`。

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
    return value.cloneNode(true)
  }
}

var el = _.cloneDeepWith(document.body, customizer)

console.log(el === document.body)
// => false
console.log(el.nodeName)
// => 'BODY'
console.log(el.childNodes.length)
// => 20
```
