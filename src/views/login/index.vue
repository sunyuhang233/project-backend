<script setup lang="ts">
import LoginForm from './cpns/LoginForm.vue'
</script>

<template>
  <div class="relative h-screen w-full flex flex-row-c-c overflow-hidden animate-[0.3s_fade-in_ease]">
    <!-- Bg -->
    <div class="bg w-120vw h-120vw md:h-50vw md:w-50vw"></div>
    <!-- Content -->
    <section class="group relative w-9/10 bg-white px-4 py-6 md:px-8 shadow v-card md:w-[800px] dark:bg-dark">
      <!-- Header -->
      <header class="min-h-3em flex flex-row-bt-c tracking-0.2em">
        <div class="flex-row-c-c">
          <img
            class="w-1.6em h-1.6em mr-2 object-cover"
            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.yBKxR6Fg1YbvciIrphAM4wHaHe?rs=1&pid=ImgDetMain"
            alt="" />
          <small class="font-600 text-[var(--el-color-primary)]">通用后台</small>
        </div>
        <!-- Switch -->
        <div class="opacity-0 group-hover:opacity-80">Switch</div>
      </header>
      <!-- Bottom -->
      <section class="flex-row-bt-c flex-wrap pb-10">
        <!-- Img -->
        <!-- LoginForm -->
        <div class="">
          <LoginForm />
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped lang="scss">
.bg {
  position: absolute;
  background: radial-gradient(circle at top, #8fe9e1, #bcf6d1ad);
  z-index: -1;
  border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  animation: border-anima 20s ease-out infinite;
}

@keyframes border-anima {
  0% {
    transform: scale(1);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
  25% {
    transform: scale(1.02);
    border-radius: 55% 45% 54% 46% / 42% 61% 39% 58%;
  }
  50% {
    transform: scale(0.98);
    border-radius: 70% 30% 71% 29% / 53% 70% 30% 47%;
  }
  75% {
    transform: scale(1.02);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
  100% {
    transform: scale(1);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
}
</style>
