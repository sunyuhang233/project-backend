<script setup lang="ts">
import { onMounted } from 'vue'

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
  <router-view />
</template>

<style lang="scss" scoped></style>
