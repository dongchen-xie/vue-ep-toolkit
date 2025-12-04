# toPlainObject

::: tip 语法

\_.toPlainObject(value)

:::

## 描述

转换 `value` 为普通对象。 包括继承的可枚举属性。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- Object: 返回转换后的普通对象。

## 例子

```js
function Foo() {
  this.b = 2
}

Foo.prototype.c = 3

_.assign({ a: 1 }, new Foo())
// => { 'a': 1, 'b': 2 }

_.assign({ a: 1 }, _.toPlainObject(new Foo()))
// => { 'a': 1, 'b': 2, 'c': 3 }
```
