<template>
  <bk-button plain @click="centerDialogVisible = true"> Click to open Dialog </bk-button>

  <bk-dialog v-model="centerDialogVisible" title="Notice" width="500" destroy-on-close center>
    <span>
      Notice: before the dialog is opened for the first time, this node and the one below will not
      be rendered.
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
