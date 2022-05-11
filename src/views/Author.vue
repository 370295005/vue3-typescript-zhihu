<template>
  <div class="zhihu-author-page w-75 mx-auto">
    <div class="author-header">
      <div class="row mb-4 border-bottom pb-4 align-items-center">
        <div class="col-3 text-center">
          <img class="rounded-circle border w-100" :src="data.avatar || require('@/assets/images/avatar.jpg')" />
        </div>
        <div class="col-9">
          <div class="nickname">{{ data.nickname }}</div>
          <div class="text-muted">{{ data.description }}</div>
        </div>
      </div>
    </div>
    <div class="author-post">
      <div class="post-item" v-for="item in data.post" :key="item.publishTime">
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h4 class="post-title" @click="toPostDetail(item)">{{ item.title }}</h4>
            <div class="row my-3 align-items-center">
              <div class="col-4">
                <img class="rounded-lg w-100" :src="item.image" />
              </div>
              <div class="col-8 text-muted">
                {{ item.content }}
              </div>
            </div>
            <div>{{ item.publishTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onActivated, ref, onDeactivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import mockData from '@/mock/author'
import { Author, PostDetail } from '@/types'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const data = ref<Author>({
      avatar: '',
      description: '',
      nickname: '',
      post: []
    })
    const initData = async () => {
      setTimeout(() => {
        const res = mockData
        data.value = res
        store.dispatch('updateLoading', false)
      }, 1000)
    }
    const toPostDetail = (item: PostDetail) => {
      const { id } = item
      router.push({
        path: '/post',
        name: 'Post',
        params: {
          id
        }
      })
    }
    onActivated(() => {
      initData()
    })
    onDeactivated(() => {
      store.dispatch('updateLoading', true)
      route.meta.savedPosition = 0
    })
    return {
      route,
      data,
      toPostDetail
    }
  }
})
</script>

<style lang="stylus">
.zhihu-author-page
 width: 100%
 height: 100%
 overflow-x : hidden
 overflow-y: auto
 .nickname
  font-size 30px
  font-weight bold
 .post-title
  &:hover
   color: #0d6efd
   cursor pointer
</style>
