<script setup lang="ts">
import { computed } from "vue"
import {
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElSwitch,
  ElDatePicker,
  ElTimePicker,
  ElSlider,
  ElRate,
  ElCascader,
  ElInputNumber,
  ElUpload,
  ElColorPicker,
  ElTransfer,
  ElAutocomplete,
  ElDivider,
  ElButton,
  ElInputTag
} from "element-plus"
import { omit } from "lodash-es"
import type { FormItemCtx } from "../types"

interface Props {
  item: FormItemCtx
  model: Record<string, any>
}

const props = defineProps<Props>()

const typeMap: Record<string, any> = {
  autocomplete: ElAutocomplete,
  cascader: ElCascader,
  checkbox: ElCheckbox,
  "checkbox-group": ElCheckboxGroup,
  "color-picker": ElColorPicker,
  "date-picker": ElDatePicker,
  input: ElInput,
  "input-number": ElInputNumber,
  "input-tag": ElInputTag,
  radio: ElRadio,
  "radio-group": ElRadioGroup,
  rate: ElRate,
  select: ElSelect,
  slider: ElSlider,
  switch: ElSwitch,
  "time-picker": ElTimePicker,
  transfer: ElTransfer,
  upload: ElUpload,
  divider: ElDivider,
  button: ElButton
}

const Comp = computed(() => typeMap[props.item.type] || props.item.type)

const omitItem = computed(() => omit(props.item, ["type", "componentProps", "children", "slot"]))
</script>
<template>
  <el-form-item v-bind="omitItem">
    <component
      :is="Comp"
      :style="{ width: '100%' }"
      v-model="model[item.prop as string]"
      v-bind="item.componentProps || {}"
    >
      <!-- Select Options -->
      <template v-if="item.type === 'select' && item.children?.length">
        <el-option
          v-for="opt in item.children"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
          v-bind="opt.componentProps || {}"
        />
      </template>

      <!-- Checkbox Group -->
      <template v-else-if="item.type === 'checkbox-group' && item.children?.length">
        <el-checkbox
          v-for="opt in item.children"
          :key="opt.value"
          :label="opt.value"
          v-bind="opt.componentProps || {}"
        >
          {{ opt.label }}
        </el-checkbox>
      </template>

      <!-- Radio Group -->
      <template v-else-if="item.type === 'radio-group' && item.children?.length">
        <component
          :is="item.componentProps?.type === 'button' ? 'el-radio-button' : 'el-radio'"
          v-for="opt in item.children"
          :key="opt.value"
          :label="opt.value"
          v-bind="opt.componentProps || {}"
        >
          {{ opt.label }}
        </component>
      </template>
    </component>
  </el-form-item>
</template>
