# fill

::: tip 语法

\_.fill(array, value, [start=0], [end=array.length])

:::

## 描述

从给定的开始位置填充给定的值（包含开始位置，不包含结束位置）

::: warning 注意

该方法会改变原数组

:::

## 参数

| 参数  |  类型  |    默认值    |      说明      |
| :---: | :----: | :----------: | :------------: |
| array | Array  |      -       | 需要填充的数组 |
| value |  any   |      -       |    填充的值    |
| start | number |      0       |    开始位置    |
|  end  | number | array.length |    结束位置    |

## 返回

- array (Array): 返回填充后的数组

## 例子

```js
var array = [1, 2, 3]

_.fill(array, "a")
// => ['a', 'a', 'a']

_.fill(Array(3), 2)
// => [2, 2, 2]

_.fill([4, 6, 8, 10], "*", 1, 3)
// => [4, '*', '*', 10]
```
