# map

::: tip 语法

_.map(collection, [iteratee=_.identity])

:::

## 描述

创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用 3 个参数：
(value, index|key, collection).

lodash 中有许多方法是防止作为其他方法的迭代函数，例如：[`_.every`](/Collection/every),[`_.filter`](/Collection/filter),[`_.map`](/Collection/map),_[`.mapValues`](/Object/mapValues),[`_.reject`](/Collection/reject), 和[`\_.some`](/Collection/some)

不能使用上述方法作为迭代函数参数的方法有： `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`, `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`, `words`

## 参数

|    参数    |                 类型                 | 默认值 |      说明      |
| :--------: | :----------------------------------: | :----: | :------------: |
| collection |            Array / Object            |   -    | 用来迭代的集合 |
|  iteratee  | Array / Function / / Object / string |   -    |    迭代函数    |

## 返回

- Array: 返回新的映射后数组

## 例子

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
