<script lang="ts" setup>
import { THEME_KEY } from 'vue-echarts'

import { useColorMode, useDateFormat, watchDebounced } from '@vueuse/core'
enum DateTimeType {
  DAY = 0,
  MONTH = 1,
  YEAR = 2,
}
const isLoading = ref(false)
// 主题
provide(THEME_KEY, useColorMode())
const menu = [
  { label: '本日', value: DateTimeType.DAY },
  { label: '本月', value: DateTimeType.MONTH },
  { label: '本年', value: DateTimeType.YEAR },
]

// echarts配置 图表数据
const option = ref({
  color: ['#0bdb85', '#fc2929'],
  title: {
    textStyle: {
      fontFamily: 'Alimama',
    },
  },
  tooltip: { trigger: 'axis' },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    boundaryGap: false,
    type: 'category',
    data: ['2024-01-30', '2024-01-31', '2024-02-01', '2024-02-02', '2024-02-03', '2024-02-04', '2024-02-05'],
  },
  yAxis: {
    name: '金额（￥）',
    type: 'value',
  },
  backgroundColor: 'transparent',
  dataZoom: { type: 'inside' },
  grid: {
    top: '16%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    containLabel: false,
  },
  legend: {
    data: ['订单量', '销售额'],
  },
  series: [
    {
      name: '订单量',
      data: [100, 200, 360, 100, 200, 300, 400],
      type: 'line',
      smooth: true,
      stack: 'x',
    },
    {
      name: '销售额',
      data: [500, 200, 360, 100, 200, 300, 400],
      type: 'line',
      smooth: true,
      stack: 'x',
    },
  ],
})

const menuType = ref(DateTimeType.DAY)

// 日期选择
const handleSelectChange = (value: DateTimeType) => {
  menuType.value = value
}
</script>

<template>
  <div v-loading="isLoading" class="group overflow-hidden">
    <div mb-2 flex-row-c-c justify-between>
      <h4>订单统计</h4>
      <!-- 日期 -->
      <div class="opacity-0 transition-200 group-hover:opacity-100">
        <div class="w-6rem text-center flex-shrink-0">
          <small-btn :menu="menu" @change="handleSelectChange" />
        </div>
      </div>
    </div>
    <section class="min-h-320px w-full flex-row-c-c p-2">
      <v-chart v-if="!isLoading" :autoresize="{ throttle: 500 }" :option="option" class="h-300px w-full" />
      <div v-else class="truncate text-center opacity-80">暂无数据</div>
    </section>
  </div>
</template>
