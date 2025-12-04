# isRegExp

::: tip 语法

\_.isRegExp(value)

:::

## 描述

检查 `value` 是否为 `RegExp` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个正则表达式，返回 `true`，否则 `false`。

## 例子

```js
_.isRegExp(/abc/)
// => true

_.isRegExp("/abc/")
// => false
```
