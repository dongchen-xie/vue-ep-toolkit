<script setup lang="ts">
import { ref, computed, onMounted, watch, useAttrs } from "vue"
import { ElTable, ElInput, ElSelect, ElOption, ElPagination } from "element-plus"
import { useTableSearch, useTablePagination, useTableMerge, useTableFormat } from "./composables"
import { useLocale } from "../../locale"
import TableColumn from "./TableColumn.vue"
import BkButton from "../button/Button.vue"
import { BkTableEmits, BkTableInternalProps, BkTableProps } from "./types"

defineOptions({ name: "BkTable", inheritAttrs: false })

const props = withDefaults(defineProps<BkTableInternalProps>(), {
  rawData: () => [],
  columns: () => [],
  mergeColumns: () => [],
  showSearch: false,
  searchValue: "",
  searchColumns: () => [],
  showRefresh: false,
  showExport: false,
  pagination: false,
  numberFormat: false,
  defaultSelection: undefined,
  disabledSelection: undefined
})

const emit = defineEmits<BkTableEmits>()
const attrs = useAttrs() as Partial<BkTableProps>

// el-table ref
const tableRef = ref<InstanceType<typeof ElTable>>()

// 使用组合式函数
const { searchText, selectedColumns, searchableColumns, searchedData, handleSearch } =
  useTableSearch(props, emit)

const { filteredData, paginationConfig, handleSizeChange, handleCurrentChange } =
  useTablePagination(props, searchedData, emit)

const { mergedSpanMethod } = useTableMerge(props, searchedData, attrs)

const { shouldFormatNumber, formatCellValue } = useTableFormat(props)

const locale = useLocale()
const t = computed(() => locale.value.ep.table)

// Default selection
const initSelection = () => {
  if (!props.defaultSelection || !tableRef.value) return
  const hasSelection = props.columns?.some((col) => col.type === "selection")
  if (!hasSelection) return

  const rowKey = (tableRef.value as any).rowKey
  if (props.defaultSelection === true) {
    filteredData.value.forEach((row: any) => tableRef.value!.toggleRowSelection(row, true))
  } else if (Array.isArray(props.defaultSelection)) {
    const selectionIds = props.defaultSelection
    filteredData.value.forEach((row: any) => {
      const id = rowKey ? row[rowKey] : row.id
      if (selectionIds.includes(id)) {
        tableRef.value!.toggleRowSelection(row, true)
      }
    })
  }
}

// Disable selection
const selectable = (row: any) => {
  if (!props.disabledSelection) return true
  const hasSelection = props.columns?.some((col) => col.type === "selection")
  if (!hasSelection) return true

  const rowKey = (tableRef.value as any)?.rowKey
  const id = rowKey ? row[rowKey] : row.id
  if (props.disabledSelection === true) return false
  if (Array.isArray(props.disabledSelection)) {
    return !props.disabledSelection.includes(id)
  }
  return true
}

onMounted(() => {
  initSelection()
})

watch(
  () => filteredData.value,
  () => {
    initSelection()
  }
)

const handleRefresh = () => {
  emit("refresh")
}

const handleExport = () => {
  emit("export", filteredData.value, props.columns || [])
}

// 暴露 el-table 的所有方法
defineExpose({ tableRef })
</script>
<template>
  <div class="bk-table-container">
    <div class="bk-table-toolbar">
      <div class="bk-table-toolbar-left">
        <BkButton v-if="showRefresh" @click="handleRefresh" icon="tabler:refresh">
          {{ t.refresh }}
        </BkButton>
        <BkButton v-if="showExport" @click="handleExport" icon="tabler:file-export">
          {{ t.export }}
        </BkButton>
        <slot name="toolbar-left" />
      </div>
      <div class="bk-table-toolbar-right">
        <el-input
          v-if="showSearch"
          v-model="searchText"
          :placeholder="`${t.search}...`"
          clearable
          @input="handleSearch"
          class="bk-search-input"
        >
          <template #prepend>
            <el-select
              v-model="selectedColumns"
              :placeholder="t.column"
              multiple
              collapse-tags
              class="bk-search-select"
            >
              <el-option
                v-for="col in searchableColumns"
                :key="col.prop"
                :label="col.label"
                :value="col.prop!"
              />
            </el-select>
          </template>
        </el-input>
      </div>
    </div>
    <el-table ref="tableRef" v-bind="$attrs" :data="filteredData" :span-method="mergedSpanMethod">
      <TableColumn
        v-for="column in columns"
        :key="column.prop || column.label"
        :column="column.type === 'selection' ? { ...column, selectable } : column"
        :should-format-number="shouldFormatNumber"
        :format-cell-value="formatCellValue"
      >
        <template v-for="(_, name) in $slots" #[name]="scope">
          <slot :name="name" v-bind="scope" />
        </template>
      </TableColumn>
      <slot />
    </el-table>
    <el-pagination
      v-if="paginationConfig"
      v-bind="paginationConfig"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="bk-pagination"
    />
  </div>
</template>
<style scoped>
.bk-table-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.bk-table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.bk-table-toolbar-left {
  display: flex;
  gap: 8px;
}
.bk-table-toolbar-right {
  display: flex;
  gap: 8px;
}
.bk-search-input {
  width: 400px;
}
.bk-search-select {
  width: 140px;
}
.bk-pagination {
  margin-top: 16px;
  align-self: flex-end;
}
</style>
