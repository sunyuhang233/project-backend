<script setup lang="ts">
import { useUserStore } from '@/stores'
import { SwiperSlide } from 'swiper/vue'

const userStore = useUserStore()
</script>

<template>
  <FoldSwiper
    class="select-none"
    :shadow="true"
    :navigation="{
      enabled: true,
      prevEl: '.swiper-left-btn',
      nextEl: '.swiper-right-btn',
    }">
    <!-- 个人 -->
    <SwiperSlide>
      <div
        class="content-card border-2px dark:border-[var(--el-color-primary)] bg-white dark:bg-dark-5 flex flex-col items-center">
        <el-image lodaing="lazy" class="rounded-1/2 w-6rem h-6rem shadow" :src="userStore.userInfo.avatar" />
        <h3 mt-2 tracking-0.5>
          {{ userStore.userInfo.nickname }}
        </h3>
        <small mt-2 tracking-0.5>
          {{ userStore.userInfo.slogan || '未填写' }}
        </small>
      </div>
    </SwiperSlide>
    <!-- 设备 -->
    <SwiperSlide>
      <div class="content-card bg-dark-3 border-2px border-solid border-[var(--el-color-info)]">
        <h3 class="text-center text-light-50">设备信息</h3>
        <DebiceMenu class="mt-4 grid grid-cols-1 gap-4"></DebiceMenu>
      </div>
    </SwiperSlide>
  </FoldSwiper>
</template>

<style lang="scss" scoped>
.content-card {
  --at-apply: 'max-w-2/3 w-220px mx-a h-220px rounded-12px p-6';
}
.liner {
  background: linear-gradient(to bottom, var(--el-color-info-light-9), #ffffff 100%);
}
</style>
