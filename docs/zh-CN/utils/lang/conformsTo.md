# conformsTo

::: tip 语法

\_.conformsTo(object, source)

:::

## 描述

通过调用断言`source`的属性与`object`的相应属性值，检查`object`是否符合`source`。当`source`偏应用时，这种方法和[`_.conforms`](/Utils/conforms)函数是等价的。

::: warning 注意

当`source`为偏应用时，这种方法等价于[`_.conforms`](/Utils/conforms)
参考[偏函数与偏应用函数](https://blog.csdn.net/yuanguangyu1221/article/details/71307664)

:::

## 参数

|  参数  |  类型  | 默认值 |           说明           |
| :----: | :----: | :----: | :----------------------: |
| object | Object |   -    |       要检查的对象       |
| source | Object |   -    | 要断言属性是否符合的对象 |

## 返回

- boolean: 如果 `object` 符合，返回 `true`，否则 `false`。

## 例子

```js
var object = { a: 1, b: 2 }

_.conformsTo(object, {
  b: function (n) {
    return n > 1
  }
})
// => true

_.conformsTo(object, {
  b: function (n) {
    return n > 2
  }
})
// => false
```
