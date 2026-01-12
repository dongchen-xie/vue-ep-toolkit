<template>
  <bk-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    status-icon
    class="demo-ruleForm"
  >
    <bk-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </bk-form-item>
    <bk-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </bk-form-item>
    <bk-form-item label="Age" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </bk-form-item>
    <bk-form-item>
      <bk-button type="primary" @click="submitForm(ruleFormRef)"> Create </bk-button>
      <bk-button @click="resetForm(ruleFormRef)">Reset</bk-button>
    </bk-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { FormInstance, FormRules } from "vue-business-kit"

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"))
    } else {
      if (value < 18) {
        callback(new Error("Age must be greater than 18"))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"))
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return
      ruleFormRef.value.elFormRef?.validateField("checkPass")
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: ""
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "blur" }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.elFormRef?.validate((valid) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!")
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.elFormRef?.resetFields()
}
</script>
