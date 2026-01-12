<template>
  <bk-button plain @click="dialogVisible = true"> Open the modal Dialog </bk-button>

  <bk-dialog v-model="dialogVisible" :modal="false" modal-penetrable>
    <span>It's a modal Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <bk-button @click="dialogVisible = false">Cancel</bk-button>
        <bk-button type="primary" @click="dialogVisible = false"> Confirm </bk-button>
      </div>
    </template>
  </bk-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const dialogVisible = ref(false)
</script>
