<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const title = ref('')
const isShowModal = ref(false)
const isView = ref(false)
const isEdit = ref(false)
const isAdd = ref(false)
const isUpdate = ref(true)

function handleClose(done: () => void) {
  ElMessageBox.confirm('是否放弃修改？', '操作提醒', {
    confirmButtonText: '放弃',
    confirmButtonClass: 'el-button--danger',
    cancelButtonText: '取消',
    center: true,
  })
    .then(() => {
      // 确认退出
      resetPage()
      done()
    })
    .catch(() => {
      // 取消
    })
}

// 清除变量
function resetPage() {
  isView.value = false
  isEdit.value = false
  isAdd.value = false
  isUpdate.value = false
  title.value = ''
  // 清空表单
  resetForm()
}

// 清空表单
function resetForm() {
  form.avatar = undefined
  form.status = 0
  form.id = undefined
  form.username = undefined
  form.avatar = undefined
  form.birthday = undefined
  form.gender = undefined
  form.nickname = undefined
  form.password = undefined
}

// 显示Modal
function handleShowFormClick(action: 'view' | 'edit' | 'add', row?: any) {
  if (action === 'view') {
    isView.value = true
    isEdit.value = false
    title.value = '查看用户'
    // 遍历给表单赋值
    Object.keys(form).forEach((key) => {
      form[key] = row[key]
    })
  } else if (action === 'edit') {
    title.value = '编辑用户'
    isEdit.value = true
    isView.value = false
    Object.keys(form).forEach((key) => {
      form[key] = row[key]
    })
  } else if (action === 'add') {
    title.value = '添加用户'
    isAdd.value = true
    isView.value = false
    resetForm()
  }
  isShowModal.value = true
}

// 关闭Modal
function handleCloseFormClick() {
  resetPage()
  isShowModal.value = false
}

// 暴露给父组件的方法
defineExpose({
  handleShowFormClick,
  handleCloseFormClick,
})

interface UserModalRef {
  status: number
  id: string | undefined
  username: string | undefined
  avatar: string | undefined
  birthday: string | undefined
  gender: string | undefined
  nickname: string | undefined
  password: string | undefined
  [key: string]: any
}

// 表单实例
const formRef = ref<FormInstance>()

// 表单数据
const form = reactive<UserModalRef>({
  status: 0,
  id: undefined,
  username: undefined,
  avatar: undefined,
  birthday: undefined,
  gender: undefined,
  nickname: undefined,
  password: undefined,
})

// 表单校验规则
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

function submitForm() {
  formRef.value?.validate(async (valid) => {
    if (!valid) return
    isLoading.value = true
    try {
      if (isAdd.value) {
        // 添加
      } else if (isEdit.value) {
        // 修改
      }
      // 关闭Modal
      handleCloseFormClick()
      // 重新加载数据
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  })
}
</script>

<template>
  <el-dialog
    v-model="isShowModal"
    draggable
    align-center
    destroy-on-close
    width="fit-content"
    :before-close="handleClose">
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
          <div class="flex-row-c-c w-full">
            <div class="mx-a flex-row-c-c flex-shrink-0 v-card">
              <!-- Image -->
              <el-image
                v-if="form.avatar"
                class="h-6rem w-6rem rounded-1/2 mr-4rem"
                src="https://p.qqan.com/up/2021-1/16097287631656400.jpg"
                fit="cover"
                :lazy="true"></el-image>
              <!-- Upload -->
              <el-upload
                v-else
                class="avatar-uploader v-card h-6rem w-6rem mr-4rem flex-row-c-c bordr-default border-bluegray"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false">
                <img v-if="form.avatar" :src="form.avatar" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </div>
          </div>
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
      <el-button @click="submitForm" type="info" v-if="isAdd" v-loading="isLoading">添加</el-button>
      <el-button type="info" @click="submitForm" v-if="isEdit" v-loading="isLoading">保存修改</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
</style>
