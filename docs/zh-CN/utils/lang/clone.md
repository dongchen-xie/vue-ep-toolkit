# clone

::: tip 语法

\_.clone(value)

:::

## 描述

创建一个 `value` 的浅拷贝。

::: warning 注意

这个方法参考自[structured clone algorithm](https://mdn.io/Structured_clone_algorithm) 以及支持 `arrays`、`array buffers`、 `booleans`、 `date objects`、`maps`、 `numbers`， `Object` 对象, `regexes`, `sets`, `strings`, `symbols`, 以及 `typed arrays`。 `arguments`对象的可枚举属性会拷贝为普通对象。 一些不可拷贝的对象，例如`error objects`、`functions`, `DOM nodes`, 以及 `WeakMaps` 会返回空对象。

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要拷贝的值 |

## 返回

- any: 返回拷贝后的值

## 例子

```js
var objects = [{ a: 1 }, { b: 2 }]

var shallow = _.clone(objects)
console.log(shallow[0] === objects[0])
// => true
```
