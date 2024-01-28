<script lang="ts" setup>
import LoginForm from './cpns/LoginForm.vue'
</script>

<template>
  <div relative h-100vh w-full flex-row-c-c overflow-hidden class="animate-[0.3s_fade-in_ease]">
    <div class="bg h-120vw w-120vw md:h-50vw md:w-50vw" />
    <!-- 内容 -->
    <section class="group relative w-9/10 bg-white px-4 py-6 shadow md:w-800px v-card dark:bg-dark md:px-8 md:py-6">
      <!-- logo+nav -->
      <div class="min-h-3em flex-row-bt-c tracking-0.2em">
        <div class="flex-row-c-c">
          <img
            mr-2
            h-1.6rem
            w-1.6rem
            object-cover
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.yBKxR6Fg1YbvciIrphAM4wHaHe?rs=1&pid=ImgDetMain"
            alt="Logo" />
          <small class="font-600 text-[var(--el-color-primary)]">管理后台</small>
        </div>
        <div class="right opacity-0 group-hover:opacity-70">Switch</div>
      </div>
      <section class="flex-row-bt-c flex-wrap pb-10">
        <!-- 图片 -->
        <div class="imgs mb-6 flex-row-c-c flex-1 flex-col">
          <img
            class="mx-a my-6 w-1/2 md:w-12rem"
            object-cover
            dark:filter-invert-100
            src="https://ts1.cn.mm.bing.net/th/id/R-C.01b3febc73de5d286cea33755df7a227?rik=Z%2f45B7BX8Bpbzw&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fmanchester-united-football-club-1680x1260.jpg&ehk=l5woBV5fIuupYeUxz2EWuZgOboDySsKs5Y2ElFwHLME%3d&risl=&pid=ImgRaw&r=0"
            alt="bg 背景" />
          <strong tracking-0.4em>管理后台</strong>
        </div>
        <!-- 表单 -->
        <LoginForm class="mx-a px-6 md:mx-0" />
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
