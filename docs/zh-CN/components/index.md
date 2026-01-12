# 组件

Vue Business Kit 提供了一套基于 [Element Plus](https://element-plus.org/)、[ECharts](https://echarts.apache.org/) 和自定义原生组件的丰富 UI 组件，开箱即用。

## 关于文档

本项目对 Element Plus 官方文档进行引用，以便更方便地参考和使用。

:::tip 标识说明

^(@\*) 表示需要使用某属性才能使用的功能，例如：^(@columns) 表示需要使用 `columns` 属性才能使用的功能

^(extended) 表示该属性基于原组件的原生属性功能进行了扩展

^(required) 表示该属性为必选属性，使用时必须配置。

:::

## 特性

- 🎨 **Element Plus 集成** - 包含所有 Element Plus 组件并对部分组件进行增强
- 📊 **原生组件** - 组件库独立开发的基础组件
- 📝 **类型支持** - 完整的 TypeScript 类型定义

## 使用方式

```vue
<template>
  <bk-button icon="tabler:mood-tongue-wink-2">按钮</bk-button>
  <bk-icon icon="tabler:mood-tongue-wink-2" />
</template>
```

## 组件总览

### Basic 基础组件

- [Button 按钮](/zh-CN/components/button)
- [Border 边框](https://element-plus.org/zh-CN/component/border)
- [Color 颜色](https://element-plus.org/zh-CN/component/color)
- [Container 布局容器](https://element-plus.org/zh-CN/component/container)
- [Icon 图标](/zh-CN/components/icon)
- [Layout 布局](https://element-plus.org/zh-CN/component/layout)
- [Link 链接](https://element-plus.org/zh-CN/component/link)
- [Text 文本](https://element-plus.org/zh-CN/component/text)
- [Scrollbar 滚动条](https://element-plus.org/zh-CN/component/scrollbar)
- [Space 间距](https://element-plus.org/zh-CN/component/space)
- [Typography 排版](https://element-plus.org/zh-CN/component/typography)

### Configuration 配置组件

- [Config Provider 全局配置](https://element-plus.org/zh-CN/component/config-provider)

### Form 表单组件

- [Autocomplete 自动补全输入框](https://element-plus.org/zh-CN/component/autocomplete)
- [Cascader 级联选择器](https://element-plus.org/zh-CN/component/cascader)
- [Checkbox 多选框](https://element-plus.org/zh-CN/component/checkbox)
- [Color Picker 颜色选择器](https://element-plus.org/zh-CN/component/color-picker)
- [Date Picker 日期选择器](https://element-plus.org/zh-CN/component/date-picker)
- [DateTime Picker 日期时间选择器](https://element-plus.org/zh-CN/component/datetime-picker)
- [Form 表单组件](/zh-CN/components/form)
- [Input 输入框](https://element-plus.org/zh-CN/component/input)
- [Input Number 数字输入框](https://element-plus.org/zh-CN/component/input-number)
- [Input Tag 标签输入框](https://element-plus.org/zh-CN/component/input-tag)
- [Mention 提及](https://element-plus.org/zh-CN/component/mention)
- [Radio 单选框](https://element-plus.org/zh-CN/component/radio)
- [Rate 评分](https://element-plus.org/zh-CN/component/rate)
- [Select 选择器](https://element-plus.org/zh-CN/component/select)
- [Virtualized Select 虚拟滚动选择器](https://element-plus.org/zh-CN/component/select-v2)
- [Slider 滑块](https://element-plus.org/zh-CN/component/slider)
- [Switch 开关](https://element-plus.org/zh-CN/component/switch)
- [Time Picker 时间选择器](https://element-plus.org/zh-CN/component/time-picker)
- [Time Select 时间选择器](https://element-plus.org/zh-CN/component/time-select)
- [Transfer 穿梭框](https://element-plus.org/zh-CN/component/transfer)
- [Tree Select 树形选择器](https://element-plus.org/zh-CN/component/tree-select)
- [Upload 上传器](https://element-plus.org/zh-CN/component/upload)

### Data 数据展示

- [Avatar 头像](https://element-plus.org/zh-CN/component/avatar)
- [Badge 标记](https://element-plus.org/zh-CN/component/badge)
- [Calendar 日历](https://element-plus.org/zh-CN/component/calendar)
- [Card 卡片](https://element-plus.org/zh-CN/component/card)
- [Carousel 走马灯](https://element-plus.org/zh-CN/component/carousel)
- [Collapse 折叠面板](/zh-CN/components/collapse)
- [Descriptions 描述列表](https://element-plus.org/zh-CN/component/descriptions)
- [Empty 空状态](https://element-plus.org/zh-CN/component/empty)
- [Image 图片](https://element-plus.org/zh-CN/component/image)
- [Infinite Scroll 无限滚动](https://element-plus.org/zh-CN/component/infinite-scroll)
- [Pagination 分页](https://element-plus.org/zh-CN/component/pagination)
- [Progress 进度条](https://element-plus.org/zh-CN/component/progress)
- [Result 结果](https://element-plus.org/zh-CN/component/result)
- [Skeleton 骨架屏](https://element-plus.org/zh-CN/component/skeleton)
- [Table 表格](/zh-CN/components/table)
- [Tag 标签](https://element-plus.org/zh-CN/component/tag)
- [Timeline 时间轴](https://element-plus.org/zh-CN/component/timeline)
- [Tour 漫游式引导](https://element-plus.org/zh-CN/component/tour)
- [Tree 树形控件](https://element-plus.org/zh-CN/component/tree)
- [Statistic 统计数值](https://element-plus.org/zh-CN/component/statistic)
- [Segmented 分段器](https://element-plus.org/zh-CN/component/segmented)

### Navigation 导航

- [Affix 固钉](https://element-plus.org/zh-CN/component/affix)
- [Anchor 锚点](https://element-plus.org/zh-CN/component/anchor)
- [Backtop 回到顶部](https://element-plus.org/zh-CN/component/backtop)
- [Breadcrumb 面包屑](/zh-CN/components/breadcrumb)
- [Dropdown 下拉菜单](/zh-CN/components/dropdown)
- [Menu 导航菜单](/zh-CN/components/menu)
- [Page Header 页头](https://element-plus.org/zh-CN/component/page-header)
- [Steps 步骤条](https://element-plus.org/zh-CN/component/steps)
- [Tabs 标签页](https://element-plus.org/zh-CN/component/tabs)

### Feedback 反馈组件

- [Alert 提示](https://element-plus.org/zh-CN/component/alert)
- [Dialog 对话框](/zh-CN/components/dialog)
- [Drawer 抽屉](/zh-CN/components/drawer)
- [Loading 加载](https://element-plus.org/zh-CN/component/loading)
- [Message 消息提示](https://element-plus.org/zh-CN/component/message)
- [Message Box 消息提示](https://element-plus.org/zh-CN/component/message-box)
- [Notification 通知](https://element-plus.org/zh-CN/component/notification)
- [Popconfirm 气泡确认框](https://element-plus.org/zh-CN/component/popconfirm)
- [Popover 气泡卡片](https://element-plus.org/zh-CN/component/popover)
- [Tooltip 文字提示](https://element-plus.org/zh-CN/component/tooltip)

### Others 其他

- [Divider 分割线](https://element-plus.org/zh-CN/component/divider)
- [Watermark 水印](https://element-plus.org/zh-CN/component/watermark)
