<template>
  <bk-button plain @click="centerDialogVisible = true"> Click to open the Dialog </bk-button>

  <bk-dialog v-model="centerDialogVisible" title="Warning" width="500" align-center>
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <bk-button @click="centerDialogVisible = false">Cancel</bk-button>
        <bk-button type="primary" @click="centerDialogVisible = false"> Confirm </bk-button>
      </div>
    </template>
  </bk-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const centerDialogVisible = ref(false)
</script>
