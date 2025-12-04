# cloneWith

::: tip Syntax

\_.cloneDeepWith(value, [customizer])

:::

## Description

这个方法类似[`_.clone`](/Lang/clone)，除了它接受一个`customizer`定制Returns的克隆值。 如果`customizer`Returns undefined 将会使用拷贝方法代替处理。 `customizer` 调用 4 个Parameters：(value [, index|key, object, stack])。

## Parameters

|     Parameters     |   Type   | Default |         Description         |
| :----------: | :------: | :----: | :------------------: |
|    value     |   any    |   -    |     要深拷贝的值     |
| [customizer] | Function |   -    | 用来自定义克隆的函数 |

## Returns

- any: Returns拷贝后的值

## Examples

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
