<template>
  <div class="common-header-component bg-primary">
    <div class="navbar navbar-dark justify-content-between mb-4 container">
      <div class="navbar-brand brand">知乎专栏</div>
      <ul class="list-inline mb-0" v-if="!username">
        <li
          class="list-inline-item btn btn-outline-light my-2"
          @click="toPage('/login')"
          v-show="route.path !== '/login'"
        >
          登录
        </li>
        <li class="list-inline-item btn btn-outline-light my-2" @click="toPage('/')">首页</li>
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
          <div class="drop-down" ref="dropDown">
            <a href="#" class="dropdown-toggle btn btn-outline-light" @click="toggleMenu">你好 {{ username }}</a>
            <ul class="dropdown-menu" v-show="menuFlag">
              <li class="dropdown-item" v-for="item in menuList" @click="toPage(item.path)" :key="item.path">
                {{ item.text }}
              </li>
            </ul>
          </div>
        </li>
        <li class="list-inline-item btn btn-outline-light my-2" @click="toPage('/')">首页</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, onBeforeUnmount } from 'vue'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { getCookie } from '../lib/cookie'
const router = useRouter()
const route = useRoute()
const username = ref(getCookie('username'))
const menuList = ref([
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
])
const dropDown: Ref<HTMLElement | null> = ref(null)
const menuFlag = ref(false)
const toPage = (path: string) => {
  router.push({
    path,
    query: route.query
  })
  menuFlag.value = false
}
const toggleMenu = () => {
  menuFlag.value = !menuFlag.value
}
const hideMenuFunction = (event: MouseEvent) => {
  if (dropDown.value) {
    if (!dropDown.value.contains(event.target as HTMLElement) && menuFlag.value) {
      menuFlag.value = false
    }
  }
}
onMounted(() => {
  window.addEventListener('click', hideMenuFunction)
})
onBeforeUnmount(() => {
  window.removeEventListener('click', hideMenuFunction)
})
</script>

<style lang="scss">
.common-header-component {
  width: 100%;
  .drop-down {
    .dropdown-menu {
      display: block;
      cursor: pointer;
    }
  }
}
</style>
