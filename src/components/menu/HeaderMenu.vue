<script setup lang="ts">
import { useUserStore } from '@/stores'
const userStore = useUserStore()

function userQuiteClick() {
  userStore.userQuite()
}
</script>

<template>
  <header class="z-1000 block w-full flex-row-bt-c header flex px-4 md:px-6">
    <div class="left flex items-center cursor-pointer">
      <!-- Logo -->
      <RouterLink to="/" class="group relative">
        <img class="h-2.4rem w-2.4rem object-cover dark:hidden" src="@/assets/images/logo/logo.png" alt="" />
        <img class="h-2.4rem w-2.4rem object-cover hidden dark:block" src="@/assets/images/logo/logo_dark.png" alt="" />
        <i
          i-solar:home-2-bold
          p-0.8rem
          class="absolute left-0.4rem top-0.4rem opacity-0 transition-300 group-hover:text-dark group-hover:opacity-100 dark:group-hover:text-white"></i>
      </RouterLink>
      <strong
        class="ml-3 hidden truncate font-600 tracking-0.2em transition-300 md:block hover:text-[var(--el-color-primary)]"
        >通用后台</strong
      >
      <!-- Select -->
      select
    </div>
    <div class="right flex-row-c-c">
      <!-- Message -->
      <BellBtn />
      <!-- Quit -->
      <el-button round style="padding: 0.5em" @click="userQuiteClick">
        <i i-solar:power-bold p-0.5em />
      </el-button>
      <!-- Theme -->
      <ThemeSwitch />
      <!-- User -->
      <UserCard />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: $top-nav-height;
}
</style>
