<template>
  <el-radio-group v-model="tableLayout">
    <el-radio-button value="fixed">fixed</el-radio-button>
    <el-radio-button value="auto">auto</el-radio-button>
  </el-radio-group>
  <bk-table :raw-data="tableData" :table-layout="tableLayout">
    <bk-table-column prop="date" label="Date" />
    <bk-table-column prop="name" label="Name" />
    <bk-table-column prop="address" label="Address" />
  </bk-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const tableLayout = ref<string>("fixed")

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]
</script>
