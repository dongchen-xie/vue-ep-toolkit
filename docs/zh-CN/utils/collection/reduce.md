# reduce

::: tip 语法

_.reduce(collection, [iteratee=_.identity], [accumulator])

:::

## 描述

压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(注：作为 iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(注：accumulator 参数在第一次迭代的时候作为 iteratee（迭代函数）第一个参数使用。) iteratee 调用 4 个参数：(accumulator, value, index|key, collection)

## 参数

|    参数     |      类型      | 默认值 |      说明      |
| :---------: | :------------: | :----: | :------------: |
| collection  | Array / Object |   -    | 用来迭代的集合 |
|  iteratee   |    Function    |   -    |    迭代函数    |
| accumulator |      any       |   -    |     初始值     |

## 返回

- any: 返回累加后的值

## 例子

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
