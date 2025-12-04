# slice

::: tip Syntax

\_.slice(array, [start=0], [end=array.length])

:::

## Description

裁剪数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。

::: warning Note

这个方法用于代替数组原生的 slice 方法来确保数组正确Returns。

:::

## Parameters

| Parameters  |  Type  |    Default    |    Description    |
| :---: | :----: | :----------: | :--------: |
| array | Array  |      -       | 要裁剪数组 |
| start | number |      -       |  The start position  |
|  end  | number | array.length |  The end position  |

## Returns

- array(Array): Returns数组 array 裁剪部分的新数组
