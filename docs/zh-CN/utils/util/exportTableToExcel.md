# exportTableToExcel

将 JSON 数据导出为 XLSX 文件。

## 语法

```typescript
exportTableToExcel(data: any[], columns: TableColumnItem[], filename: string): void
```

## 参数

### data

- **类型**: `any[]`
- **必需**: 是
- **描述**: 要导出的表格数据

### columns

- **类型**: `TableColumnItem[]`
- **必需**: 是
- **描述**: 表格列配置数组

### filename

- **类型**: `string`
- **必需**: 是
- **描述**: 导出文件的名称（不包含扩展名）

## 返回值

- **类型**: `void`
- **描述**: 此函数不返回任何值

## 示例

```typescript
const tableData = [
  { id: 1, name: "张三", email: "zhangsan@example.com", department: "工程部" },
  { id: 2, name: "李四", email: "lisi@example.com", department: "设计部" }
]

const columns = [
  { prop: "id", label: "ID" },
  { prop: "name", label: "姓名" },
  { prop: "email", label: "邮箱" },
  { prop: "department", label: "部门" }
]

exportTableToExcel(tableData, columns, "用户数据")
// => 这将生成一个名为 "用户数据.xlsx" 的 Excel 文件
```

## 注意事项

- 函数会自动为文件名添加 `.xlsx` 扩展名
- 如果列没有标签，将使用属性名作为表头
- 支持使用点号表示法的嵌套属性（例如 "user.profile.name"）
- 空值或 undefined 值将导出为空单元格
- 函数在工作簿中使用名为 "Sheet1" 的第一个工作表

## 依赖项

- `xlsx`: 用于 Excel 文件生成和操作的库
