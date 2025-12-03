---
title: Table 表格
lang: zh-CN
---

# Table 表格

基于 Element Plus 的增强表格组件，具有搜索、分页、导出和数字格式化等附加功能。

更多详情请参考 [Element Plus Table](https://element-plus.org/zh-CN/component/table)

## 基础表格

带原始数据和列配置的基础表格。

:::demo 使用 `raw-data` 提供表格数据，使用 `columns` 定义表格结构。每个列对象支持所有 Element Plus 表格列属性。

table/basic

:::

## 合并列

自动合并指定列中具有相同值的单元格。

:::demo 使用 `merge-columns` 属性指定当值相同时应合并单元格的列。

table/merge-columns

:::

## 搜索功能

内置搜索功能，支持列选择。

:::demo 使用 `show-search` 属性启用搜索。用户可以搜索所有列或选择特定列进行搜索。

table/search

:::

## 刷新和导出

在表格工具栏添加刷新和导出按钮。

:::demo 使用 `show-refresh` 和 `show-export` 属性显示操作按钮。监听 `refresh` 和 `export` 事件处理用户操作。

table/refresh-export

:::

## 分页

内置分页支持大数据集。

:::demo 将 `pagination` 设置为 `true` 启用基础分页，或传递配置对象自定义分页行为。

table/pagination

:::

## 数字格式化

自动格式化表格单元格中的数值。

:::demo 启用 `number-format` 自动格式化带千位分隔符和小数位的数字。

table/number-format

:::

## Table API

### Table 属性

| 名称           | 说明             | 类型                                        | 默认值  |
| -------------- | ---------------- | ------------------------------------------- | ------- |
| raw-data       | 表格数据源       | ^[array]`any[]`                             | `[]`    |
| columns        | 列配置           | ^[array]`EpTableColumnProps[]`              | `[]`    |
| merge-columns  | 要合并单元格的列 | ^[array]`string[]`                          | `[]`    |
| show-search    | 显示搜索功能     | `boolean`                                   | `false` |
| search-value   | 默认搜索值       | `string`                                    | `''`    |
| search-columns | 默认选择的搜索列 | ^[array]`string[]`                          | `[]`    |
| show-refresh   | 显示刷新按钮     | `boolean`                                   | `false` |
| show-export    | 显示导出按钮     | `boolean`                                   | `false` |
| pagination     | 启用分页         | `boolean` \| ^[object]`PaginationProps`     | `false` |
| number-format  | 启用数字格式化   | `boolean` \| ^[object]`FormatNumberOptions` | `false` |

<details>
<summary>Element Plus Table 属性</summary>

| 名称                      | 说明                                                                                                                                                                                                        | 类型                                                                                                                                                                 | 默认值                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| data                      | 显示的数据                                                                                                                                                                                                  | ^[array]`any[]`                                                                                                                                                      | []                                                                                                                      |
| height                    | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。                              | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| max-height                | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。                                                                                                                                                     | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| stripe                    | 是否为斑马纹 table                                                                                                                                                                                          | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| border                    | 是否带有纵向边框                                                                                                                                                                                            | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| size                      | Table 的尺寸                                                                                                                                                                                                | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                       | —                                                                                                                       |
| fit                       | 列的宽度是否自撑开                                                                                                                                                                                          | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| show-header               | 是否显示表头                                                                                                                                                                                                | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| highlight-current-row     | 是否要高亮当前行                                                                                                                                                                                            | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| current-row-key           | 当前行的 key，只写属性                                                                                                                                                                                      | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| row-class-name            | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。                                                                                                                               | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| row-style                 | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。                                                                                                                               | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| cell-class-name           | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。                                                                                                                       | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| cell-style                | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。                                                                                                                       | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| header-row-class-name     | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。                                                                                                                       | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| header-row-style          | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。                                                                                                                       | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| header-cell-class-name    | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。                                                                                                               | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| header-cell-style         | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。                                                                                                               | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| row-key                   | 行数据的 Key，用来优化 Table 的渲染； 在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 Function。 | ^[function]`(row: any) => string` / ^[string]                                                                                                                        | —                                                                                                                       |
| empty-text                | 空数据时显示的文本内容， 也可以通过 `#empty` 设置                                                                                                                                                           | ^[string]                                                                                                                                                            | 暂无数据                                                                                                                |
| default-expand-all        | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效                                                                                                                                             | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| expand-row-keys           | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。                                                                                                          | ^[object]`Array<string>`                                                                                                                                             | —                                                                                                                       |
| default-sort              | 默认的排序列的 prop 和顺序。 它的 `prop` 属性指定默认的排序的列，`order` 指定默认排序的顺序                                                                                                                 | ^[object]`Sort`                                                                                                                                                      | 如果只指定了 `prop`, 没有指定 `order`, 则默认顺序是 ascending                                                           |
| tooltip-effect            | 溢出 tooltip 的 `effect`                                                                                                                                                                                    | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltip-options           | 溢出 tooltip 的选项，[参见下述 tooltip 组件](tooltip.html#attributes)                                                                                                                                       | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| append-filter-panel-to    | 筛选弹出框挂载的 HTML 元素                                                                                                                                                                                  | ^[string]                                                                                                                                                            | —                                                                                                                       |
| show-summary              | 是否在表尾显示合计行                                                                                                                                                                                        | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| sum-text                  | 合计行第一列的文本                                                                                                                                                                                          | ^[string]                                                                                                                                                            | 合计                                                                                                                    |
| summary-method            | 自定义的合计计算方法                                                                                                                                                                                        | ^[Function]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                          | —                                                                                                                       |
| span-method               | 合并行或列的计算方法                                                                                                                                                                                        | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`      | —                                                                                                                       |
| select-on-indeterminate   | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行                                                                                         | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| indent                    | 展示树形数据时，树节点的缩进                                                                                                                                                                                | ^[number]                                                                                                                                                            | 16                                                                                                                      |
| lazy                      | 是否懒加载子节点数据                                                                                                                                                                                        | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| load                      | 加载子节点数据的函数，lazy 为 true 时生效                                                                                                                                                                   | ^[Function]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                  | —                                                                                                                       |
| tree-props                | 渲染嵌套数据的配置选项                                                                                                                                                                                      | ^[object]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[object]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| table-layout              | 设置表格单元、行和列的布局方式                                                                                                                                                                              | ^[enum]`'fixed' \| 'auto'`                                                                                                                                           | fixed                                                                                                                   |
| scrollbar-always-on       | 总是显示滚动条                                                                                                                                                                                              | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| show-overflow-tooltip     | 当内容过长被隐藏时显示 tooltip。它会影响所有表格列，参考表格 [tooltip-options](#table-属性)                                                                                                                 | ^[boolean] / [`object`](#table-属性)                                                                                                                                 | —                                                                                                                       |
| flexible                  | 确保主轴的最小尺寸不遵循内容                                                                                                                                                                                | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| scrollbar-tabindex        | body 滚动条的 wrap 容器的 tabindex                                                                                                                                                                          | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| allow-drag-last-column    | 是否允许拖动最后一列                                                                                                                                                                                        | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| tooltip-formatter         | 使用 `show-overflow-tooltip` 时自定义 tooltip 内容                                                                                                                                                          | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                      | —                                                                                                                       |
| preserve-expanded-content | 折叠时是否在 DOM 中保留展开行的内容                                                                                                                                                                         | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| native-scrollbar          | 是否使用原生滚动条                                                                                                                                                                                          | ^[boolean]                                                                                                                                                           | false                                                                                                                   |

</details>

### Table 事件

| 名称              | 说明               | 类型                                                      |
| ----------------- | ------------------ | --------------------------------------------------------- |
| refresh           | 点击刷新按钮时触发 | ^[Function]`()`                                           |
| export            | 点击导出按钮时触发 | ^[Function]`(data: any[], columns: EpTableColumnProps[])` |
| search            | 执行搜索时触发     | ^[Function]`(value: string, columns: string[])`           |
| pagination-change | 分页变化时触发     | ^[Function]`(page: number, size: number)`                 |

<details>
<summary>Element Plus Table 事件</summary>

| 名称               | 说明                                                                                                                     | 类型                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| select             | 当用户手动勾选数据行的 Checkbox 时触发的事件                                                                             | ^[Function]`<T = any>(selection: T[], row: T) => void`                                                  |
| select-all         | 当用户手动勾选全选 Checkbox 时触发的事件                                                                                 | ^[Function]`(selection: any[]) => void`                                                                 |
| selection-change   | 当选择项发生变化时会触发该事件                                                                                           | ^[Function]`(newSelection: any[]) => void`                                                              |
| cell-mouse-enter   | 当单元格 hover 进入时会触发该事件                                                                                        | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-mouse-leave   | 当单元格 hover 退出时会触发该事件                                                                                        | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-click         | 当某个单元格被点击时会触发该事件                                                                                         | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-dblclick      | 当某个单元格被双击击时会触发该事件                                                                                       | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-contextmenu   | 当某个单元格被鼠标右键点击时会触发该事件                                                                                 | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| row-click          | 当某一行被点击时会触发该事件                                                                                             | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-contextmenu    | 当某一行被鼠标右键点击时会触发该事件                                                                                     | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-dblclick       | 当某一行被双击时会触发该事件                                                                                             | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| header-click       | 当某一列的表头被点击时会触发该事件                                                                                       | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件                                                                                 | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| sort-change        | 当表格的排序条件发生变化的时候会触发该事件                                                                               | ^[Function]`(data: {column: TableColumnCtx<T>, prop: string, order: any }) => void`                     |
| filter-change      | column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件                                | ^[Function]`(newFilters: any) => void`                                                                  |
| current-change     | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性                      | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                              |
| header-dragend     | 当拖动表头改变了列的宽度的时候会触发该事件                                                                               | ^[Function]`(newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void` |
| expand-change      | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void`            |
| scroll             | 滚动后触发                                                                                                               | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                                        |

</details>

### Table 插槽

<details>
<summary>Element Plus Table 插槽</summary>

| 名称    | 说明                                                                                                                                  | 子标签       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| default | 自定义默认内容                                                                                                                        | Table-column |
| append  | 插入至表格最后一行之后的内容。如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 | —            |
| empty   | 当数据为空时自定义的内容                                                                                                              | —            |

</details>

### Table 暴露

<details>
<summary>Element Plus Table 暴露</summary>

| 方法               | 说明                                                                                                              | 类型                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                                                      | ^[Function]`() => void`                                                      |
| getSelectionRows   | 返回当前选中的行                                                                                                  | ^[Function]`() => any[]`                                                     |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否                             | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态                                                                                | ^[Function]`() => void`                                                      |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态， 如果使用了第二个参数，则可直接设置这一行展开与否                 | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow      | 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。                             | ^[Function]`(row: any) => void`                                              |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                                                                        | ^[Function]`() => void`                                                      |
| clearFilter        | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件 | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout           | 对 Table 进行重新布局。 当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法                               | ^[Function]`() => void`                                                      |
| sort               | 手动对 Table 进行排序。 参数 `prop` 属性指定排序列，`order` 指定排序顺序。                                        | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo           | 滚动到一组特定坐标                                                                                                | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop       | 设置垂直滚动位置                                                                                                  | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft      | 设置水平滚动位置                                                                                                  | ^[Function]`(left?: number) => void`                                         |
| columns            | 获取表格列上下文。                                                                                                | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren  | 用于懒加载表格，必须设置 `rowKey`，更新 key 子项                                                                  | ^[Function]`(key: string, data: T[]) => void`                                |

</details>

## Table Column API

### Table Column 属性

扩展所有 Element Plus TableColumnCtx 属性，并增加额外功能：

| 名称  | 说明           | 类型                                               | 默认值 |
| ----- | -------------- | -------------------------------------------------- | ------ |
| slots | 自定义插槽配置 | ^[Function]`{ default?: string, header?: string }` | -      |

<details>
<summary>Element Plus Table Column 属性</summary>

| 名称                  | 说明                                                                                                                                                                                   | 类型                                                                                                                                                                        | 默认值                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| type                  | 对应列的类型。 如果设置了 `selection` 则显示多选框； 如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮                                | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                 | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引                                                                                                                         | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| label                 | 显示的标题                                                                                                                                                                             | ^[string]                                                                                                                                                                   | —                                 |
| column-key            | column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件                                                                                              | ^[string]                                                                                                                                                                   | —                                 |
| prop                  | 对应列内容的字段名， 也可以使用 property 属性                                                                                                                                          | ^[string]                                                                                                                                                                   | —                                 |
| width                 | 对应列的宽度                                                                                                                                                                           | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| min-width             | 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列                                                                           | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| fixed                 | 列是否固定在左侧或者右侧。 true 表示固定在左侧                                                                                                                                         | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header         | 列标题 Label 区域渲染使用的 Function                                                                                                                                                   | ^[Function]`(data: { column: TableColumnCtx<T>, $index: number }) => void`                                                                                                  | —                                 |
| sortable              | 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件                                                                                   | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method           | 对数据进行排序的时候使用的方法， 仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致                                                                          | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by               | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，则按照第 2 个排序，以此类推 | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[object]`string[]`                                                                                          | —                                 |
| sort-orders           | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列按照数组中元素的顺序依次排序                                                | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable             | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）                                                                                                               | ^[boolean]                                                                                                                                                                  | true                              |
| formatter             | 用来格式化内容                                                                                                                                                                         | ^[function]`(row: any, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode \| string`                                                                        | —                                 |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                                                                                                                                                         | ^[boolean] / [`object`](#table-属性)                                                                                                                                        | undefined                         |
| align                 | 对齐方式                                                                                                                                                                               | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align          | 表头对齐方式， 若不设置该项，则使用表格的对齐方式                                                                                                                                      | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name            | 列的 className                                                                                                                                                                         | ^[string]                                                                                                                                                                   | —                                 |
| label-class-name      | 当前列标题的自定义类名                                                                                                                                                                 | ^[string]                                                                                                                                                                   | —                                 |
| selectable            | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选                                                                                 | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection     | 仅对 type=selection 的列有效， 类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）                                                                          | ^[boolean]                                                                                                                                                                  | false                             |
| filters               | 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。                                                                                                                     | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement      | 过滤弹出框的定位                                                                                                                                                                       | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name     | 过滤弹出框的 className                                                                                                                                                                 | ^[string]                                                                                                                                                                   | —                                 |
| filter-multiple       | 数据过滤的选项是否多选                                                                                                                                                                 | ^[boolean]                                                                                                                                                                  | true                              |
| filter-method         | 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。                                                                                          | ^[function]`(value: any, row: any, column: TableColumnCtx<T>) => void`                                                                                                      | —                                 |
| filtered-value        | 选中的数据过滤项， 如果需要自定义表头过滤的渲染方式，可能会需要此属性。                                                                                                                | ^[object]`string[]`                                                                                                                                                         | —                                 |
| tooltip-formatter     | 使用 `show-overflow-tooltip` 时自定义 tooltip 内容                                                                                                                                     | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                             | —                                 |

</details>

### Table Column 插槽

<details>
<summary>Element Plus Table Column 插槽</summary>

| 名称        | 说明               | 类型                                                               |
| ----------- | ------------------ | ------------------------------------------------------------------ |
| default     | 自定义列的内容     | ^[object]`{ row: any, column: TableColumnCtx<T>, $index: number }` |
| header      | 自定义表头的内容   | ^[object]`{ column: TableColumnCtx<T>, $index: number }`           |
| filter-icon | 自定义筛选图标     | ^[object]`{ filterOpened: boolean }`                               |
| expand      | 自定义展开列的内容 | ^[object]`{ expanded: boolean }`                                   |

</details>

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
interface Sort {
  prop: string
  order: "ascending" | "descending"
  init?: any
  silent?: any
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
  display?: boolean
}

type DefaultRow = Record<PropertyKey, any>

type TableColumnCtx<T extends DefaultRow = DefaultRow> = {
  id: string
  realWidth: number | null
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width?: string | number
  minWidth: string | number
  renderHeader: (data: CI<T>) => VNode
  sortable: boolean | string
  sortMethod: (a: T, b: T) => number
  sortBy: string | ((row: T, index: number, array?: T[]) => string) | string[]
  resizable: boolean
  columnKey: string
  rawColumnKey: string
  align: string
  headerAlign: string
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions
  tooltipFormatter?: TableOverflowTooltipFormatter<T>
  fixed: boolean | string
  formatter: (row: T, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode | string
  selectable: (row: T, index: number) => boolean
  reserveSelection: boolean
  filterMethod: FilterMethods<T>
  filteredValue: string[]
  filters: Filters
  filterPlacement: string
  filterMultiple: boolean
  filterClassName: string
  index: number | ((index: number) => number)
  sortOrders: (TableSortOrder | null)[]
  renderCell: (data: any) => VNode | VNode[]
  colSpan: number
  rowSpan: number
  children?: TableColumnCtx<T>[]
  level: number
  filterable: boolean | FilterMethods<T> | Filters
  order: TableSortOrder | null
  isColumnGroup: boolean
  isSubColumn: boolean
  columns: TableColumnCtx<T>[]
  getColumnIndex: () => number
  no: number
  filterOpened?: boolean
  renderFilterIcon?: (scope: any) => VNode
  renderExpand?: (scope: any) => VNode
}

interface EpTableColumnProps extends Partial<TableColumnCtx<any>> {
  slots?: {
    default?: string
    header?: string
  }
}

interface EpTableProps {
  rawData?: any[]
  columns?: EpTableColumnProps[]
  mergeColumns?: string[]
  showSearch?: boolean
  searchValue?: string
  searchColumns?: string[]
  showRefresh?: boolean
  showExport?: boolean
  pagination?: boolean | PaginationProps
  numberFormat?: boolean | FormatNumberOptions
}

interface EpTableEmits {
  refresh: []
  export: [data: any[], columns: EpTableColumnProps[]]
  search: [value: string, columns: string[]]
  "pagination-change": [page: number, size: number]
}
```

</details>

## FAQ

#### 如何在表格中使用图片预览？

```vue{4}
<template>
  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
</template>
```

#### 为什么使用 DOM 模板时列没有渲染？

典型问题：[#5046](https://github.com/element-plus/element-plus/issues/5046) [#5862](https://github.com/element-plus/element-plus/issues/5862) [#6919](https://github.com/element-plus/element-plus/issues/6919)

这是因为 HTML 规范只允许少数特定元素省略关闭标签，最常见的是 `<input>` 和 `<img>`。对于所有其他元素，如果省略关闭标签，原生 HTML 解析器会认为您没有终止开始标签。

更多详情请参考 [Vue 文档](https://cn.vuejs.org/guide/essentials/component-basics.html#self-closing-tags)
