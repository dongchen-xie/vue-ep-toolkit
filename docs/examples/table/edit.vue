<template>
  <bk-form label-width="auto" :model="configForm" :items="configFormItems" style="max-width: 600px">
  </bk-form>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    enable-edit
    show-batch
    :editMode="configForm.editMode"
    :editPosition="configForm.editPosition"
    rowKey="id"
    highlight-current-row
    @add="handleEvent"
    @edit="handleEvent"
    @delete="handleEvent"
    @batch="handleEvent"
  >
  </bk-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { FormItemCtx, TableColumnItem } from "vue-business-kit"

interface User {
  id: number
  date: string
  name: string
  address: string
}

const configForm = ref<{
  editMode?: "dialog" | "drawer"
  editPosition?: "outside" | "inline"
}>({
  editMode: "dialog",
  editPosition: "outside"
})
const tableData = ref<User[]>([
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
])

const columns: TableColumnItem[] = [
  { type: "selection" },
  {
    prop: "id",
    label: "ID",
    width: 100,
    edit: {
      type: "input",
      componentProps: {
        disabled: true
      }
    }
  },
  {
    prop: "date",
    label: "Date",
    width: 180,
    edit: {
      type: "date-picker",
      componentProps: {
        valueFormat: "YYYY-MM-DD"
      }
    }
  },
  {
    prop: "name",
    label: "Name",
    width: 180
  },
  {
    prop: "address",
    label: "Address"
  }
]

const configFormItems: FormItemCtx[] = [
  {
    label: "Edit Mode",
    type: "radio-group",
    prop: "editMode",
    labelPosition: "right",
    componentProps: {
      type: "button"
    },
    children: [
      { label: "Dialog", value: "dialog" },
      { label: "Drawer", value: "drawer" }
    ]
  },
  {
    label: "Edit Position",
    type: "radio-group",
    prop: "editPosition",
    componentProps: {
      type: "button"
    },
    children: [
      { label: "Outside", value: "outside" },
      { label: "Inline", value: "inline" }
    ]
  }
]

const handleEvent = (params: { action: string; data: any }) => {
  switch (params.action) {
    case "add":
      handleAdd([params.data])
      break
    case "edit":
      const targetIndex = tableData.value.findIndex((user) => user.id === params.data.id)
      tableData.value[targetIndex] = params.data
      break
    case "delete":
      handleDelete(params.data)
      break
    case "batch_add":
      handleAdd(params.data)
      break
    case "batch_delete":
      handleDelete(params.data)
      break
  }
  function handleAdd(users: User[]) {
    users.map((user) => {
      tableData.value.push({
        ...user,
        id: tableData.value.length + 1
      })
    })
  }
  function handleDelete(users: User[]) {
    const delIdList = users.map((row) => row.id)
    tableData.value = tableData.value.filter((user) => !delIdList.includes(user.id))
  }
}
</script>
