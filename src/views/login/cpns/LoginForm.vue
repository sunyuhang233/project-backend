<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { localCache } from '@/utils/'

const loginForm = reactive({
  username: localCache.get('username') || '', // 用户名
  password: localCache.get('password') || '', // 密码
})

const rules = ref<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空！', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6-20位！', trigger: 'blur' },
    {
      pattern: /^\w{6,20}$/,
      message: '密码字母数字下划线组成',
      trigger: 'change',
    },
  ],
})

const loginFormRef = ref<FormInstance>()

const isLoading = ref(false)

const token = computed(() => localCache.get('token'))

const isAutoLogin = ref(false)

const loginFormSubmit = () => {
  if (!loginForm.username || !loginForm.password) return
  // 0.查看是否自动登录
  if (isAutoLogin) {
    localCache.set('username', loginForm.username)
    localCache.set('password', loginForm.password)
  } else {
    localCache.remove('username')
    localCache.remove('password')
  }
  // 1. 表单校验
  loginFormRef.value?.validate(async (valid) => {
    if (!valid) return
    // 2. 发送请求
    // 3. 处理响应
    // 4. 保存token
    // 5. 跳转到首页
  })
}
</script>

<template>
  <el-form
    ref="loginFormRef"
    v-loading.fullscreen="isLoading"
    :disabled="isLoading"
    :element-loading-text="token ? '自动登录中...' : '登录中'"
    label-position="top"
    hide-required-asterisk
    :rules="rules"
    :model="loginForm"
    class="form w-94vw sm:w-400px">
    <h2 mb-5 text-center tracking-0.2em>登 录</h2>
    <el-form-item prop="username">
      <el-input v-model.trim="loginForm.username" placeholder="请输入用户名" :prefix-icon="User"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model.trim="loginForm.password" placeholder="请输入密码" :prefix-icon="Lock"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="isAutoLogin"> 自动登录 </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button
        class="submit w-full"
        type="primary"
        @click="loginFormSubmit"
        :loading="isLoading"
        style="padding: 20px"
        @keyup.enter="loginFormSubmit"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.form {
  display: block;
  padding: 2.5em 3em 2em 3em;
  backdrop-filter: blur(5px);
  overflow: hidden;
  animation-delay: 0.1s;
  border-radius: 12px;
  :deep(.el-input__wrapper) {
    padding: 0.3em 1em;
  }

  // 报错信息
  :deep(.el-form-item) {
    padding: 0.2em;

    .el-form-item__error {
      padding-top: 0.2em;
    }
  }
}

:deep(.el-button) {
  padding: 0.3em 1em;
}
// label总体
:deep(.el-form-item) {
  margin-bottom: 14px;
}

.dark .active {
  background-color: var(--el-color-primary);
}

.submit {
  font-size: 1.2em;
  font-weight: 800;
  transition: 0.3s;
  cursor: pointer;

  :deep(.el-input__wrapper) {
    background-color: var(--el-color-primary);
    cursor: pointer;

    * {
      color: #fff;
      font-weight: 800;
      letter-spacing: 0.4em;
    }
  }

  .dark:deep(.el-input__wrapper) {
    background-color: var(--el-color-primary);
    cursor: pointer;
    color: #fff;
  }
}
</style>
