<template>
  <bk-button plain @click="visible = true"> Open Dialog with customized header </bk-button>

  <bk-dialog v-model="visible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <bk-button type="danger" @click="close">
          <bk-icon class="el-icon--left" icon="tabler:circle-x-filled"></bk-icon>
          Close
        </bk-button>
      </div>
    </template>
    This is dialog content.
  </bk-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
