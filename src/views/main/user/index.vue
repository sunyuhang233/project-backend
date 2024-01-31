<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores'
import { userListData } from './data/user'
import UserModal from './cpns/modal.vue'

type Gender = undefined | null | '男' | '女' | '保密'

interface UserVO {
  /**
   * id
   */
  id?: string
  /**
   * 头像icon
   */
  avatar?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 账号创建时间
   */
  createTime?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 性别 （男|女|保密）
   */
  gender?: Gender
  /**
   * 邮箱是否验证（绑定）
   */
  isEmailVerified?: number
  /**
   * 手机号是否验证（绑定）
   */
  isPhoneVerified?: number
  /**
   * 最后登录时间
   */
  lastLoginTime?: string
  /**
   * 昵称
   */
  nickname?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 登录状态
   */
  status?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 用户名
   */
  username?: string
}

const userStore = useUserStore()

const page = ref(1)
const pageSize = ref(10)
// 根据UserVo生成10条数据
const userList = ref<UserVO[]>(userListData)

const isLoading = ref(false)

async function loadData() {}

const nowDate = useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value

onMounted(() => {
  loadData()
})

// 存放选择的用户数组
const selectUserList = ref<UserVO[]>([])

// 选择用户
function handleSelectClick(data: UserVO[]) {
  selectUserList.value = data ? data : []
}

async function handleSwicthChange(id: string, status: number, message: string) {
  // 请求
  const data = await ElMessageBox.confirm(`确定用户${message}吗？`, '操作提醒', {
    confirmButtonText: message,
    confirmButtonClass: message == '封禁用户' ? 'el-button--danger' : 'el-button--info',
    cancelButtonText: '取消',
    type: 'warning',
    center: true,
  })
  if (data === 'confirm') {
    ElMessage.success(`用户${message}成功`)
    return true
  } else {
    ElMessage.error(`用户${message}失败`)
    return false
  }
}

const UserModalRef = ref<InstanceType<typeof UserModal>>()

function handleShowInfoClick(row: UserVO, action: 'view' | 'edit' | 'add') {
  UserModalRef.value?.handleShowFormClick(row, action)
}
</script>

<template>
  <div class="user-page" grid="~ cols-1 gap-6">
    <!-- Header -->
    <header>
      <h3>
        <i :class="$route?.meta?.onIcon" mr-2 p-0.6em />用户管理
        <small class="ml-2 text-0.7em font-500 opacity-80">{{ nowDate }}</small>
      </h3>
    </header>
    <!-- Select -->
    <p>select</p>
    <!-- Table -->
    <el-table
      stripe
      :data="userList"
      style="width: 100%"
      empty-text="暂无数据"
      class-name="w-full table-default"
      :header-cell-style="{
        padding: '1rem 0',
        fontSize: '1em',
      }"
      height="72vh"
      row-class-name="group h-5.5rem"
      @selection-change="handleSelectClick">
      <!-- 选择 -->
      <el-table-column fixed type="selection" />
      <!-- 用户ID -->
      <el-table-column column-key="id" prop="id" label="用户ID" min-width="180%">
        <template #default="{ row }">
          <span
            block
            truncate
            class="w-10rem cursor-pointer transition-300 hover:text-[var(--el-color-info)] hover:underline"
            >{{ row.id }}</span
          >
        </template>
      </el-table-column>
      <!-- 昵称 -->
      <el-table-column column-key="nickname" prop="nickname" show-overflow-tooltip width="100%" label="昵称" />
      <!-- 用户名 -->
      <el-table-column column-key="username" prop="username" show-overflow-tooltip width="180%" label="用户名" />
      <!-- 头像 -->
      <el-table-column column-key="avatar" prop="avatar" width="100%" label="用户头像">
        <template #default="{ row }">
          <el-scrollbar height="4rem">
            <div class="flex">
              <el-image
                :preview-src-list="[row.avatar]"
                :preview-teleported="true"
                loading="lazy"
                :src="row.avatar"
                fit="cover"
                :lazy="true"
                class="h-4rem w-4rem flex-shrink-0 v-card border-default border-bluegray"></el-image>
            </div>
          </el-scrollbar>
        </template>
      </el-table-column>
      <!-- 性别 -->
      <el-table-column column-key="gender" prop="gender" width="100%" show-overflow-tooltip label="性别" />
      <!-- 状态 -->
      <el-table-column column-key="status" prop="status" width="100%" show-overflow-tooltip label="状态">
        <template #default="{ row }">
          <el-switch
            v-model="row.status"
            :disabled="row?.id === userStore.userInfo?.userId"
            class="mx-a transition-200 active:scale-90"
            style="--el-switch-on-color: var(--el-color-info); --el-switch-off-color: var(--el-color-error)"
            inline-prompt
            active-text="正常"
            :active-value="1"
            inactive-text="封禁"
            :inactive-value="0"
            :before-change="
              handleSwicthChange.bind(null, row.id, row.status, row.status ? '封禁用户' : '改为正常')
            "></el-switch>
        </template>
      </el-table-column>
      <!-- 创建时间 -->
      <el-table-column column-key="createTime" prop="createTime" label="创建时间" sortable min-width="180%" />
      <!-- 更新时间 -->
      <el-table-column column-key="updateTime" prop="updateTime" label="更新时间" sortable width="180%" />
      <!-- 动作+弹窗 -->
      <el-table-column fixed="right" label="操作" min-width="200%">
        <template #default="{ row }">
          <div class="flex opacity-0 transition-200 group-hover:opacity-100">
            <!-- 预览 -->
            <div
              class="mx-2 btn-default hover:text-[var(--el-color-info)]"
              style="padding: 0rem 0.6rem"
              @click="handleShowInfoClick(row, 'view')">
              <i i-solar:eye-bold-duotone p-0.5em />
            </div>
            <!-- 编辑 -->
            <el-button
              icon="Edit"
              type="success"
              style="padding: 0rem 0.6rem"
              @click="handleShowInfoClick(row, 'edit')" />
            <!-- 角色 -->
            <el-button type="info" style="padding: 0rem 0.6rem">
              <i i-solar:shield-user-bold-duotone mr-1 p-0.5em />
              角色
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- Footer -->
    <footer class="flex-row-bt-c">
      <el-pagination v-model:current-page="page" background layout="prev, pager, next" :page-count="page" />
      <small
        >共<strong class="text-1rem text-[var(--el-color-primary)]">{{ userList.length }}</strong
        >个用户</small
      >
    </footer>

    <!-- Modal -->
    <user-modal ref="UserModalRef" />
  </div>
</template>

<style lang="scss" scoped></style>
