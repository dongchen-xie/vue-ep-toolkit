# findLast

::: tip 语法

_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])

:::

## 描述

这个方法类似[`_.find`](/Collection/find) ，不同之处在于`_.findLast`是从右至左遍历 collection （集合）元素的

## 参数

|    参数    |                类型                |        默认值         |        说明        |
| :--------: | :--------------------------------: | :-------------------: | :----------------: |
| collection |           Array / Object           |           -           | 一个用来迭代的集合 |
| predicate  | Array / Function / Object / string |           -           |      迭代函数      |
| fromIndex  |               number               | collection.length - 1 |   开始搜索的位置   |

## 返回

- any(any): 返回匹配到的元素， 未匹配到返回 undefined

## 例子

```js
_.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1
})
// => 3
```
