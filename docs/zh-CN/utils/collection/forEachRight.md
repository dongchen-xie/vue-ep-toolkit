# forEachRight

::: tip 语法

_.forEachRight(collection, [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.forEach`](/Collection/forEach)，不同之处在于，`_.forEachRight` 是从右到左遍历集合中每一个元素的。

## 别名

`_.eachRight`

## 参数

|    参数    |      类型      | 默认值 |        说明        |
| :--------: | :------------: | :----: | :----------------: |
| collection | Array / Object |   -    | 一个用来迭代的集合 |
|  iteratee  |    Function    |   -    |      迭代函数      |

## 返回

- any(any): 返回集合

## 例子

```js
_.forEachRight([1, 2], function (value) {
  console.log(value)
})
// => Logs `2` then `1`.
```
