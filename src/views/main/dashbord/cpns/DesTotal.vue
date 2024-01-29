<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { ref } from 'vue'
import OrderPie from './OrdersPie.vue'

const isShowChart = ref(true)
</script>

<template>
  <div class="des-page overflow-hidden group">
    <h3 class="flex items-center truncate">
      数据统计（{{ new Date().getMonth() + 1 }}月）
      <small hidden text-0.7rem opacity-60 md:block
        >数据更新时间：{{ useDateFormat(Date.now(), 'YYYY-MM-DD HH:mm:ss').value }}</small
      >
      <div class="ml-a flex-row-c-c opacity-0 transition-300 group-hover:opacity-100">
        <small class="mr-2 flex items-center text-0.8rem tracking-0.2em"
          >统计图
          <el-switch v-model="isShowChart" size="small" class="ml-1" />
        </small>
      </div>
    </h3>
    <section>
      <div grid="~ md:cols-2 gap-6 " mt-4>
        <div class="flex-row-c-c border-transparent rounded-12px px-6 pt-6 border-default dark:border-1px v-card">
          <OrderPie chart-class="w-300px h-300px" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
