# zipObject

::: tip 语法

\_.zipObject([props=[]], [values=[]])

:::

## 描述

这个方法类似[`_.fromPairs`](/Array/fromPairs)，除了它接受 2 个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。

## 参数

|  参数  | 类型  | 默认值 |    说明    |
| :----: | :---: | :----: | :--------: |
| props  | Array |   []   | 属性标识符 |
| values | Array |   []   |   属性值   |

## 返回

- object(Object): 返回新的对象

## 例子

```js
_.zipObject(["a", "b"], [1, 2])
// => { 'a': 1, 'b': 2 }
```
