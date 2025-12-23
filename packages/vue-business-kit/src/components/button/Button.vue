<script setup lang="ts">
import { computed, h, ref } from "vue"
import { ElButton } from "element-plus"
import type { BkButtonInternalProps } from "./types"
import Icon from "../icon/Icon.vue"

defineOptions({ name: "BkButton", inheritAttrs: false })

const props = defineProps<BkButtonInternalProps>()

const buttonRef = ref<InstanceType<typeof ElButton>>()

const iconComponent = computed(() => {
  if (!props.icon) return undefined
  if (typeof props.icon === "string") {
    return h(Icon, { icon: props.icon })
  }
  return props.icon
})

const loadingIconComponent = computed(() => {
  if (!props.loadingIcon) return undefined
  if (typeof props.loadingIcon === "string") {
    return h(Icon, { icon: props.loadingIcon })
  }
  return props.loadingIcon
})

defineExpose({ buttonRef })
</script>

<template>
  <el-button
    ref="buttonRef"
    v-bind="$attrs"
    :icon="iconComponent"
    :loading-icon="loadingIconComponent"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<style lang="scss" scoped></style>
