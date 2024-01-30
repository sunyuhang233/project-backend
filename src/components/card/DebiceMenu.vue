<script setup lang="ts">
import { useBattery } from '@vueuse/core'

const betteryInfo = useBattery(window)
</script>

<template>
  <div class="device-card flex items-center" v-if="betteryInfo.isSupported.value">
    <i
      :class="
        betteryInfo.charging.value
          ? 'bg-[var(--el-color-info)] i-carbon:battery-charging'
          : 'opacity-80 i-carbon:battery-full'
      "
      p-4
      mr-2></i>
    <div class="flex-1">
      <small>{{ betteryInfo.charging.value ? '正在充电' : '放电中' }}</small>
      <el-progress
        striped
        :duration="10"
        :striped-flow="betteryInfo.charging.value"
        :color="betteryInfo.charging.value ? 'var(--el-color-info)' : 'var(--el-color-warning)'"
        :percentage="betteryInfo.level.value * 100" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.device-card {
  --at-apply: 'v-card border-default  p-2 px-4';
}
</style>
