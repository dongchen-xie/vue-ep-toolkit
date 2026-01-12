<template>
  <bk-button plain @click="dialogVisible = true"> Open the event Dialog </bk-button>

  <bk-dialog
    v-model="dialogVisible"
    modal-class="overide-animation"
    :before-close="
      (doneFn) => {
        console.log('before-close'), doneFn()
      }
    "
    @open="console.log('open')"
    @open-auto-focus="console.log('open-auto-focus')"
    @opened="console.log('opened')"
    @close="console.log('close')"
    @close-auto-focus="console.log('close-auto-focus')"
    @closed="console.log('closed')"
  >
    <span>It's a event Dialog</span>
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
