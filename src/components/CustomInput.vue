<template>
  <div class="component-custom-input">
    <div class="w-330 mx-auto pt-4">
      <div class="text-center f-20 mb-3">{{ type === 'login' ? '登录到知乎' : '注册知乎账号' }}</div>
      <form>
        <div class="mb-3">
          <label class="form-label">邮箱</label>
          <input type="email" class="form-control" placeholder="请输入邮箱地址" v-model="email" @blur="checkEmail" />
          <div class="form-text" v-show="emailWarning">{{ emailWarning }}</div>
        </div>
        <div class="mb-3" v-if="type === 'register'">
          <label class="form-label">昵称</label>
          <input type="text" class="form-control" placeholder="请输入昵称" v-model="nickname" @blur="checkNickname" />
          <div class="form-text" v-show="nicknameWarning">{{ nicknameWarning }}</div>
        </div>
        <div class="mb-4">
          <label class="form-label">密码</label>
          <input
            type="password"
            class="form-control"
            placeholder="请输入密码"
            v-model="password"
            @blur="checkPassword"
          />
          <div class="form-text" v-show="passwordWarning">{{ passwordWarning }}</div>
        </div>
        <div class="mb-4" v-if="type === 'register'">
          <label class="form-label">重复密码</label>
          <input
            type="password"
            class="form-control"
            placeholder="请重复输入密码"
            v-model="passwordTwice"
            @blur="checkPasswordTwice"
          />
          <div class="form-text" v-show="passwordTwiceWarning">{{ passwordTwiceWarning }}</div>
        </div>
        <button type="submit" class="btn btn-primary btn-block" :disabled="!btnStatus" @click="submit">
          {{ type === 'login' ? '登录' : '注册' }}
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, onDeactivated, ref } from 'vue'
import { login, register } from '@/api'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const password = ref<string>('')
    const email = ref<string>('')
    const passwordWarning = ref<string>('')
    const emailWarning = ref<string>('')
    const nickname = ref<string>('')
    const nicknameWarning = ref<string>('')
    const passwordTwice = ref<string>('')
    const passwordTwiceWarning = ref<string>('')
    const btnStatus = computed(() => {
      return !emailWarning.value && !passwordWarning.value && email.value && password.value
    })
    const checkPasswordTwice = () => {
      if (!passwordTwice.value) {
        passwordTwiceWarning.value = '请重复输入密码'
      } else if (passwordTwice.value !== password.value) {
        passwordTwiceWarning.value = '两次输入的密码不一致'
      } else {
        passwordTwiceWarning.value = ''
      }
    }
    const checkNickname = () => {
      if (!nickname.value) {
        nicknameWarning.value = '请输入昵称'
      } else {
        nicknameWarning.value = ''
      }
    }
    const checkEmail = () => {
      const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
      if (!email.value) {
        emailWarning.value = '请输入邮箱地址'
      } else if (!emailReg.test(email.value)) {
        emailWarning.value = '邮箱地址输入有误'
      } else {
        emailWarning.value = ''
      }
    }
    const checkPassword = () => {
      if (!password.value) {
        passwordWarning.value = '请输入密码'
      } else {
        passwordWarning.value = ''
      }
    }
    const submit = async (e: MouseEvent) => {
      e.preventDefault()
      if (props.type === 'login') {
        if (!emailWarning.value && !passwordWarning.value && email.value && password.value) {
          const res = await login()
          if (res.data && res.data.nickname) {
            const data = Object.assign(res.data, { isLogin: true })
            store.dispatch('updateUserInfo', data)
            router.push({
              path: '/'
            })
          }
        }
      } else {
        if (
          !emailWarning.value &&
          !passwordWarning.value &&
          email.value &&
          password.value &&
          nickname.value &&
          !nicknameWarning.value &&
          !passwordTwiceWarning.value
        ) {
          const res = await register()
          if (res.data && res.data.nickname) {
            const data = Object.assign(res.data, { isLogin: true })
            store.dispatch('updateUserInfo', data)
            router.push({
              path: '/'
            })
          }
        }
      }
    }
    onDeactivated(() => {
      email.value = ''
      password.value = ''
      emailWarning.value = ''
      passwordWarning.value = ''
    })
    return {
      password,
      email,
      nickname,
      nicknameWarning,
      passwordTwice,
      passwordTwiceWarning,
      passwordWarning,
      emailWarning,
      checkEmail,
      checkPassword,
      checkNickname,
      checkPasswordTwice,
      submit,
      btnStatus
    }
  }
})
</script>

<style lang="stylus">
.component-custom-input
 .w-330
  max-width 330px
  .f-20
   font-size 20px
   font-weight bold
  .form-text
   color red
  .btn-block
   width 100%
   display block
</style>
