<template>
  <div class="register-page">
    <div class="title text-center mb-3">注册知乎账号</div>
    <div class="register-container mx-auto">
      <div class="username mb-4">
        <label for="label" class="mb-2">用户名</label>
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </div>
      <div class="nickname mb-4">
        <label for="label" class="mb-2">昵称</label>
        <el-input v-model="nickname" placeholder="请输入昵称"></el-input>
      </div>
      <div class="password mb-4">
        <label for="label" class="mb-2">密码</label>
        <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
      </div>
      <el-button type="primary" style="width: 100%" class="mt-2" @click="registerFn" :disabled="!vaildCheck">
        注册
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { register } from '../api'
import { setCookie } from '../lib/cookie'
import { ElInput, ElButton, ElMessage } from 'element-plus'
import { ref, Ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const nickname: Ref<string> = ref('')
const router = useRouter()
const vaildCheck = computed(() => {
  const inputUsername = username.value.trim()
  const inputPassword = password.value.trim()
  const inputNickname = nickname.value.trim()
  return !!(inputUsername && inputPassword && inputNickname)
})
const registerFn = async () => {
  if (vaildCheck.value) {
    const payload = {
      username: username.value,
      password: password.value,
      nickname: nickname.value
    }
    const res = await register(payload)
    if (res.errno === 0) {
      ElMessage.success('注册成功')
      setTimeout(() => {
        router.push({
          path: '/'
        })
      }, 2000)
    } else {
      ElMessage.error('注册失败')
    }
  } else {
    ElMessage.error('请正确输入用户名和密码')
  }
}
</script>

<style lang="scss">
.register-page {
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .register-container {
    width: 30%;
  }
}
</style>