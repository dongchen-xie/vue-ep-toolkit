# reduceRight

::: tip 语法

_.reduceRight(collection, [iteratee=_.identity], [accumulator])

:::

## 描述

这个方法类似[`_.reduce`](/Collection/reduce)，除了它是从右到左遍历 collection（集合）中的元素的。

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
