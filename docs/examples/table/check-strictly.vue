<template>
  <el-radio-group v-model="treeProps.checkStrictly">
    <el-radio-button :value="true" label="true" />
    <el-radio-button :value="false" label="false" />
  </el-radio-group>
  <bk-table :raw-data="tableData" :tree-props="treeProps" row-key="id" default-expand-all>
    <bk-table-column type="selection" width="55" :selectable="selectable" />
    <bk-table-column prop="date" label="Date" />
    <bk-table-column prop="name" label="Name" />
    <bk-table-column prop="address" label="Address" />
  </bk-table>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const treeProps = reactive({
  checkStrictly: false
})

const selectable = (row: User) => ![1, 31].includes(row.id)

const tableData: User[] = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      }
    ]
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  }
]
</script>
