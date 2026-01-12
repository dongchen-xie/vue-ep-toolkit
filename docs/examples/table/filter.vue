<template>
  <bk-button @click="resetDateFilter">reset date filter</bk-button>
  <bk-button @click="clearFilter">reset all filters</bk-button>
  <bk-table ref="tableRef" row-key="date" :raw-data="tableData" style="width: 100%">
    <bk-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' }
      ]"
      :filter-method="filterHandler"
    />
    <bk-table-column prop="name" label="Name" width="180" />
    <bk-table-column prop="address" label="Address" :formatter="formatter" />

    <bk-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' }
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{
          scope.row.tag
        }}</el-tag>
      </template>
    </bk-table-column>
  </bk-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx, TableInstance } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  tableRef.value!.elTableRef!.clearFilter(["date"])
}
const clearFilter = () => {
  tableRef.value!.elTableRef!.clearFilter()
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (value: string, row: User, column: TableColumnCtx<User>) => {
  const property = column["property"] as string
  return row[property] === value
}

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  }
]
</script>
