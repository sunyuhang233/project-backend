<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
function useNowDateText(date: Date = new Date()): string {
  const hours = date.getHours()
  let res = ''
  if (hours > 0 && hours < 6) res = '😴'
  else if (hours < 12) res = '早上好 🏆'
  else if (hours === 12) res = '中午好 🍕'
  else if (hours > 12 && hours < 18) res = '下午好 ☕'
  else res = '晚上好 🌜'
  return res
}
const nowDateText = computed(() => useNowDateText())
</script>

<template>
  <div class="mb-4">
    <h3 class="mb-4">Hi {{ userStore.userInfo.nickname }},</h3>
    <h2 class="mb-2">欢迎回来,{{ nowDateText }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>
