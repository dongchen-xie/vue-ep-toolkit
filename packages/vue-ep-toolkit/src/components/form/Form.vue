<script setup lang="ts">
import { ref, useAttrs } from "vue"
import EpFormItemRender from "./renderers/FormItemRender"
import type { EpFormInternalProps, EpFormEmits } from "./types"
import { ElForm } from "element-plus"

defineOptions({ name: "EpForm", inheritAttrs: false })

const props = withDefaults(defineProps<EpFormInternalProps>(), {
  items: () => []
})
const emit = defineEmits<EpFormEmits>()
const attrs = useAttrs()

// el-form ref
const formRef = ref<InstanceType<typeof ElForm>>()

defineExpose({ formRef })
</script>
<template>
  <el-form ref="formRef" v-bind="attrs">
    <!-- <template v-for="(item, index) in props.items" :key="index">
      <EpFormItemRender :item="item" :model="props.model">
        <template v-for="(_, name) in $slots" #[name]="scope">
          <slot :name="name" v-bind="scope" />
        </template>
      </EpFormItemRender>
    </template>
    <slot /> -->
  </el-form>
</template>
