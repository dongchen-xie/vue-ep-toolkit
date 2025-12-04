# isEqual

::: tip 语法

\_.isEqual(value)

:::

## 描述

执行深比较来确定两者的值是否相等。

::: warning 注意

这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. `Object` 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和 DOM 节点比较。

:::

## 参数

| 参数  | 类型 | 默认值 |        说明        |
| :---: | :--: | :----: | :----------------: |
| value | any  |   -    |    用来比较的值    |
| other | any  |   -    | 另一个用来比较的值 |

## 返回

- boolean: 如果两个值完全相同，返回 `true`，否则 `false`。

## 例子

```js
var object = { a: 1 }
var other = { a: 1 }

_.isEqual(object, other)
// => true

object === other
// => false
```
