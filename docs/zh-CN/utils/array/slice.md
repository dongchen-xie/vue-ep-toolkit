# slice

::: tip 语法

\_.slice(array, [start=0], [end=array.length])

:::

## 描述

裁剪数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。

::: warning 注意

这个方法用于代替数组原生的 slice 方法来确保数组正确返回。

:::

## 参数

| 参数  |  类型  |    默认值    |    说明    |
| :---: | :----: | :----------: | :--------: |
| array | Array  |      -       | 要裁剪数组 |
| start | number |      -       |  开始位置  |
|  end  | number | array.length |  结束位置  |

## 返回

- array(Array): 返回数组 array 裁剪部分的新数组
