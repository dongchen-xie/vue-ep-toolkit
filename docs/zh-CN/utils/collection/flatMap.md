# flatMap

::: tip 语法

_.flatMap(collection, [iteratee=_.identity])

:::

## 描述

创建一个扁平化（注：同阶数组）的数组，这个数组的值来自 collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。

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
  return [n, n]
}

_.flatMap([1, 2], duplicate)
// => [1, 1, 2, 2]
```
