import type { dataType } from 'element-plus/lib/components/table-v2/src/common.js'; import type { dataType } from
'element-plus/lib/components/table-v2/src/common.js';
<script lang="ts" setup>
import { ElMenuItem, ElSubMenu } from 'element-plus'

const { data } = defineProps<{
  data: IndexMenuType
}>()

interface IndexMenuType {
  meta: {
    title?: string
    url?: string
    icon?: string
    onIcon?: string
    image?: string
  }
  children: IndexMenuType[]
}
</script>

<template>
  <!-- 一级组件 -->
  <component :is="data.children?.length ? ElSubMenu : ElMenuItem" :index="data.meta?.url || data?.meta?.icon">
    <!-- 无儿子 -->
    <i
      v-if="data.meta.icon && !data.children?.length"
      class="transition-200"
      :class="$route.path === data.meta.url ? data.meta?.onIcon : data.meta.icon"
      filter-drop-shadows
      p-0.8em />
    <el-image
      v-else-if="data.meta.image && !data.children?.length"
      :src="data.meta.image"
      loading="lazy"
      :alt="data.meta.title"
      class="h-0.8em w-0.8em"
      fit="cover"
      style="border-radius: 6px; overflow: hidden" />
    <!-- 有儿子 -->
    <template #title>
      <div v-if="data.children?.length">
        <i
          v-if="data.meta.icon"
          class="transition-100"
          :class="$route.path === data.meta.url ? data.meta?.onIcon : data.meta.icon"
          p-0.8em
          filter-drop-shadow />
        <el-image
          v-else-if="data.meta.image"
          :src="data.meta.image"
          loading="lazy"
          :alt="data.meta.title"
          class="h-0.8em w-0.8em"
          fit="cover"
          style="border-radius: 6px; overflow: hidden" />
      </div>
      <!-- 全局显示的菜单Name -->
      <span class="min-w-6rem animate-[fade-in] truncate text-center tracking-0.4em">{{ data.meta.title }}</span>
    </template>
    <MenuLine v-for="child in data.children" :key="child.meta.url" :data="child" />
  </component>
</template>

<style scoped lang="scss"></style>
