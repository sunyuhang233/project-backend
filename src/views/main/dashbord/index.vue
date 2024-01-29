<script setup lang="ts">
import OrderTotal from './cpns/OrderTotal.vue'
</script>

<template>
  <div class="flex flex-col tracking-0.1em">
    <WelcomeCard />
    <div grid="~ cols-1 gap-8 items-start" lg:grid="~ cols-[4fr_2fr]  gap-8 " mb-4 class="content">
      <div class="left" grid="~ cols-1 gap-8">
        <!-- 订单数 -->
        <OrderTotal class="box-content" />
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
      <div class="right" grid="~ cols-1 gap-8">
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-content {
  --at-apply: 'v-card p-4  md:p-6 bg-white dark:bg-dark-5 rounded-3 shadow-sm';
  box-shadow:
    rgba(133, 133, 133, 0.1) 0px 1px 3px,
    rgba(128, 128, 128, 0.1) 0px 1px 2px;
}
.left :deep(.el-scrollbar__thumb) {
  display: none;
}
</style>
