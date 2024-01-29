<script setup lang="ts">
</script>

<template>
  <div class="w-full">
    <HeaderMenu class="sticky left-0 top-0 animate-[0.6s_fade-in] backdrop-blur-20px" />
    <!-- Content -->
    <section class="flex right flex-1">
      <!-- Left -->
      <LeftMenu />
      <!-- Content -->
      <!-- 内容 -->
      <router-view v-slot="{ Component }">
        <keep-alive :exclude="['/login']" :max="12">
          <transition name="fade-lr" mode="out-in">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
