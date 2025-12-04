# differenceWith

::: tip 语法

\_.differenceWith(array, [values], [comparator])

:::

## 描述

这个方法类似 `_.difference` ，除了它接受一个 comparator （注：比较器），它调用比较 array，values 中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。

## 参数

|     参数     |   类型   | 默认值 |      说明      |
| :----------: | :------: | :----: | :------------: |
|    array     |  Array   |   -    | 需要处理的数组 |
|   [values]   | ...Array |   -    |   要排除的值   |
| [comparator] | Function |   -    |     比较器     |

## 返回

- array (Array): 返回一个过滤值后的新数组。

## 例子

```js
/**
 * objects为需要处理的数组， [{ 'x': 1, 'y': 2 }] 为需要排除的值，_.isEqual为比较器
 * 意为迭代比较 objects中的每个值，返回除了等于 [{ 'x': 1, 'y': 2 }] 的其他值
 * 及 [{ 'x': 2, 'y': 1 }]
 */
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 }
]

_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual)
// => [{ 'x': 2, 'y': 1 }]
```
