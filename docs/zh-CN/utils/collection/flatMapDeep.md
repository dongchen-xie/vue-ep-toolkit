# flatMapDeep

::: tip 语法

_.flatMapDeep(collection, [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.flatMap`](/Collection/flatMap) 不同之处在于`_.flatMapDeep` 会继续扁平化递归映射的结果。

## 参数

|    参数    |                类型                | 默认值 |        说明        |
| :--------: | :--------------------------------: | :----: | :----------------: |
| collection |           Array / Object           |   -    | 一个用来迭代的集合 |
|  iteratee  | Array / Function / Object / string |   -    |      迭代函数      |

## 返回

- array(Array): 返回新的扁平化数组

## 例子

```js
function duplicate(n) {
  return [[[n, n]]]
}

_.flatMapDeep([1, 2], duplicate)
// => [1, 1, 2, 2]
```
