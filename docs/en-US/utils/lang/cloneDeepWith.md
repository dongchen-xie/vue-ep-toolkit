# cloneDeepWith

::: tip Syntax

\_.cloneDeepWith(value, [customizer])

:::

## Description

这个方法类似[`_.cloneWith`](/Lang/cloneWith)，除了它会递归拷贝 `value`。

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
