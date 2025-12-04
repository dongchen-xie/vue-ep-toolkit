# zipObjectDeep

::: tip 语法

\_.zipObjectDeep([props=[]], [values=[]])

:::

## 描述

这个方法类似[`_.zipObject`](/Array/zipObject)，除了它支持属性路径。

## 参数

|  参数  | 类型  | 默认值 |    说明    |
| :----: | :---: | :----: | :--------: |
| props  | Array |   []   | 属性标识符 |
| values | Array |   []   |   属性值   |

## 返回

- object(Object): 返回新的对象

## 例子

```js
_.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2])
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```
