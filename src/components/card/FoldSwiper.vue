<script setup lang="ts">
import { EffectCards, Mousewheel, Navigation, Parallax } from 'swiper/modules'
import { Swiper } from 'swiper/vue'

const { width, navigation } = withDefaults(
  defineProps<{
    width?: number
    navigation?: object | boolean
  }>(),
  {
    navigation: true,
  },
)
</script>

<template>
  <!-- 
    effect="cards" effect 风格
    width 宽度
    slides-per-view 每页显示数量
    grab-cursor 鼠标样式
    mousewheel 鼠标滚轮
    loop 循环
    navigation 导航 prevEl 上一页 nextEl 下一页 enabled 是否显示
    modules 模块 EffectCards 卡片风格 Parallax 视差 Mousewheel 鼠标滚轮 Navigation 导航
    cards-effect 卡片风格 slideShadows 是否显示阴影 perSlideRotate 每页旋转角度
     -->
  <Swiper
    effect="cards"
    :cards-effect="{
      slideShadows: false,
      perSlideRotate: 25,
    }"
    :width="width"
    :slides-per-view="1"
    :grab-cursor="true"
    :mousewheel="true"
    :navigation="navigation"
    :modules="[EffectCards, Parallax, Mousewheel, Navigation]"
    :loop="true"
    class="group relative">
    <slot name="default" />
    <i
      v-if="navigation"
      i-solar:alt-arrow-left-linear
      class="swiper-left-btn absolute left-0 top-1/2 transition-300 block h-2rem w-2rem cursor-pointer px-4 z-2 -translate-y-1/2 opacity-40 group-hover:opacity-100"
      >123</i
    >
    <i
      v-if="navigation"
      i-solar:alt-arrow-right-linear
      class="swiper-right-btn absolute right-0 top-1/2 transition-300 block h-2rem w-2rem cursor-pointer px-4 z-2 -translate-y-1/2 opacity-40 group-hover:opacity-100"></i>
  </Swiper>
</template>

<style lang="scss" scoped></style>
