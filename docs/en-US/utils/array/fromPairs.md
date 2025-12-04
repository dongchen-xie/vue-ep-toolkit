# fromPairs

::: tip Syntax

\_.fromPairs(pairs)

:::

## Description

<!-- TODO toPairs -->
<!-- 与 [`_.toPairs`](/Object/toPairs) 正好相反；这个方法Returns一个由键值对pairs构成的对象。 -->

与 `_.toPairs` 正好相反；这个方法Returns一个由The key-value pairs 构成的对象。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | The key-value pairs |

## Returns

- object(Object): Returns一个新对象

## Examples

```js
_.fromPairs([
  ["a", 1],
  ["b", 2]
])
// => { 'a': 1, 'b': 2 }
```
