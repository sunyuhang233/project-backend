<script setup lang="ts"></script>

<template>
  <header class="z-1000 block w-full flex-row-bt-c header flex px-4 md:px-6">
    <div class="left flex items-center cursor-pointer">
      <strong
        class="ml-3 hidden truncate font-600 tracking-0.2em transition-300 md:block hover:text-[var(--el-color-primary)]"
        >通用后台</strong
      >
    </div>
    <div class="right flex-row-c-c">
      <!-- 退出登录 -->
      <el-button round style="padding: 0.5em">
        <i i-solar:power-bold p-0.5em />
      </el-button>
      <!-- Theme -->
      <ThemeSwitch />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: $top-nav-height;
}
</style>
