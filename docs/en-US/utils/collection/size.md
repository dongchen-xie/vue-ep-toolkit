# size

::: tip Syntax

\_.size(collection)

:::

## Description

Returns collection（集合）的长度，如果集合是类数组或字符串，Returns其 length ；如果集合是对象，Returns其可枚举属性的个数。

## Parameters

|    Parameters    |      Type      | Default |     Description     |
| :--------: | :------------: | :----: | :----------: |
| collection | Array / Object |   -    | The collection to inspect |

## Returns

- number: Returns集合的长度

## Examples

```js
_.size([1, 2, 3])
// => 3

_.size({ a: 1, b: 2 })
// => 2

_.size("pebbles")
// => 7
```
