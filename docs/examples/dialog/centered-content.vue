<template>
  <bk-button plain @click="centerDialogVisible = true"> Click to open the Dialog </bk-button>

  <bk-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span> It should be noted that the content will not be aligned in center by default </span>
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
