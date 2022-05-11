<template>
  <router-view v-slot="{ Component }">
    <common-header :user="currentUser" />
    <div class="container">
      <keep-alive>
        <component class="component-container" :is="Component" />
      </keep-alive>
      <loading :isLoading="isLoading" />
    </div>
    <common-bottom />
  </router-view>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import Loading from '@/components/Loading.vue'
import CommonBottom from '@/components/CommonBottom.vue'
import CommonHeader from './components/CommonHeader.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    CommonHeader,
    CommonBottom,
    Loading
  },
  setup () {
    const store = useStore()
    const currentUser = computed(() => store.state.userInfo)
    const isLoading = computed(() => store.state.isLoading)
    const keepList = ['Index', 'Login']
    return {
      keepList,
      currentUser,
      isLoading
    }
  }
})
</script>

<style lang="stylus">
.page-transition-enter, .page-transition-leave-active
  width 0
.page-transition-enter-active, .page-transition-leave-active
  transition all 0.3s ease-in-out
.container
  position relative
.component-container
  min-height calc(100vh - 11.5rem)
</style>
