# zipObjectDeep

::: tip Syntax

\_.zipObjectDeep([props=[]], [values=[]])

:::

## Description

这个方法类似[`_.zipObject`](/Array/zipObject)，除了它支持属性路径。

## Parameters

|  Parameters  | Type  | Default |    Description    |
| :----: | :---: | :----: | :--------: |
| props  | Array |   []   | 属性标识符 |
| values | Array |   []   |   属性值   |

## Returns

- object(Object): Returns新的对象

## Examples

```js
_.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2])
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```
