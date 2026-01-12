<template>
  <bk-button plain @click="outerVisible = true"> Open the outer Dialog </bk-button>

  <bk-dialog v-model="outerVisible" title="Outer Dialog" width="800">
    <span>This is the outer Dialog</span>
    <bk-dialog v-model="innerVisible" width="500" title="Inner Dialog" append-to-body>
      <span>This is the inner Dialog</span>
    </bk-dialog>
    <template #footer>
      <div class="dialog-footer">
        <bk-button @click="outerVisible = false">Cancel</bk-button>
        <bk-button type="primary" @click="innerVisible = true"> Open the inner Dialog </bk-button>
      </div>
    </template>
  </bk-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
