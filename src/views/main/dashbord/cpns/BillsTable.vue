<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode, useDateFormat, watchDebounced } from '@vueuse/core'
import { THEME_KEY } from 'vue-echarts'
// 主题
provide(THEME_KEY, useColorMode())
const isLoading = ref(false)

const dateRange = ref()

enum DateTimeType {
  DAY = 0,
  MONTH = 1,
  YEAR = 2,
}
// 日期
const dateObj = reactive({
  startTime: '',
  endTime: '',
})

// 监听日期变化
function handlePickerChange(val: Date[]) {
  if (val.length === 2) {
    dateObj.startTime = useDateFormat(val[0], 'yyyy-MM-dd').value
    dateObj.endTime = useDateFormat(val[1], 'yyyy-MM-dd').value
  }
}

// 日期类型选择
const menu = [
  { label: '本日', value: DateTimeType.DAY },
  { label: '本月', value: DateTimeType.MONTH },
  { label: '本年', value: DateTimeType.YEAR },
]
// echarts配置 图表数据 柱状图
const option = ref({
  color: ['#67c23a', '#ff2323f6', '#', '#ff2323f6'],
  title: {
    textStyle: { DateTimeType, fontFamily: 'Alimama' },
  },
  tooltip: { trigger: 'axis' },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    data: ['2024-01-30', '2024-01-31', '2024-02-01', '2024-02-02', '2024-02-03', '2024-02-04', '2024-02-05'],
  },
  yAxis: {
    name: '金额',
    type: 'value',
  },
  backgroundColor: 'transparent',
  dataZoom: { type: 'inside' },
  grid: {
    top: '20%',
    left: '14%',
    right: '6%',
    bottom: '8%',
    containLabel: false,
  },

  legend: {
    data: ['钱包收入', '钱包支出', '积分收入', '积分支出'],
    type: 'scroll',
    zlevel: '1',
    itemStyle: {
      borderCap: 'round',
      borderType: 'dashed',
    },
  },
  series: [
    {
      name: '钱包收入',
      data: [123, 123, 123, 123, 123, 123, 123],
      type: 'bar',
      smooth: true,
      barWidth: '20%',
      showBackground: true,
      color: '#67c23a',
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.1)',
      },
    },
    {
      name: '钱包支出',
      data: [123, 456, 789, 123, 456, 789, 123],
      type: 'bar',
      smooth: true,
      showBackground: true,
      barWidth: '20%',
      color: '#ff2323f6',
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.1)',
      },
    },
    {
      name: '积分收入',
      data: [123, 123, 123, 123, 123, 123, 123],
      type: 'line',
      smooth: true,
      color: '#85ff48',
      areaStyle: {
        opacity: 0.2,
      },
      stack: 'x',
    },
    {
      name: '积分支出',
      data: [123, 999, 123, 999, 123, 999, 123],
      type: 'line',
      smooth: true,
      color: '#ff2323f6',
      areaStyle: {
        opacity: 0.2,
      },
      stack: 'x',
    },
  ],
})

// 日期类型
const menuType = ref(0)

// 日期下拉选择
function handleSelectChange(val: number) {
  menuType.value = val
}
</script>

<template>
  <div v-loading="isLoading" class="group overflow-hidden p-2">
    <div class="mb-2 flex items-center">
      <h4>账单收支统计</h4>
      <div class="ml-a w-1/2 transition-300 flex items-center opacity-0 group-hover:opacity-100">
        <!-- DatePicker -->
        <el-date-picker
          v-model="dateRange"
          type="datetimerange"
          range-separator="~"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          size="small"
          class="mr-2"
          @change="handlePickerChange" />
        <!-- Select -->
        <div class="w-6rem text-center flex-shrink-0">
          <small-btn :menu="menu" @change="handleSelectChange" />
          <!-- <el-select size="small" v-model="menuType" clearable filterable @change="handleSelectChange">
            <el-option v-for="item in menu" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select> -->
        </div>
      </div>
    </div>
    <!-- Charts -->
    <div class="min-h-320px flex-row-c-c p-2 h-320px">
      <v-chart :autoresize="{ throttle: 500 }" :option="option" class="h-full w-full" v-if="!isLoading" />
      <div v-else class="truncate text-center opacity-80">暂无数据</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
