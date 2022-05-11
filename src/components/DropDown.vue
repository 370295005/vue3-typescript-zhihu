<template>
  <div class="component-drop-down">
    <div class="dropdown" ref="dropDownRef">
      <a href="#" class="dropdown-toggle btn btn-outline-light" @click.prevent="toggleMenu">你好 {{ user.nickname }}</a>
      <ul class="dropdown-menu" v-show="menuOpen">
        <li class="dropdown-item" v-for="item in list" @click="toPage(item.path)" :key="item.path">{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { UserProps, DropdownList } from '@/types'
import { defineComponent, nextTick, onMounted, onUnmounted, PropType, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserProps>,
      default: () => {
        return {
          isLogin: false
        }
      }
    },
    list: {
      type: Array as PropType<DropdownList>,
      default: () => {
        return [
          {
            text: '',
            value: ''
          }
        ]
      }
    }
  },
  setup () {
    const store = useStore()
    const menuOpen = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }
    const toPage = (path: string) => {
      if (path === '/signout') {
        const userInfo: UserProps = {
          isLogin: false,
          id: 0,
          nickname: '',
          avatar: '',
          email: ''
        }
        store.dispatch('updateUserInfo', userInfo)
      } else {
        router.push({
          path
        })
      }
    }
    const clickHandle = (event: MouseEvent) => {
      if (dropDownRef.value) {
        if (!dropDownRef.value.contains(event.target as HTMLElement) && menuOpen.value) {
          menuOpen.value = false
        }
      }
    }
    onMounted(() => {
      nextTick(() => {
        document.addEventListener('click', clickHandle)
      })
    })
    onUnmounted(() => {
      document.removeEventListener('click', clickHandle)
    })
    return {
      menuOpen,
      toggleMenu,
      toPage,
      dropDownRef
    }
  }
})
</script>
<style lang="stylus">
.component-drop-down
 .dropdown
  .dropdown-menu
   display block
   cursor pointer
</style>
