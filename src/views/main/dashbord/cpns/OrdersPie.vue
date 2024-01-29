<template>
  <div>
    <v-chart :autoresize="{ throttle: 500 }" :option="option" :loading="props.loading" :class="props.chartClass" />
  </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import { THEME_KEY } from 'vue-echarts'
import type { EChartsOption } from 'echarts'
import { useColorMode } from '@vueuse/core'
import { colors } from '@/global/echarts'
provide(THEME_KEY, useColorMode())
const props = defineProps<{
  data?: any
  loading?: boolean
  chartClass?: string
}>()
const option: EChartsOption = {
  color: colors.color,
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    left: 'center',
  },
  series: [
    {
      name: '统计',
      type: 'pie',
      radius: ['40%', '76%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
      },

      label: {
        show: true,
        position: 'center',
      },
      labelLine: {
        show: true,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'AliMama',
        },
      },
      data: [
        { value: 100, name: '订单总量' },
        { value: 200, name: '成交量' },
        { value: 300, name: '退单量' },
      ],
    },
  ],
}
</script>
<style scoped lang="scss"></style>
