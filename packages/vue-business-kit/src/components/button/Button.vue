<script setup lang="ts">
import { computed, h, ref, useSlots } from "vue"
import type { Slots } from "vue"
import { ElButton } from "element-plus"
import type { ButtonInstance as ElButtonInstance } from "element-plus"
import type { ButtonInternalProps } from "./types"
import { BkIcon } from "../"

defineOptions({ name: "Button", inheritAttrs: false })

const props = defineProps<ButtonInternalProps>()

const slots: Readonly<Slots> = useSlots()

const elButtonRef = ref<ElButtonInstance | null>(null)

const iconComponent = computed(() => {
  if (!props.icon) return undefined
  if (typeof props.icon === "string") {
    return h(BkIcon, { icon: props.icon, size: 16 })
  }
  return props.icon
})

const loadingIconComponent = computed(() => {
  if (!props.loadingIcon) return undefined
  if (typeof props.loadingIcon === "string") {
    return h(BkIcon, { icon: props.loadingIcon, size: 16 })
  }
  return props.loadingIcon
})

defineExpose({ elButtonRef })
</script>

<template>
  <el-button
    class="bk-button"
    ref="elButtonRef"
    v-bind="$attrs"
    :icon="iconComponent"
    :loading-icon="loadingIconComponent"
  >
    <template v-for="name in Object.keys(slots)" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<style lang="scss" scoped></style>
