<script setup lang="ts">
import { onMounted } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

onMounted(() => {
  const loadingBox = document.querySelector<HTMLDivElement>('.loading-box')
  if (loadingBox) {
    loadingBox.style.opacity = '0'
    setTimeout(() => {
      loadingBox.style.display = 'none'
    }, 2000)
  }
})
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
