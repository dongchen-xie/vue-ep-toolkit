<script setup lang="ts">
import { computed, h, ref } from "vue"
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus"
import type { BreadcrumbInternalProps } from "./types"
import { useBreadcrumb } from "./composables"
import { BkIcon } from "../icon"

defineOptions({
  name: "Breadcrumb",
  inheritAttrs: false
})

const props = defineProps<BreadcrumbInternalProps>()

const elBreadcrumbRef = ref<InstanceType<typeof ElBreadcrumb>>()

const { breadcrumbItems } = useBreadcrumb(props)

const separatorIconComponent = computed(() => {
  if (!props.separatorIcon) return undefined
  if (typeof props.separatorIcon === "string") {
    return h(BkIcon, { icon: props.separatorIcon, size: 16 })
  }
  return props.separatorIcon
})

defineExpose({ elBreadcrumbRef })
</script>

<template>
  <div class="bk-breadcrumb">
    <el-breadcrumb ref="elBreadcrumbRef" v-bind="$attrs" :separator-icon="separatorIconComponent">
      <template v-if="breadcrumbItems && breadcrumbItems.length">
        <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id" :to="item.link">
          <template v-if="item.icon">
            <bk-icon :icon="item.icon" :size="24"></bk-icon>
          </template>
          {{ item.menuName }}
        </el-breadcrumb-item>
      </template>
      <slot />
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped>
.bk-breadcrumb {
  .el-icon {
    margin-right: 6px;
  }
}
</style>
