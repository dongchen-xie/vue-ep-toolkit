<script setup lang="ts">
import { computed } from "vue"
import { ElTableColumn } from "element-plus"
import type { EpTableColumnProps } from "./types"
import { omit } from "lodash-es"

defineOptions({ name: "TableColumn" })

const props = defineProps<{
  column: EpTableColumnProps
  shouldFormatNumber: (column: EpTableColumnProps, value: any) => boolean
  formatCellValue: (value: any) => string
}>()

const getSlotName = (type: "default" | "header") => {
  const slots = props.column.slots
  if (slots === true) return `${props.column.prop}-${type}`
  if (typeof slots === "object") {
    const slot = slots[type]
    if (slot === true) return `${props.column.prop}-${type}`
    return slot || undefined
  }
  return undefined
}

const defaultSlotName = computed(() => getSlotName("default"))
const headerSlotName = computed(() => getSlotName("header"))
</script>
<template>
  <el-table-column v-bind="omit(column, 'children')">
    <!-- <template v-if="column.slots?.header" #header="scope">
      <slot :name="column.slots.header" v-bind="scope" />
    </template> -->
    <template v-if="column.children?.length">
      <TableColumn
        v-for="child in column.children"
        :key="child.prop || child.label"
        :column="child"
        :should-format-number="shouldFormatNumber"
        :format-cell-value="formatCellValue"
      >
        <!-- @vue-ignore -->
        <template v-for="(_, name) in $slots" #[name]="scope">
          <slot :name="name" v-bind="scope" />
        </template>
      </TableColumn>
    </template>
    <template v-if="headerSlotName" #header="scope">
      <slot :name="headerSlotName" v-bind="scope" />
    </template>
    <template v-if="defaultSlotName" #default="scope">
      <slot :name="defaultSlotName" v-bind="scope" />
    </template>
    <!-- <template v-else-if="column.type != 'selection'" #default="scope">
      <span v-if="shouldFormatNumber(column, scope.row[column.prop!])">
        {{ formatCellValue(scope.row[column.prop!]) }}
      </span>
      <span v-else>{{ scope.row[column.prop!] }}</span>
    </template> -->
  </el-table-column>
</template>
