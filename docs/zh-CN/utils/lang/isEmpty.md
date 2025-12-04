# isEmpty

::: tip 语法

\_.isEmpty(value)

:::

## 描述

检查 `value` 是否为一个空对象，集合，映射或者 set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类 jquery 选择器。

对象如果被认为为空，那么他们没有自己的可枚举属性的对象。

类数组值，比如`arguments`对象，array，buffer，string 或者类 jQuery 集合的 `length` 为 `0`，被认为是空。类似的，map（映射）和 set 的 `size` 为 `0`，被认为是空。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`为空，返回 `true`，否则 `false`。

## 例子

```js
_.isEmpty(null)
// => true

_.isEmpty(true)
// => true

_.isEmpty(1)
// => true

_.isEmpty([1, 2, 3])
// => false

_.isEmpty({ a: 1 })
// => false
```
