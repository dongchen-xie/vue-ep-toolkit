<template>
  <div class="flex flex-wrap gap-1">
    <bk-button class="!ml-0" plain @click="dialogTableVisible = true">
      Open a Table nested Dialog
    </bk-button>

    <bk-button class="!ml-0" plain @click="dialogFormVisible = true">
      Open a Form nested Dialog
    </bk-button>
  </div>

  <bk-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
    <bk-table :raw-data="gridData">
      <bk-table-column property="date" label="Date" width="150" />
      <bk-table-column property="name" label="Name" width="200" />
      <bk-table-column property="address" label="Address" />
    </bk-table>
  </bk-dialog>

  <bk-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <bk-form :model="form">
      <bk-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </bk-form-item>
      <bk-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </bk-form-item>
    </bk-form>
    <template #footer>
      <div class="dialog-footer">
        <bk-button @click="dialogFormVisible = false">Cancel</bk-button>
        <bk-button type="primary" @click="dialogFormVisible = false"> Confirm </bk-button>
      </div>
    </template>
  </bk-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = "140px"

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
})

const gridData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District"
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District"
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District"
  },
  {
    date: "2016-05-03",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District"
  }
]
</script>
