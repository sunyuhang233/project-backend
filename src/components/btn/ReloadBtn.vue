<script setup lang="ts">
const props = defineProps<{
  content?: string
  type: 'default' | 'simple'
}>()
const emit = defineEmits(['refresh'])

function handleBtnClick() {
  emit('refresh')
}
</script>

<template>
  <el-tooltip :content="props.content || '刷新'" placement="top">
    <ElButton v-if="props.type === 'default'" class="btn ml-2" @click="handleBtnClick" round>
      <span hidden overflow-hidden truncate md:inline-block>刷新</span>
      <i
        i-solar:refresh-outline
        class="h-1.4em w-1.4em cursor-pointer p-0.5em bg-[var(--el-color-info)] transition-300 hover:rotate-90 active:animate-spin"></i>
    </ElButton>
    <i
      v-else
      i-solar:refresh-outline
      class="cursor-pointer bg-[var(--el-color-info)] p-0.5em ml-2 transition-300 hover:rotate-90 active:animate-spin"
      @click="handleBtnClick"></i>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0em 0.4em;
  transition: $transition-delay;
  span {
    width: 0;
    transition: $transition-delay;
    overflow: hidden;
    letter-spacing: 0.1em;
  }

  &:hover,
  &:focus,
  &:active {
    span {
      width: 3em;
      margin: 0 0.4em;
    }
  }
}
</style>
