# zipObject

::: tip Syntax

\_.zipObject([props=[]], [values=[]])

:::

## Description

这个方法类似[`_.fromPairs`](/Array/fromPairs)，除了它接受 2 个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。

## Parameters

|  Parameters  | Type  | Default |    Description    |
| :----: | :---: | :----: | :--------: |
| props  | Array |   []   | 属性标识符 |
| values | Array |   []   |   属性值   |

## Returns

- object(Object): Returns新的对象

## Examples

```js
_.zipObject(["a", "b"], [1, 2])
// => { 'a': 1, 'b': 2 }
```
