# reduceRight

::: tip Syntax

_.reduceRight(collection, [iteratee=_.identity], [accumulator])

:::

## Description

这个方法类似[`_.reduce`](/Collection/reduce)，除了它是从右到左遍历 collection（集合）中的元素的。

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
var array = [
  [0, 1],
  [2, 3],
  [4, 5]
]

_.reduceRight(
  array,
  function (flattened, other) {
    return flattened.concat(other)
  },
  []
)
// => [4, 5, 2, 3, 0, 1]
```
