<template>
  <div class="zhihu-new-page">
    <div class="form">
      <h4>新建文章</h4>
      <upload @uploadImg="uploadImg" />
      <h4 class="mt-4">文章标题:</h4>
      <input type="text" class="form-control mt-3" v-model="title" placeholder="请输入文章标题" />
      <h4 class="mt-4">文章内容:</h4>
      <textarea type="text" class="form-control mt-3" v-model="content" placeholder="请输入文章内容" rows="10" />
      <div class="btn btn-primary mt-3" @click="publishPost">发表文章</div>
    </div>
    <toast :isVisible="isVisible" :toastText="text" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Toast from '@/components/Toast.vue'
import Upload from '@/components/Upload.vue'
import { useStore } from 'vuex'
import { newPost } from '@/api'
import parseTime from '@/lib/parseTime'
import { PostDetail } from '@/types'
import router from '@/router'
export default defineComponent({
  components: {
    Upload,
    Toast
  },
  setup () {
    const store = useStore()
    const title = ref('')
    const content = ref('')
    const isVisible = ref(false)
    const text = ref('')
    const image = ref('')
    const uploadImg = (path: string) => {
      image.value = path || ''
    }
    const publishPost = async () => {
      const res = validate()
      if (res) {
        const params: PostDetail = {
          id: (Math.random() * 100).toString(16),
          title: title.value,
          content: content.value,
          image: image.value,
          publishTime: parseTime(new Date() + '')
        }
        const res = await newPost(params)
        if (res.message === 'success') {
          text.value = '发表成功'
          isVisible.value = true
          setTimeout(() => {
            router.push('/')
          }, 1000)
        }
      }
    }
    const validate = () => {
      if (!title.value) {
        text.value = '请输入文章标题'
        isVisible.value = true
        return false
      } else if (!content.value) {
        text.value = '请输入文章内容'
        isVisible.value = true
        return false
      } else {
        return true
      }
    }
    onMounted(() => {
      store.dispatch('updateLoading', false)
    })
    return {
      title,
      content,
      isVisible,
      text,
      publishPost,
      uploadImg
    }
  }
})
</script>
<style lang="stylus"></style>
