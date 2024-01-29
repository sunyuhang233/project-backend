<script lang="ts" setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()

const imagesList = ref([])

function onDeleteAdmin() {
  ElMessage.warning('功能开发中！')
}

function userQuiteClick() {
  userStore.userQuite()
}
</script>

<template>
  <div v-if="userStore.userInfo?.userId" class="group user-line relative flex-row-c-c" cursor-pointer>
    <!-- Card -->
    <Transition name="fade">
      <div
        class="user-cards animate-fade-in overflow-hidden rounded-12px bg-white p-6 dark:bg-dark"
        absolute
        right-0
        top-2.2rem
        flex-row-c-c
        flex-col
        animate-duration-200
        filter-drop-shadow
        md:right-4rem>
        <div class="flex flex-col shadow-sm shadow-inset card-default" mt-2 p-4 leading-1.6em>
          <small> 用户名：{{ userStore.userInfo.username || '未填写' }} </small>
          <small> 签名：{{ userStore.userInfo?.slogan || '未填写' }} </small>
        </div>
        <!-- 退出登录| 注销 -->
        <div class="btn" flex-row-bt-c pt-4>
          <el-button type="danger" plain @click="userQuiteClick"> 退出登录 </el-button>
          <el-button ml-3 @click="onDeleteAdmin"> 注销账号 </el-button>
        </div>
      </div>
    </Transition>
    <!-- Avatar -->
    <div class="user-small flex select-none">
      <el-badge :is-dot="!userStore?.userInfo?.avatar" class="flex-row-c-c rounded-1/2 shadow-sm transition-300">
        <el-image :src="userStore?.userInfo?.avatar" class="h-2rem w-2rem rounded-1/2">
          <template #error>
            <span i-solar:user-bold style="width: 60%; height: 60%" />
          </template>
        </el-image>
      </el-badge>
    </div>
    <!-- nickName -->
    <div class="hidden flex-1 truncate pl-2 -z-1 md:block">
      <strong class="w-full overflow-hidden">
        {{ userStore.userInfo?.nickname }}
      </strong>
      <!-- <CopyText :text="user.userInfo?.id" class="text-0.8rem opacity-70" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-line:hover {
  .user-cards {
    display: block;
    z-index: 999;
  }
}

.user-cards {
  display: none;
}
</style>
