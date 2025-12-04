# sortedUniq

::: tip Syntax

\_.sortedUniq(array)

:::

## Description

这个方法类似[`_.uniq`](/Array/uniq)，除了它会优化排序数组。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## Returns

- array(Array): Returns一个新的不重复的数组

## Examples

```js
_.sortedUniq([1, 1, 2])
// => [1, 2]
```
