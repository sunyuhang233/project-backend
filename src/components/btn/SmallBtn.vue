<script setup lang="ts">
interface SelectProps {
  label: string
  value: string | number
}

const { menu } = withDefaults(
  defineProps<{
    menu: SelectProps[]
  }>(),
  {
    menu: () => [
      {
        label: '按日',
        value: 0,
      },
      {
        label: '按月',
        value: 1,
      },
      {
        label: '按年',
        value: 2,
      },
    ],
  },
)

const selectValue = ref(0)

const emit = defineEmits<{
  (e: 'change', value: number): void
}>()

function handleSelectChange(value: number) {
  selectValue.value = value
  emit('change', value)
}
</script>

<template>
  <el-select
    clearable
    filterable
    v-model="selectValue"
    size="small"
    no-data-text="没有数据"
    class="opacity-90"
    placeholder="筛选"
    @change="handleSelectChange">
    <el-option v-for="item in menu" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>
