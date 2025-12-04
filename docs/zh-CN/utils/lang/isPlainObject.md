# isPlainObject

::: tip 语法

\_.isPlainObject(value)

:::

## 描述

检查 `value` 是否是普通对象。 也就是说该对象由 `Object` 构造函数创建，或者 `[[Prototype]]` 为 `null` 。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个普通对象，返回 `true`，否则 `false`。

## 例子

```js
function Foo() {
  this.a = 1
}

_.isPlainObject(new Foo())
// => false

_.isPlainObject([1, 2, 3])
// => false

_.isPlainObject({ x: 0, y: 0 })
// => true

_.isPlainObject(Object.create(null))
// => true
```
