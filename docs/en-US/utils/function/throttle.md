# throttle

::: tip Syntax

\_.throttle(func, [wait=0], [options={}])

:::

## Description

创建一个节流函数，在 `wait` 秒内最多执行 `func` 一次的函数。 该函数提供一个 `cancel` 方法取消延迟的函数调用以及 `flush` 方法立即调用。 可以提供一个 `options` 对象决定如何调用 `func` 方法， `options.leading` 与|或 `options.trailing` 决定 `wait` 前后如何触发。 `func` 会传入最后一次传入的Parameters给这个函数。 随后调用的函数Returns是最后一次 `func` 调用的结果。

::: warning Note

如果 `leading` 和 `trailing` 都设定为 `true` 则 `func` 允许 `trailing` 方式调用的条件为: 在 `wait` 期间多次调用。
如果 `wait` 为 `0` 并且 `leading` 为 `false`, `func`调用将被推迟到下一个点，类似`setTimeout`为`0`的超时。

:::

## Parameters

|       Parameters       |   Type   | Default |         Description         |
| :--------------: | :------: | :----: | :------------------: |
|       func       | Function |   -    |     The function to throttle     |
|       wait       |  number  |   0    |    需要节流的毫秒    |
|     options      |  Object  |   -    |       选项对象       |
| options.leading  | boolean  |  true  | 指定调用在节流开始前 |
| options.trailing | boolean  |  true  | 指定调用在节流结束后 |

## Returns

- Function: Returns节流的函数

## Examples

```js
// 避免在滚动时过分的更新定位
jQuery(window).on("scroll", _.throttle(updatePosition, 100))

// 点击后就调用 `renewToken`，但5分钟内超过1次。
var throttled = _.throttle(renewToken, 300000, { trailing: false })
jQuery(element).on("click", throttled)

// 取消一个 trailing 的节流调用。
jQuery(window).on("popstate", throttled.cancel)
```
