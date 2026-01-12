<template>
  <bk-button plain @click="dialogVisible = true"> Open the fullscreen Dialog </bk-button>

  <bk-dialog v-model="dialogVisible" fullscreen>
    <span>It's a fullscreen Dialog</span>
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
