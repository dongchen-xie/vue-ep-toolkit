<template>
  <div class="button-example">
    <div class="button-row">
      <bk-button>Default</bk-button>
      <bk-button type="primary">Primary</bk-button>
      <bk-button type="success">Success</bk-button>
      <bk-button type="info">Info</bk-button>
      <bk-button type="warning">Warning</bk-button>
      <bk-button type="danger">Danger</bk-button>
    </div>

    <div class="button-row">
      <bk-button plain>Plain</bk-button>
      <bk-button type="primary" plain>Primary</bk-button>
      <bk-button type="success" plain>Success</bk-button>
      <bk-button type="info" plain>Info</bk-button>
      <bk-button type="warning" plain>Warning</bk-button>
      <bk-button type="danger" plain>Danger</bk-button>
    </div>

    <div class="button-row">
      <bk-button round>Round</bk-button>
      <bk-button type="primary" round>Primary</bk-button>
      <bk-button type="success" round>Success</bk-button>
      <bk-button type="info" round>Info</bk-button>
      <bk-button type="warning" round>Warning</bk-button>
      <bk-button type="danger" round>Danger</bk-button>
    </div>

    <div class="button-row">
      <bk-button icon="tabler:search" circle />
      <bk-button type="primary" icon="tabler:edit" circle />
      <bk-button type="success" icon="tabler:check" circle />
      <bk-button type="info" icon="tabler:message" circle />
      <bk-button type="warning" icon="tabler:star" circle />
      <bk-button type="danger" icon="tabler:trash" circle />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "basic"
})
</script>
<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
