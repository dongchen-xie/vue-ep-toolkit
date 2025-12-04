# reduce

::: tip Syntax

_.reduce(collection, [iteratee=_.identity], [accumulator])

:::

## Description

压缩 collection（集合）为一个值，通过 iteratee（The iteratee function）遍历 collection（集合）中的每个元素，每次Returns的值会作为下一次迭代使用(注：作为 iteratee（The iteratee function）的第一个Parameters使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为The initial value。(注：accumulator Parameters在第一次迭代的时候作为 iteratee（The iteratee function）第一个Parameters使用。) iteratee 调用 4 个Parameters：(accumulator, value, index|key, collection)

## Parameters

|    Parameters     |      Type      | Default |      Description      |
| :---------: | :------------: | :----: | :------------: |
| collection  | Array / Object |   -    | 用来迭代的集合 |
|  iteratee   |    Function    |   -    |    The iteratee function    |
| accumulator |      any       |   -    |     The initial value     |

## Returns

- any: Returns累加后的值

## Examples

```js
_.reduce(
  [1, 2],
  function (sum, n) {
    return sum + n
  },
  0
)
// => 3

_.reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    ;(result[value] || (result[value] = [])).push(key)
    return result
  },
  {}
)
// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
```
