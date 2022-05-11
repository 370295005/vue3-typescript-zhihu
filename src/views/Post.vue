<template>
  <div class="zhihu-post-page">
    <div class="post-container w-75 mx-auto">
      <img class="rounded-lg img-fluid my-4" :src="postData.image" alt="" />
      <h2 class="mb-4">{{ postData.title }}</h2>
      <div class="author-info border-top border-bottom py-3 mb-5 align-items-center row g-0">
        <div class="col">
          <div class="flex">
            <img class="rounded-circle img-thumbnail avatar" :src="authorInfo.avatar" alt="" />
            <div class="info">
              <div>{{ authorInfo.nickname }}</div>
              <div>{{ authorInfo.description }}</div>
            </div>
          </div>
        </div>
        <div class="col text-right">发表于：{{ postData.publishTime }}</div>
      </div>
      <div class="content">{{ postData.content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onActivated, ref } from 'vue'
import postDetail from '@/mock/post'
import author from '@/mock/author'
import { Author, PostDetail } from '@/types'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    const authorInfo = ref<Author | null>({
      avatar: '',
      description: '',
      nickname: '',
      post: []
    })
    const postData = ref<PostDetail>({
      title: '',
      id: '',
      content: '',
      image: '',
      publishTime: ''
    })
    const initData = () => {
      setTimeout(() => {
        postData.value = postDetail
        authorInfo.value = author
        store.dispatch('updateLoading', false)
      }, 1000)
    }
    onActivated(() => {
      initData()
    })

    return {
      postData,
      authorInfo
    }
  }
})
</script>

<style lang="stylus">
.zhihu-post-page
 .flex
  display: flex
  justify-content: flex-start
  align-items: flex-start
  .avatar
   width: 50px
   height 50px
   margin-right: 10px
 .text-right
  text-align: right
</style>
