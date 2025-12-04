# conformsTo

::: tip Syntax

\_.conformsTo(object, source)

:::

## Description

通过调用断言`source`的属性与`object`的相应属性值，Checks if`object`是否符合`source`。当`source`偏应用时，这种方法和[`_.conforms`](/Utils/conforms)函数是等价的。

::: warning Note

当`source`为偏应用时，这种方法等价于[`_.conforms`](/Utils/conforms)
参考[偏函数与偏应用函数](https://blog.csdn.net/yuanguangyu1221/article/details/71307664)

:::

## Parameters

|  Parameters  |  Type  | Default |           Description           |
| :----: | :----: | :----: | :----------------------: |
| object | Object |   -    |       要Checks if的对象       |
| source | Object |   -    | 要断言属性是否符合的对象 |

## Returns

- boolean: 如果 `object` 符合，Returns `true`，否则 `false`。

## Examples

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
