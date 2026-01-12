<template>
  <bk-breadcrumb separator="/">
    <bk-breadcrumb-item :to="{ path: '/' }">homepage</bk-breadcrumb-item>
    <bk-breadcrumb-item>
      <a href="/">promotion management</a>
    </bk-breadcrumb-item>
    <bk-breadcrumb-item>promotion list</bk-breadcrumb-item>
    <bk-breadcrumb-item>promotion detail</bk-breadcrumb-item>
  </bk-breadcrumb>

  <el-divider></el-divider>

  <bk-breadcrumb :items="items" :currentItem="currentItem" separator="/"></bk-breadcrumb>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import type { BreadcrumbItem } from "vue-business-kit"

const items = reactive<BreadcrumbItem[]>([
  {
    id: 1,
    menuName: "homepage",
    link: "/",
    children: [
      {
        id: 2,
        menuName: "promotion management",
        link: "/promotion_management",
        children: [
          {
            id: 3,
            menuName: "promotion list",
            link: "/promotion_management/promotion_list",
            children: [
              {
                id: 4,
                menuName: "promotion detail",
                link: "/promotion_management/promotion_list/promotion_detail"
              }
            ]
          }
        ]
      }
    ]
  }
])
const currentItem = ref("/promotion_management/promotion_list/promotion_detail")
</script>
