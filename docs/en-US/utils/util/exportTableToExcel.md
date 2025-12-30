# exportTableToExcel

Exports JSON data to an XLSX file.

## Syntax

```typescript
exportTableToExcel(data: any[], columns: TableColumnCtx[], filename: string): void
```

## Parameters

### data

- **Type**: `any[]`
- **Required**: Yes
- **Description**: The table data to be exported

### columns

- **Type**: `TableColumnCtx[]`
- **Required**: Yes
- **Description**: The table column configuration array

### filename

- **Type**: `string`
- **Required**: Yes
- **Description**: The name of the exported file (without extension)

## Return Value

- **Type**: `void`
- **Description**: This function does not return a value

## Example

```typescript
const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", department: "Engineering" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", department: "Design" }
]

const columns = [
  { prop: "id", label: "ID" },
  { prop: "name", label: "Name" },
  { prop: "email", label: "Email" },
  { prop: "department", label: "Department" }
]

exportTableToExcel(tableData, columns, "user-data")
// => This will generate an Excel file named "user-data.xlsx" with the table data
```

## Notes

- The function automatically adds the `.xlsx` extension to the filename
- If a column has no label, the property name will be used as the header
- Nested properties are supported using dot notation (e.g., "user.profile.name")
- Empty or undefined values will be exported as empty cells
- The function uses the first sheet named "Sheet1" in the workbook

## Dependencies

- `xlsx`: Library for Excel file generation and manipulation
