---
title: Table
lang: en-US
---

# Table

Enhanced table component based on Element Plus with additional features like search, pagination, export, and number formatting.

For more details please refer to [Element Plus Table](https://element-plus.org/en-US/component/table)

## Basic table

Basic table with raw data and column configuration.

:::demo Use `raw-data` to provide table data and `columns` to define table structure. Each column object supports all Element Plus table column properties.

table/basic

:::

## Merge Columns

Automatically merge cells with the same values in specified columns.

:::demo Use `merge-columns` prop to specify which columns should have their cells merged when values are identical.

table/merge-columns

:::

## Search Functionality

Built-in search functionality with column selection.

:::demo Enable search with `show-search` prop. Users can search across all columns or select specific columns to search in.

table/search

:::

## Refresh and Export

Add refresh and export buttons to the table toolbar.

:::demo Use `show-refresh` and `show-export` props to display action buttons. Listen to `refresh` and `export` events to handle user actions.

table/refresh-export

:::

## Pagination

Built-in pagination support for large datasets.

:::demo Set `pagination` to `true` to enable basic pagination, or pass a configuration object to customize pagination behavior.

table/pagination

:::

## Number Formatting

Automatically format numeric values in table cells.

:::demo Enable `number-format` to automatically format numbers with thousand separators and decimal places.

table/number-format

:::

## Table API

### Table Attributes

| Name           | Description                     | Type                                        | Default |
| -------------- | ------------------------------- | ------------------------------------------- | ------- |
| raw-data       | Table data source               | ^[array]`any[]`                             | `[]`    |
| columns        | Column configuration            | ^[array]`EpTableColumnProps[]`              | `[]`    |
| merge-columns  | Columns to merge cells          | ^[array]`string[]`                          | `[]`    |
| show-search    | Show search functionality       | `boolean`                                   | `false` |
| search-value   | Default search value            | `string`                                    | `''`    |
| search-columns | Default selected search columns | ^[array]`string[]`                          | `[]`    |
| show-refresh   | Show refresh button             | `boolean`                                   | `false` |
| show-export    | Show export button              | `boolean`                                   | `false` |
| pagination     | Enable pagination               | `boolean` \| ^[object]`PaginationProps`     | `false` |
| number-format  | Enable number formatting        | `boolean` \| ^[object]`FormatNumberOptions` | `false` |

<details>
<summary>Element Plus Table Attributes</summary>

| Name                      | Description                                                                                                                                                                                                                                                                | Type                                                                                                                                                                 | Default                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| data                      | table data                                                                                                                                                                                                                                                                 | ^[array]`any[]`                                                                                                                                                      | []                                                                                                                      |
| height                    | table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles                                  | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| max-height                | table's max-height. The legal value is a number or the height in px                                                                                                                                                                                                        | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| stripe                    | whether Table is striped                                                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| border                    | whether Table has vertical border                                                                                                                                                                                                                                          | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| size                      | size of Table                                                                                                                                                                                                                                                              | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                       | —                                                                                                                       |
| fit                       | whether width of column automatically fits its container                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| show-header               | whether Table header is visible                                                                                                                                                                                                                                            | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| highlight-current-row     | whether current row is highlighted                                                                                                                                                                                                                                         | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| current-row-key           | key of current row, a set only prop                                                                                                                                                                                                                                        | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| row-class-name            | function that returns custom class names for a row, or a string assigning class names for every row                                                                                                                                                                        | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| row-style                 | function that returns custom style for a row, or an object assigning custom style for every row                                                                                                                                                                            | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| cell-class-name           | function that returns custom class names for a cell, or a string assigning class names for every cell                                                                                                                                                                      | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| cell-style                | function that returns custom style for a cell, or an object assigning custom style for every cell                                                                                                                                                                          | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| header-row-class-name     | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header                                                                                                                                        | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| header-row-style          | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header                                                                                                                                            | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| header-cell-class-name    | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header                                                                                                                                      | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| header-cell-style         | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header                                                                                                                                          | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| row-key                   | key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used | ^[function]`(row: any) => string` / ^[string]                                                                                                                        | —                                                                                                                       |
| empty-text                | displayed text when data is empty. You can customize this area with `#empty`                                                                                                                                                                                               | ^[string]                                                                                                                                                            | No Data                                                                                                                 |
| default-expand-all        | whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data                                                                                                                                                        | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| expand-row-keys           | set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop.                                                                                                                                                    | ^[object]`Array<string>`                                                                                                                                             | —                                                                                                                       |
| default-sort              | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order                                                                                                                              | ^[object]`Sort`                                                                                                                                                      | if `prop` is set, and `order` is not set, then `order` is default to ascending                                          |
| tooltip-effect            | the `effect` of the overflow tooltip                                                                                                                                                                                                                                       | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltip-options           | the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)                                                                                                                                                                       | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| append-filter-panel-to    | which element the filter panels appends to                                                                                                                                                                                                                                 | ^[string]                                                                                                                                                            | —                                                                                                                       |
| show-summary              | whether to display a summary row                                                                                                                                                                                                                                           | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| sum-text                  | displayed text for the first column of summary row                                                                                                                                                                                                                         | ^[string]                                                                                                                                                            | Sum                                                                                                                     |
| summary-method            | custom summary method                                                                                                                                                                                                                                                      | ^[Function]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                          | —                                                                                                                       |
| span-method               | method that returns rowspan and colspan                                                                                                                                                                                                                                    | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`      | —                                                                                                                       |
| select-on-indeterminate   | controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected                                                                                                        | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| indent                    | horizontal indentation of tree data                                                                                                                                                                                                                                        | ^[number]                                                                                                                                                            | 16                                                                                                                      |
| lazy                      | whether to lazy loading data                                                                                                                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| load                      | method for loading child row data, only works when `lazy` is true                                                                                                                                                                                                          | ^[Function]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                  | —                                                                                                                       |
| tree-props                | configuration for rendering nested data                                                                                                                                                                                                                                    | ^[object]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[object]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| table-layout              | sets the algorithm used to lay out table cells, rows, and columns                                                                                                                                                                                                          | ^[enum]`'fixed' \| 'auto'`                                                                                                                                           | fixed                                                                                                                   |
| scrollbar-always-on       | always show scrollbar                                                                                                                                                                                                                                                      | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| show-overflow-tooltip     | whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns, refer to table [tooltip-options](#table-attributes)                                                                                               | ^[boolean] / [`object`](#table-attributes)                                                                                                                           | —                                                                                                                       |
| flexible                  | ensure main axis minimum-size doesn't follow the content                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| scrollbar-tabindex        | body scrollbar's wrap container tabindex                                                                                                                                                                                                                                   | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| allow-drag-last-column    | whether to allow drag the last column                                                                                                                                                                                                                                      | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| tooltip-formatter         | customize tooltip content when using `show-overflow-tooltip`                                                                                                                                                                                                               | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                      | —                                                                                                                       |
| preserve-expanded-content | whether to preserve expanded row content in DOM when collapsed                                                                                                                                                                                                             | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| native-scrollbar          | whether to use native scrollbars                                                                                                                                                                                                                                           | ^[boolean]                                                                                                                                                           | false                                                                                                                   |

</details>

### Table Events

| Name              | Description                              | Type                                                      |
| ----------------- | ---------------------------------------- | --------------------------------------------------------- |
| refresh           | Triggered when refresh button is clicked | ^[Function]`()`                                           |
| export            | Triggered when export button is clicked  | ^[Function]`(data: any[], columns: EpTableColumnProps[])` |
| search            | Triggered when search is performed       | ^[Function]`(value: string, columns: string[])`           |
| pagination-change | Triggered when pagination changes        | ^[Function]`(page: number, size: number)`                 |

<details>
<summary>Element Plus Table Events</summary>

| Name               | Description                                                                                                                                  | Type                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| select             | triggers when user clicks the checkbox in a row                                                                                              | ^[Function]`<T = any>(selection: T[], row: T) => void`                                                  |
| select-all         | triggers when user clicks the checkbox in table header                                                                                       | ^[Function]`(selection: any[]) => void`                                                                 |
| selection-change   | triggers when selection changes                                                                                                              | ^[Function]`(newSelection: any[]) => void`                                                              |
| cell-mouse-enter   | triggers when hovering into a cell                                                                                                           | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-mouse-leave   | triggers when hovering out of a cell                                                                                                         | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-click         | triggers when clicking a cell                                                                                                                | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-dblclick      | triggers when double clicking a cell                                                                                                         | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-contextmenu   | triggers when user right clicks on a cell                                                                                                    | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| row-click          | triggers when clicking a row                                                                                                                 | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-contextmenu    | triggers when user right clicks on a row                                                                                                     | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-dblclick       | triggers when double clicking a row                                                                                                          | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| header-click       | triggers when clicking a column header                                                                                                       | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| header-contextmenu | triggers when user right clicks on a column header                                                                                           | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| sort-change        | triggers when Table's sorting changes                                                                                                        | ^[Function]`(data: {column: TableColumnCtx<T>, prop: string, order: any }) => void`                     |
| filter-change      | triggers when the table's filter changes                                                                                                     | ^[Function]`(newFilters: any) => void`                                                                  |
| current-change     | triggers when current row changes                                                                                                            | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                              |
| header-dragend     | triggers after changing a column's width by dragging the column header's border                                                              | ^[Function]`(newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void` |
| expand-change      | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void`            |
| scroll             | Invoked after scrolled                                                                                                                       | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                                        |

</details>

### Table Slots

<details>
<summary>Element Plus Table Slots</summary>

| Name    | Description                                                                                                                                                                                   | Subtags      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| default | customize default content                                                                                                                                                                     | Table-column |
| append  | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. | —            |
| empty   | you can customize content when data is empty.                                                                                                                                                 | —            |

</details>

### Table Exposes

<details>
<summary>Element Plus Table Exposes</summary>

| Method             | Description                                                                                                                                                       | Type                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| clearSelection     | used in multiple selection Table, clear user selection                                                                                                            | ^[Function]`() => void`                                                      |
| getSelectionRows   | returns the currently selected rows                                                                                                                               | ^[Function]`() => any[]`                                                     |
| toggleRowSelection | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected                    | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection | used in multiple selection Table, toggle select all and deselect all                                                                                              | ^[Function]`() => void`                                                      |
| toggleRowExpansion | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow      | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection                                              | ^[Function]`(row: any) => void`                                              |
| clearSort          | clear sorting, restore data to the original order                                                                                                                 | ^[Function]`() => void`                                                      |
| clearFilter        | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters                                                                     | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout           | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout                                       | ^[Function]`() => void`                                                      |
| sort               | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order                                                       | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo           | scrolls to a particular set of coordinates                                                                                                                        | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop       | set vertical scroll position                                                                                                                                      | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft      | set horizontal scroll position                                                                                                                                    | ^[Function]`(left?: number) => void`                                         |
| columns            | Get table columns context.                                                                                                                                        | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren  | used in lazy Table, must set `rowKey`, update key children                                                                                                        | ^[Function]`(key: string, data: T[]) => void`                                |

</details>

## Table Column API

### Table Column Attributes

Extends all Element Plus TableColumnCtx properties with additional features:

| Name  | Description               | Type                                               | Default |
| ----- | ------------------------- | -------------------------------------------------- | ------- |
| slots | Custom slot configuration | ^[Function]`{ default?: string, header?: string }` | -       |

<details>
<summary>Element Plus Table Column Attributes</summary>

| Name                  | Description                                                                                                                                                                                                        | Type                                                                                                                                                                        | Default                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| type                  | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                 | customize indices for each row, works on columns with `type=index`                                                                                                                                                 | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| label                 | column label                                                                                                                                                                                                       | ^[string]                                                                                                                                                                   | —                                 |
| column-key            | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered                                                                                       | ^[string]                                                                                                                                                                   | —                                 |
| prop                  | field name. You can also use its alias: `property`                                                                                                                                                                 | ^[string]                                                                                                                                                                   | —                                 |
| width                 | column width                                                                                                                                                                                                       | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| min-width             | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion                                                                         | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| fixed                 | whether column is fixed at left / right. Will be fixed at left if `true`                                                                                                                                           | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header         | render function for table header of this column                                                                                                                                                                    | ^[Function]`(data: { column: TableColumnCtx<T>, $index: number }) => void`                                                                                                  | —                                 |
| sortable              | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table                                                                   | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method           | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort                                                                                                                      | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by               | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal       | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[object]`string[]`                                                                                          | —                                 |
| sort-orders           | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array    | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable             | whether column width can be resized, works when `border` of `el-table` is `true`                                                                                                                                   | ^[boolean]                                                                                                                                                                  | true                              |
| formatter             | function that formats cell content                                                                                                                                                                                 | ^[function]`(row: any, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode \| string`                                                                        | —                                 |
| show-overflow-tooltip | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                                 | ^[boolean] / [`object`](#table-attributes)                                                                                                                                  | undefined                         |
| align                 | alignment                                                                                                                                                                                                          | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align          | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                                | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name            | class name of cells in the column                                                                                                                                                                                  | ^[string]                                                                                                                                                                   | —                                 |
| label-class-name      | class name of the label of this column                                                                                                                                                                             | ^[string]                                                                                                                                                                   | —                                 |
| selectable            | function that determines if a certain row can be selected, works when `type` is 'selection'                                                                                                                        | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection     | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work                                                                             | ^[boolean]                                                                                                                                                                  | false                             |
| filters               | an array of data filtering options. For each element in this array, `text` and `value` are required                                                                                                                | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement      | placement for the filter dropdown                                                                                                                                                                                  | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name     | className for the filter dropdown                                                                                                                                                                                  | ^[string]                                                                                                                                                                   | —                                 |
| filter-multiple       | whether data filtering supports multiple options                                                                                                                                                                   | ^[boolean]                                                                                                                                                                  | true                              |
| filter-method         | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`                                               | ^[function]`(value: any, row: any, column: TableColumnCtx<T>) => void`                                                                                                      | —                                 |
| filtered-value        | filter value for selected data, might be useful when table header is rendered with `render-header`                                                                                                                 | ^[object]`string[]`                                                                                                                                                         | —                                 |
| tooltip-formatter     | customize tooltip content when using `show-overflow-tooltip`                                                                                                                                                       | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                             | —                                 |

</details>

### Table Column Slots

<details>
<summary>Element Plus Table Column Slots</summary>

| Name        | Description                       | Type                                                               |
| ----------- | --------------------------------- | ------------------------------------------------------------------ |
| default     | Custom content for table columns  | ^[object]`{ row: any, column: TableColumnCtx<T>, $index: number }` |
| header      | Custom content for table header   | ^[object]`{ column: TableColumnCtx<T>, $index: number }`           |
| filter-icon | Custom content for filter icon    | ^[object]`{ filterOpened: boolean }`                               |
| expand      | Custom content for expand columns | ^[object]`{ expanded: boolean }`                                   |

</details>

## Type Declarations

<details>
  <summary>Show declarations</summary>

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

#### How to use image preview in the table?

```vue{4}
<template>
  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
</template>
```

#### Why column is not rendered when use DOM templates?

Typical issue: [#5046](https://github.com/element-plus/element-plus/issues/5046) [#5862](https://github.com/element-plus/element-plus/issues/5862) [#6919](https://github.com/element-plus/element-plus/issues/6919)

This is because the HTML spec only allows a few specific elements to omit closing tags, the most common being `<input>` and `<img>`. For all other elements, if you omit the closing tag, the native HTML parser will think you never terminated the opening tag

For more details please refer to [vue docs](https://vuejs.org/guide/essentials/component-basics.html#self-closing-tags)
