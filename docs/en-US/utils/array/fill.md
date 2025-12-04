# fill

::: tip Syntax

\_.fill(array, value, [start=0], [end=array.length])

:::

## Description

从给定的The start position填充给定的值（包含The start position，不包含The end position）

::: warning Note

This method mutates array

:::

## Parameters

| Parameters  |  Type  |    Default    |      Description      |
| :---: | :----: | :----------: | :------------: |
| array | Array  |      -       | The array to fill |
| value |  any   |      -       |    The value to fill    |
| start | number |      0       |    The start position    |
|  end  | number | array.length |    The end position    |

## Returns

- array (Array): Returns填充后的数组

## Examples

```js
var array = [1, 2, 3]

_.fill(array, "a")
// => ['a', 'a', 'a']

_.fill(Array(3), 2)
// => [2, 2, 2]

_.fill([4, 6, 8, 10], "*", 1, 3)
// => [4, '*', '*', 10]
```
