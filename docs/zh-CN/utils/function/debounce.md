# debounce

::: tip 语法

\_.debounce(func, [wait=0], [options=])

:::

## 描述

创建一个 防抖函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `func` 方法。 `debounced`函数提供一个 `cancel` 方法取消延迟的函数调用以及 `flush` 方法立即调用。 可以提供一个 `options`（选项） 对象决定如何调用 `func` 方法，`options.leading` 与|或 `options.trailing` 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 `func` 调用时会传入最后一次提供给 `debounced`（防抖动）函数 的参数。 后续调用的 `debounced`（防抖动）函数返回是最后一次 `func` 调用的结果。

::: warning 注意

如果 `leading` 和 `trailing` 选项为 `true`, 则 `func` 允许 `trailing` 方式调用的条件为: 在 `wait` 期间多次调用防抖方法。
如果 `wait` 为 `0` 并且 `leading` 为 `false`, `func`调用将被推迟到下一个点，类似`setTimeout`为`0`的超时。

:::

## 参数

|       参数       |   类型   | 默认值 |              说明              |
| :--------------: | :------: | :----: | :----------------------------: |
|       func       | Function |   -    |         要防抖动的函数         |
|       wait       |  number  |   0    |        需要延迟的毫秒数        |
|     options      |  Object  |   -    |            选项对象            |
| options.leading  | boolean  | false  |      指定在延迟开始前调用      |
| options.maxWait  |  number  |   -    | 设置 `func` 允许被延迟的最大值 |
| options.trailing | boolean  |  true  |      指定在延迟结束后调用      |

## 返回

- Function: 返回新的防抖（debounced）函数

## 例子

```js
// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on("resize", _.debounce(calculateLayout, 150))

// 当点击时 `sendMail` 随后就被调用。
jQuery(element).on(
  "click",
  _.debounce(sendMail, 300, {
    leading: true,
    trailing: false
  })
)

// 确保 `batchLog` 调用1次之后，1秒内会被触发。
var debounced = _.debounce(batchLog, 250, { maxWait: 1000 })
var source = new EventSource("/stream")
jQuery(source).on("message", debounced)

// 取消一个 trailing 的防抖动调用
jQuery(window).on("popstate", debounced.cancel)
```
