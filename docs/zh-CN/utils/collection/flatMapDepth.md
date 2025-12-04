# flatMapDepth

::: tip 语法

_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])

:::

## 描述

这个方法类似[`_.flatMap`](/Collection/flatMap) 不同之处在于`_.flatMapDeep` 会根据指定的 depth（递归深度）继续扁平化递归映射结果。

## 参数

|    参数    |                类型                | 默认值 |        说明        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
|  iteratee  | Array / Function / Object / string |   -    |      迭代函数      |
|   depth    |               number               |   1    |    最大递归深度    |

## 返回

- array(Array): 返回新的扁平化数组

## 例子

```js
function duplicate(n) {
  return [[[n, n]]]
}

_.flatMapDepth([1, 2], duplicate, 2)
// => [[1, 1], [2, 2]]
```
