<script setup lang="ts">
// SearchForm
const searchForm = reactive({
  username: '',
  createTimeSort: undefined,
  status: 1,
})

// 是否显示搜索
const isShowSearch = ref(false)

// 是否加载中
const isLoading = ref(false)

// 筛选按钮点击
function handleSearchClick() {
  isShowSearch.value = !isShowSearch.value
}

const emits = defineEmits<{
  (e: 'add'): void
  (e: 'reload'): void
  (e: 'deleteBatch'): void
}>()
</script>

<template>
  <div class="~ grid grid-cols-1 gap-6">
    <el-scrollbar view-class="menu flex items-center ">
      <div
        mr-4
        :class="!isShowSearch ? 'scale-x-90  opacity-0' : ' scale-x-100 opacity-100'"
        class="flex-shrink-0 transform-origin-left-center overflow-hidden transition-300 transition-all"
        flex="~ gap-2 md:gap-4 items-center">
        <small sticky left-0 flex-shrink-0 opacity-70>筛选条件：</small>
        <!-- 用户名 -->
        <el-input
          v-model="searchForm.username"
          class="w-auto"
          prefix-icon="Search"
          placeholder="用户名（ Enter ）"
          label="用户名"
          :disabled="isLoading" />
        <!-- 注册排序 -->
        <el-checkbox v-model="searchForm.createTimeSort" border class="card-default" :true-label="1" :false-label="0">
          <i i-solar:sort-by-time-bold-duotone mr-2 p-0.5em />
          <span v-show="searchForm.createTimeSort === undefined">注册排序</span>
          <span v-show="searchForm.createTimeSort !== undefined">
            {{ searchForm.createTimeSort ? ' 时间降序' : '时间升序' }}
          </span>
        </el-checkbox>
        <!-- 是否禁用 -->
        <el-checkbox
          v-model="searchForm.status"
          :indeterminate="searchForm.status === undefined"
          border
          class="card-default"
          :true-label="1"
          :false-label="0">
          <i i-solar:user-block-bold-duotone mr-2 p-0.5em />
          <span v-show="searchForm.status === undefined">是否禁用</span>
          <span v-show="searchForm.status !== undefined">
            {{ searchForm.status ? '禁用' : '正常' }}
          </span>
        </el-checkbox>
        <el-button plain type="danger"> 重置 </el-button>
      </div>
      <div class="ml-a flex items-center">
        <el-button
          type="success"
          @click="$emit('add')"
          class="ml-12px w-full tracking-0.2em transition-300 md:ml-0 md:w-auto"
          plain>
          <i i-solar:user-bold-duotone p-0.5em mr-1></i>
          <span>添加</span>
        </el-button>
        <el-button
          type="info"
          class="ml-12px w-full tracking-0.2em transition-300 md:ml-0 md:w-auto"
          @click="$emit('reload')">
          <i i-solar:refresh-outline p-0.5em mr-1></i>
          <span>刷新</span>
        </el-button>
        <el-button class="ml-12px w-full tracking-0.2em transition-300 md:ml-0 md:w-auto">
          <i i-solar:printer-outline p-0.5em mr-1></i>
          <span>导出</span>
        </el-button>
        <el-button
          type="danger"
          class="ml-12px w-full tracking-0.2em transition-300 md:ml-0 md:w-auto"
          @click="$emit('deleteBatch')">
          <i i-solar:trash-bin-minimalistic-broken p-0.5em mr-1></i>
          <span>批量</span>
        </el-button>
        <el-button
          type="warning"
          @click="handleSearchClick"
          class="ml-12px w-full tracking-0.2em transition-300 md:ml-0 md:w-auto">
          <i i-solar:sort-from-top-to-bottom-line-duotone p-0.5em mr-1></i>
          <span>
            {{ isShowSearch ? '筛选' : '取消' }}
          </span>
        </el-button>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-scrollbar__bar) {
  display: none;
  width: 0;
  opacity: 0;
  .el-scrollbar__thumb {
    display: none;
    width: 0;
    opacity: 0;
  }
}
:deep(.el-checkbox) {
  margin: 0;
  .el-checkbox__input {
    display: none;
  }
}
</style>
