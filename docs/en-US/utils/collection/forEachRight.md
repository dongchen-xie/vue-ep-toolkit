# forEachRight

::: tip Syntax

_.forEachRight(collection, [iteratee=_.identity])

:::

## Description

这个方法类似[`_.forEach`](/Collection/forEach)，不同之处在于，`_.forEachRight` 是从右到左遍历集合中每一个元素的。

## 别名

`_.eachRight`

## Parameters

|    Parameters    |      Type      | Default |        Description        |
| :--------: | :------------: | :----: | :----------------: |
| collection | Array / Object |   -    | 一个用来迭代的集合 |
|  iteratee  |    Function    |   -    |      The iteratee function      |

## Returns

- any(any): Returns集合

## Examples

```js
_.forEachRight([1, 2], function (value) {
  console.log(value)
})
// => Logs `2` then `1`.
```
