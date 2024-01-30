<script setup lang="ts">
import { ref } from 'vue'
const searchWord = ref('')

interface IndexMenuType {
  meta: {
    title: string
    url: string
    icon: string
    onIcon: string
  }
  children: IndexMenuType[]
}

const menuList = ref<IndexMenuType[]>([
  {
    meta: {
      title: '首页',
      url: '/main/dashbord',
      icon: 'i-solar:home-bold',
      onIcon: 'i-solar:home-bold',
    },
    children: [],
  },
  {
    meta: {
      title: '博客',
      url: '/main/user1',
      icon: 'i-solar:bell-bold',
      onIcon: 'i-solar:blog-bold',
    },
    children: [
      {
        meta: {
          title: '关于',
          url: '/about',
          icon: 'i-solar:password-bold',
          onIcon: 'i-solar:about-bold',
        },
        children: [],
      },
    ],
  },
  {
    meta: {
      title: '项目',
      url: '/main/user',
      icon: 'i-solar:user-bold',
      onIcon: 'i-solar:project-bold',
    },
    children: [],
  },
  {
    meta: {
      title: '留言',
      url: '/message',
      icon: 'i-solar:lock-bold',
      onIcon: 'i-solar:message-bold',
    },
    children: [],
  },
  {
    meta: {
      title: '关于',
      url: '/about',
      icon: 'i-solar:password-bold',
      onIcon: 'i-solar:about-bold',
    },
    children: [],
  },
])

const loading = ref(false)

function searchChange(p: string) {
  console.log('searchChange', p)
}
</script>

<template>
  <el-select
    :popper-class="menuList.length === 0 ? 'animate-tada overflow-hidden' : 'overflow-hidden'"
    v-model="searchWord"
    placeholder="搜索功能/菜单/帮助 ✨"
    clearable
    :loading="loading"
    prefix-icon="Search"
    :teleported="false"
    no-data-text="没有数据"
    tyle="text"
    class="search"
    :disabled="loading"
    @change="searchChange">
    <el-option
      v-for="item in menuList"
      :key="item.meta.url"
      :label="item.meta.title"
      :value="item.meta.url"
      style="height: fit-content">
      <div class="flex items-center p-1">
        {{ item.meta.title }}页面
        <span v-if="$route.path === item.meta.url" class="ml-a text-[var(--el-color-info)]">
          {{ $route.path === item.meta.url ? '当前页面' : '' }}
        </span>
      </div>
      <template #empty>
        <div class="h-3rem text-center text-0.8rem leading-3rem opacity-90">找不到资源 🤯</div>
      </template>
    </el-option>
  </el-select>
</template>

<style scoped lang="scss">
.search {
  width: 14rem;
  :deep(.el-select__wrapper) {
    border-radius: 2rem;
    .el-select__wrapper {
      opacity: 0.9;
      transition: width $transition-delay $animate-cubic-bount;
      &:focus,
      &:valid {
        opacity: 1;
        width: 16rem;
      }
    }
  }
  :deep(.el-popper) {
    border-radius: 0.75rem;
    .el-select-dropdown__item.hover {
      border-radius: 4px;
      background-color: var(--el-color-primary);
    }
  }
}
</style>
