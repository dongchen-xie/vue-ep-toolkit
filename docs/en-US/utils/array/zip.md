# zip

::: tip Syntax

\_.zip([arrays])

:::

## Description

创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

## Parameters

| Parameters  |   Type   | Default |     Description     |
| :---: | :------: | :----: | :----------: |
| array | ...Array |   -    | 要处理的数组 |

## Returns

- array(Array): Returns分组元素的新数组

## Examples

```js
_.zip(["fred", "barney"], [30, 40], [true, false])
// => [['fred', 30, true], ['barney', 40, false]]
```
