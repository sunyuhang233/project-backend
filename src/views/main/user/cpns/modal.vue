<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const { title, action } = withDefaults(
  defineProps<{
    title: string
    action: 'add' | 'edit' | 'view'
  }>(),
  {
    title: '默认标题',
    action: 'add',
  },
)
const isShowModal = ref(false)

const isView = ref(false)
const isEdit = ref(false)
const isAdd = ref(false)
const isUpdate = ref(true)

function handleClose(done: () => void, flag: boolean) {
  if (flag) {
    ElMessageBox.confirm('是否放弃修改？', '操作提醒', {
      confirmButtonText: '放弃',
      confirmButtonClass: 'el-button--danger',
      cancelButtonText: '取消',
      center: true,
    })
      .then(() => {
        // 确认退出

        done()
      })
      .catch(() => {
        // 取消
      })
  } else {
    done()
  }
}

function handleShowFormClick(row: any, action: 'view' | 'edit' | 'add') {
  if (action === 'view') {
    console.log('查看用户信息')
    isView.value = true
    // 遍历给表单赋值
    for (const key in row) {
      form[key] = row[key]
    }
  } else if (action === 'edit') {
    isEdit.value = true
    console.log('编辑用户信息')

    // 遍历给表单赋值
    for (const key in row) {
      form[key] = row[key]
    }
  }
  isShowModal.value = true
}

function handleCloseFormClick() {
  isShowModal.value = false
}

defineExpose({
  handleShowFormClick,
  handleCloseFormClick,
})

const form = reactive({
  status: 0,
  id: undefined,
  username: undefined,
  avatar: undefined,
  birthday: undefined,
  gender: undefined,
  nickname: undefined,
  password: undefined,
})

const formRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' },
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' },
  ],
}

const isLoading = ref(false)

enum Gender {
  BOY = '男',
  GIRL = '女',
  DEFAULT = '保密',
}
</script>

<template>
  <el-dialog
    v-model="isShowModal"
    draggable
    align-center
    destroy-on-close
    width="fit-content"
    :before-close="(done: () => void) => isShowModal && handleClose(done, isUpdate)">
    <template #header>
      <span text-center>{{ title }}</span>
    </template>
    <div class="relative w-80vw md:w-350px">
      <el-form
        ref="formRef"
        :rules="formRules"
        :model="form"
        :disabled="isLoading || isView"
        label-width="4em"
        label-position="left"
        class="p-4 md:p-6"
        hide-required-asterisk>
        <el-form-item prop="avatar">
          <div class="w-6rem mr-4em h-6rem rounded-1/2 mx-a flex-row-c-c flex-shrink-0 v-card">123</div>
        </el-form-item>
        <el-form-item v-if="form.id" prop="id" label="用户ID">
          <el-input v-model="form.id" disabled />
        </el-form-item>
        <!-- 昵称 -->
        <el-form-item prop="nickname" label="昵称">
          <el-input v-model="form.nickname" placeholder="请填写用户昵称（1-40字符）" />
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item prop="username" label="用户名">
          <el-input v-model="form.username" placeholder="请填写用户名（6-30字符）" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password" label="密码" v-if="isAdd">
          <el-input v-model="form.password" placeholder="请填写用户密码（1-20字符）" />
        </el-form-item>
        <!-- 性别 -->
        <el-form-item prop="gender" label="性别">
          <el-radio-group v-model="form.gender" fit="var(-el-color-primary)">
            <el-radio-button v-for="(p, i) in [Gender.DEFAULT, Gender.BOY, Gender.GIRL]" :key="i" :label="p" border />
          </el-radio-group>
        </el-form-item>
        <!-- 生日 -->
        <el-form-item prop="birthday" label="生日">
          <el-date-picker v-model="form.birthday" type="date" class="w-full" placeholder="选择出生年月日（选填）" />
        </el-form-item>
        <div flex items-center gap-2>
          <!-- 状态 -->
          <el-form-item prop="status" label="状态">
            <el-switch
              v-model="form.status"
              class="mx-a transition-200 active:scale-90"
              style="--el-switch-on-color: var(--el-color-info); --el-switch-off-color: var(--el-color-error)"
              inline-prompt
              active-text="正常"
              :active-value="1"
              inactive-text="封禁"
              :inactive-value="0" />
          </el-form-item>
        </div>
      </el-form>
    </div>
    <template #footer>
      <el-button @click="isShowModal = false" type="danger" plain>关闭</el-button>
      <el-button @click="isShowModal = false" type="info" v-if="isAdd">添加</el-button>
      <el-button type="info" @click="isShowModal = false" v-if="isEdit">保存修改</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
