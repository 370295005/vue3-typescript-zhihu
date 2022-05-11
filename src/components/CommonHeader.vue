<template>
  <div class="component-header bg-primary">
    <div class="navbar navbar-dark justify-content-between mb-4 container">
      <div class="navbar-brand brand" @click="toPage('/')">知乎专栏</div>
      <ul class="list-inline mb-0" v-if="!user.isLogin">
        <li
          class="list-inline-item btn btn-outline-light my-2"
          @click="toPage('/login')"
          v-show="route.path !== '/login'"
        >
          登录
        </li>
        <li class="list-inline-item btn btn-outline-light my-2" @click="router.go(-1)" v-show="route.path !== '/'">
          返回
        </li>
        <li
          class="list-inline-item btn btn-outline-light my-2"
          @click="toPage('/register')"
          v-show="route.path !== '/register'"
        >
          注册
        </li>
      </ul>
      <ul class="list-inline mb-0" v-else>
        <li class="list-inline-item my-2">
          <drop-down :user="user" :list="computedList" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import DropDown from './DropDown.vue'
import { computed, defineComponent, PropType, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { UserProps, DropdownList } from '@/types'
export default defineComponent({
  name: 'Header',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      default: () => {
        return {
          isLogin: false
        }
      }
    }
  },
  components: {
    DropDown
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const toPage = (path: string) => {
      router.push({
        path
      })
    }
    const dropDownList = ref<DropdownList>([])
    const computedList = computed(() => {
      return [
        {
          text: '新建文章',
          path: '/new'
        },
        {
          text: '退出登录',
          path: '/signout'
        },
        {
          text: '编辑资料',
          path: '/edit'
        },
        {
          text: '我的专栏',
          path: '/mypost'
        }
      ]
    })
    return {
      toPage,
      dropDownList,
      computedList,
      route,
      router
    }
  }
})
</script>
<style lang="stylus">
.component-header
  width: 100%
  .brand
    cursor pointer
</style>
