# intersection

::: tip Syntax

\_.intersection([arrays])

:::

## Description

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)进行相等性比较。

## Parameters

| Parameters  |   Type   | Default |     Description     |
| :---: | :------: | :----: | :----------: |
| array | ...Array |   -    | The arrays to inspect |

## Returns

- array(Array): Returns一个包含所有传入数组交集元素的新数组

## Examples

```js
_.intersection([2, 1], [4, 2], [1, 2])
// => [2]
```
