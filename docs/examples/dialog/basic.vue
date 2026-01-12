<template>
  <bk-button plain @click="dialogVisible = true"> Click to open the Dialog </bk-button>

  <bk-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
    class="el-dialog-fade"
  >
    <span>This is a message</span>
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
import { ElMessageBox } from "vue-business-kit"

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
