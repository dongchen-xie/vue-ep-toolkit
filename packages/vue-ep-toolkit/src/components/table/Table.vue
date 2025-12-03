<!-- 
 @Author: Chen 
 @Description: 
 -->
<script setup lang="ts">
import { ref, computed } from "vue"
import { ElTable, ElTableColumn, ElInput, ElSelect, ElOption, ElPagination } from "element-plus"
import type { EpTableProps, EpTableEmits } from "./types"
import { useTableSearch, useTablePagination, useTableMerge, useTableFormat } from "./composables"
import { useLocale } from "../../locale"

defineOptions({ name: "Table", inheritAttrs: false })

const props = withDefaults(defineProps<EpTableProps>(), {
  rawData: () => [],
  columns: () => [],
  mergeColumns: () => [],
  showSearch: false,
  searchValue: "",
  searchColumns: () => [],
  showRefresh: false,
  showExport: false,
  pagination: false,
  numberFormat: false
})

const emit = defineEmits<EpTableEmits>()

// el-table ref
const tableRef = ref<InstanceType<typeof ElTable>>()

// 使用组合式函数
const { searchText, selectedColumns, searchableColumns, searchedData, handleSearch } =
  useTableSearch(props, emit)

const { filteredData, paginationConfig, handleSizeChange, handleCurrentChange } =
  useTablePagination(props, searchedData, emit)

const { mergedSpanMethod } = useTableMerge(props, searchedData)

const { shouldFormatNumber, formatCellValue } = useTableFormat(props)

const locale = useLocale()
const t = computed(() => locale.value.ep.table)

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
  <div class="ep-table-container">
    <!-- 工具栏 -->
    <div v-if="showRefresh || showExport || showSearch" class="ep-table-toolbar">
      <div class="ep-table-toolbar-left">
        <EpButton v-if="showRefresh" @click="handleRefresh" icon="tabler:refresh">
          {{ t.refresh }}
        </EpButton>
        <EpButton v-if="showExport" @click="handleExport" icon="tabler:file-export">
          {{ t.export }}
        </EpButton>
      </div>
      <div class="ep-table-toolbar-right">
        <el-input
          v-if="showSearch"
          v-model="searchText"
          :placeholder="`${t.search}...`"
          clearable
          @input="handleSearch"
          class="ep-search-input"
        >
          <template #prepend>
            <el-select
              v-model="selectedColumns"
              :placeholder="t.column"
              multiple
              collapse-tags
              class="ep-search-select"
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
    <!-- 表格 -->
    <el-table ref="tableRef" v-bind="$attrs" :data="filteredData" :span-method="mergedSpanMethod">
      <el-table-column v-for="column in columns" :key="column.prop" v-bind="column">
        <template v-if="column.slots?.header" #header="scope">
          <slot :name="column.slots.header" v-bind="scope" />
        </template>
        <template v-if="column.slots?.default" #default="scope">
          <slot :name="column.slots.default" v-bind="scope" />
        </template>
        <template v-else #default="scope">
          <span v-if="shouldFormatNumber(column, scope.row[column.prop!])">
            {{ formatCellValue(scope.row[column.prop!]) }}
          </span>
          <span v-else>{{ scope.row[column.prop!] }}</span>
        </template>
      </el-table-column>
      <slot />
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="paginationConfig"
      v-bind="paginationConfig"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="ep-pagination"
    />
  </div>
</template>
<style scoped>
.ep-table-container {
  width: 100%;
}
.ep-table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.ep-table-toolbar-left {
  display: flex;
  gap: 8px;
}
.ep-table-toolbar-right {
  display: flex;
  gap: 8px;
}
.ep-search-input {
  width: 300px;
}
.ep-search-select {
  width: 120px;
}
.ep-pagination {
  margin-top: 16px;
  float: right;
}
</style>
