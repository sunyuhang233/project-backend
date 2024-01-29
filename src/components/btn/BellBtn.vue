<script setup lang="ts"></script>

<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #reference>
      <i
        i-solar:bell-broken
        class="mr-2 p-0.5em transition-300 hover:(i-solar:bell-bold animate-swing bg-[--el-color-info])"></i>
    </template>
    <div>
      <small class="text-center">暂无消息</small>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped></style>
