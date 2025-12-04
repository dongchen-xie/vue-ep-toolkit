# map

::: tip Syntax

_.map(collection, [iteratee=_.identity])

:::

## Description

创建一个数组， value（值） 是 iteratee（The iteratee function）遍历 collection（集合）中的每个元素后Returns的结果。 iteratee（The iteratee function）调用 3 个Parameters：
(value, index|key, collection).

lodash 中有许多方法是防止作为其他方法的The iteratee function，例如：[`_.every`](/Collection/every),[`_.filter`](/Collection/filter),[`_.map`](/Collection/map),_[`.mapValues`](/Object/mapValues),[`_.reject`](/Collection/reject), 和[`\_.some`](/Collection/some)

不能使用上述方法作为The iteratee functionParameters的方法有： `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`, `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`, `words`

## Parameters

|    Parameters    |                 Type                 | Default |      Description      |
| :--------: | :----------------------------------: | :----: | :------------: |
| collection |            Array / Object            |   -    | 用来迭代的集合 |
|  iteratee  | Array / Function / / Object / string |   -    |    The iteratee function    |

## Returns

- Array: Returns新的映射后数组

## Examples

```js
function square(n) {
  return n * n
}

_.map([4, 8], square)
// => [16, 64]

_.map({ a: 4, b: 8 }, square)
// => [16, 64] (iteration order is not guaranteed)

var users = [{ user: "barney" }, { user: "fred" }]

// The `_.property` iteratee shorthand.
_.map(users, "user")
// => ['barney', 'fred']
```
