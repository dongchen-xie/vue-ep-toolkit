<template>
  <div class="guide-design mt-20px">
    <div class="el-row cards" style="margin-left: -7px; margin-right: -7px">
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-8 is-guttered">
        <div class="card">
          <element-svg m="4" w="20" alt="Element Plus" />
          <p>Element Plus</p>
          <span class="desc">UI Components</span>
        </div>
      </div>
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-8 is-guttered">
        <div class="card">
          <lodash-svg m="4" w="20" alt="Lodash" />
          <p>Lodash</p>
          <span class="desc">Utility Functions</span>
        </div>
      </div>
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-8 is-guttered">
        <div class="card">
          <efficiency-svg m="4" w="20" alt="Custom Functions" />
          <p>Custom Functions</p>
          <span class="desc">Enhanced Features</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.el-col {
  padding: 0 7px;
}
.card {
  background: var(--el-fill-color-lighter);
  height: 204px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin: 1rem;
    width: 5rem;
    height: 5rem;
  }

  p {
    margin: 0.5rem 0 0.25rem;
    font-weight: 600;
  }

  .desc {
    font-size: 0.875rem;
    color: var(--el-text-color-secondary);
  }
}

@media screen and (max-width: 767px) {
  .el-col {
    padding-bottom: 8px;
  }
}
</style>
