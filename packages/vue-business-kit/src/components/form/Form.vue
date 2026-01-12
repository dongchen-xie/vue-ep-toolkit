<script setup lang="ts">
import { ref } from "vue"
import BkFormItemRender from "./renderers/FormItemRender.vue"
import type { FormInternalProps } from "./types"
import { ElForm, ElRow, ElCol } from "element-plus"

defineOptions({ name: "Form", inheritAttrs: false })

const props = withDefaults(defineProps<FormInternalProps>(), {
  items: () => [],
  colNum: 1
})

const elFormRef = ref<InstanceType<typeof ElForm>>()

defineExpose({ elFormRef })
</script>
<template>
  <el-form class="bk-form" ref="elFormRef" v-bind="$attrs">
    <el-row :gutter="24" v-if="props.items">
      <el-col :span="24 / colNum" v-for="(item, _index) in props.items" :key="_index">
        <BkFormItemRender :item="item" :model="($attrs.model as any)"> </BkFormItemRender>
      </el-col>
    </el-row>
    <slot />
  </el-form>
</template>
