<template>
  <div class="login-page">
    <div class="title text-center mb-3">登录到知乎</div>
    <div class="login-container mx-auto">
      <div class="username mb-4">
        <label for="label" class="mb-2">用户名</label>
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </div>
      <div class="password mb-4">
        <label for="label" class="mb-2">密码</label>
        <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
      </div>
      <el-button type="primary" style="width: 100%" class="mt-2" @click="loginFn" :disabled="!vaildCheck">
        登录
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from '../api'
import { setCookie } from '../lib/cookie'
import { ElInput, ElButton, ElMessage } from 'element-plus'
import { ref, Ref,computed } from 'vue'
import { useRouter } from 'vue-router'
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const router = useRouter()
const loginFn = async () => {
  if (vaildCheck.value) {
    const payload = {
      username: username.value,
      password: password.value
    }
    const res = await login(payload)
    if (res.errno === 0) {
      ElMessage.success('登录成功')
      setCookie('username', res.data.username)
      setTimeout(() => {
        router.push({
          path: '/'
        })
      }, 1000)
    } else {
      ElMessage.error('登录失败')
    }
  } else {
    ElMessage.error('请正确输入用户名和密码')
  }
}
const vaildCheck = computed(() => {
  const inputUsername = username.value.trim()
  const inputPassword = password.value.trim()
  return !!(inputUsername && inputPassword)
})
</script>

<style lang="scss">
.login-page {
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .login-container {
    width: 30%;
  }
}
</style>