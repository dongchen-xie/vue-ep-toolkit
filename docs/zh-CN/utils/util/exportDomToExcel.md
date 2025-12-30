# exportDomToExcel

将 DOM 元素（通常是表格）导出为 Excel 文件。

## 语法

```ts
exportDomToExcel(dom: HTMLElement, filename: string): void
```

## 参数

### dom

要导出的 DOM 元素，通常是表格元素。

- **类型**: `HTMLElement`

### filename

导出文件名（不需要扩展名）。

- **类型**: `string`

## 返回值

- **类型**: `void`

## 示例

```ts
const table = document.querySelector("#my-table") as HTMLElement
exportDomToExcel(table, "用户数据")
// => 导出名为 "用户数据.xlsx" 的 Excel 文件
```

## 注意事项

- 函数会自动为文件名添加 `.xlsx` 扩展名
- DOM 元素应该是表格或类似表格的结构以获得最佳效果
- 如果未提供 DOM 元素或元素无效，将抛出错误
- 如果未提供文件名，将抛出错误

## 依赖项

- `xlsx`: 用于 Excel 文件生成和操作的库
