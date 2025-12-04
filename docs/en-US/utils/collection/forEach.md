# forEach

::: tip Syntax

_.forEach(collection, [iteratee=_.identity])

:::

## Description

调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用 3 个Parameters：(value, index|key, collection)。 如果The iteratee function（iteratee）显式的Returns false，迭代会提前退出。

::: warning Note

<!-- TODO forIn forOwn -->
<!-- Note:与其他集合方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用[`_.forIn`](/Object/forIn)或者[`_.forOwn`](/Object/forOwn)代替。 -->

Note:与其他集合方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用`_.forIn`或者`_.forOwn`代替。

:::

## 别名

`_.each`

## Parameters

|    Parameters    |      Type      | Default |        Description        |
| :--------: | :------------: | :----: | :----------------: |
| collection | Array / Object |   -    | 一个用来迭代的集合 |
|  iteratee  |    Function    |   -    |      The iteratee function      |

## Returns

- any(any): Returns集合

## Examples

```js
_.forEach([1, 2], function (value) {
  console.log(value)
})
// => Logs `1` then `2`.

_.forEach({ a: 1, b: 2 }, function (value, key) {
  console.log(key)
})
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
