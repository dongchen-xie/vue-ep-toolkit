<template>
  <div class="button-example">
    <div class="button-row">
      <bk-button disabled>Default</bk-button>
      <bk-button type="primary" disabled>Primary</bk-button>
      <bk-button type="success" disabled>Success</bk-button>
      <bk-button type="info" disabled>Info</bk-button>
      <bk-button type="warning" disabled>Warning</bk-button>
      <bk-button type="danger" disabled>Danger</bk-button>
    </div>

    <div class="button-row">
      <bk-button plain disabled>Plain</bk-button>
      <bk-button type="primary" plain disabled>Primary</bk-button>
      <bk-button type="success" plain disabled>Success</bk-button>
      <bk-button type="info" plain disabled>Info</bk-button>
      <bk-button type="warning" plain disabled>Warning</bk-button>
      <bk-button type="danger" plain disabled>Danger</bk-button>
    </div>
  </div>
</template>

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
