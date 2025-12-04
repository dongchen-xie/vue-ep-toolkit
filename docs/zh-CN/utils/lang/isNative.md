# isNative

::: tip 语法

\_.isNative(value)

:::

## 描述

检查 `value` 是否是一个原生函数。

::: warning 注意

这种方法不能可靠地检测在 core-js 包中存在的本地函数，因为 core-js 规避这种检测。尽管有多个请求，core-js 维护者已经明确表态：任何试图修复检测将受阻。这样一来，我们别无选择，只能抛出一个错误。不幸的是，这也影响其他的包，比如依赖于 core-js 的 [babel-polyfill](https://www.npmjs.com/package/babel-polyfill)。

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 是一个 原生函数，返回 `true`，否则 `false`。

## 例子

```js
_.isNative(Array.prototype.push)
// => true

_.isNative(_)
// => false
```
