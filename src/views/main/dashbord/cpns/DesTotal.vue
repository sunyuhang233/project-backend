<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { ref } from 'vue'
import OrderPie from './OrdersPie.vue'
import TotalProgress from './TotalProgress.vue'

const isShowChart = ref(true)

function handleRefreshClick() {
  console.log('refresh')
}
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
          <ReloadBtn type="default" @refresh="handleRefreshClick" />
        </small>
      </div>
    </h3>
    <section>
      <div grid="~ md:cols-2 gap-6 " mt-4 v-if="isShowChart">
        <!-- 订单饼状图 -->
        <div class="flex-row-c-c border-transparent rounded-12px px-6 pt-6 border-default dark:border-1px v-card">
          <OrderPie chart-class="w-300px h-300px" />
        </div>
        <div grid="~ cols-2 gap-6 " class="border-transparent rounded-12px p-6 border-default dark:border-1px v-card">
          <!-- 销售总量 -->
          <div class="v-card grid-card">
            <small tracking-0.2em>销售总量¥</small>
            <div class="mt-2 text-1.5rem font-800 text-[var(--el-color-info)]">43.00</div>
            <small class="flex items-baseline text-0.8em tracking-0.2em mt-1"
              >共<small class="font-800 text-1rem">{{ 1 }}</small
              >单</small
            >
          </div>
          <div class="grid-card flex items-center v-card">
            <TotalProgress
              :stroke-width="10"
              :whidth="70"
              color="var(--el-color-primary)"
              title="商品总数"
              :percentage="50"
              :count="50"
              fix-count="人" />
          </div>
          <div class="grid-card flex items-center v-card">
            <TotalProgress
              :stroke-width="10"
              :whidth="70"
              color="var(--el-color-primary)"
              title="商品总数"
              :percentage="50"
              :count="50"
              fix-count="人" />
          </div>
          <div class="grid-card flex items-center v-card">
            <TotalProgress
              :stroke-width="10"
              :whidth="70"
              color="var(--el-color-primary)"
              title="商品总数"
              :percentage="50"
              :count="50"
              fix-count="人" />
          </div>
        </div>
      </div>
      <div v-else class="grid grid-(cols-2 gap-4) mt-2 mt-8 lg:grid-(cols-4 gap-6) md:grid-(cols-3 gap-8)">
        <!-- 销售总量￥ -->
        <div class="grid-card v-card">
          <small tracking-0.2em>销售总量￥</small>
          <div class="mt-2 text-1.7rem font-800 text-[var(--el-color-info)]">55.00</div>
          <!-- 订单数 -->
          <small class="flex items-baseline text-0.8em tracking-0.2em">
            共<small class="text-1rem font-800">20</small>
            单
          </small>
        </div>
        <!-- 用户总数 -->
        <div class="grid-card v-card">
          <TotalProgress color="var(--el-color-success)" title="用户总数" :percentage="60" :count="60" fix-count="人" />
        </div>
        <!-- 商品总数 -->
        <div class="grid-card v-card">
          <TotalProgress color="var(--el-color-primary)" title="商品总数" :percentage="70" :count="70" fix-count="个" />
        </div>
        <!-- 订单成交量 -->
        <div class="grid-card v-card">
          <TotalProgress color="var(--el-color-primary)" title="成交量" :percentage="20" :count="20" fix-count="单" />
        </div>
        <!-- 客单价￥ -->
        <div class="grid-card flex flex-col justify-center v-card">
          <small tracking-0.2em> 平均客单价￥ </small>
          <h3 mt-2 text-1.3rem font-800>500</h3>
        </div>
        <!-- 新用户 -->
        <div class="grid-card v-card">
          <TotalProgress color="var(--el-color-success)" title="新用户" :percentage="45" :count="45" fix-count="人" />
        </div>
        <!-- 退单量 -->
        <div class="grid-card v-card">
          <TotalProgress color="var(--el-color-error)" title="退单量" :percentage="80" :count="90" fix-count="单" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.grid-card {
  --at-apply: border-default border-op-50 select-none rounded-12px p-4 hover: shadow-sm transition-200;
}
</style>
