<template>
  <div class="zhihu-edit-page mx-auto">
    <h3>更新个人资料</h3>
    <upload class="rounded-circle circle mx-auto mt-4" @uploadImg="uploadImg" />
    <input type="text" class="form-control mt-4" v-model="nickname" placeholder="请输入名称" />
    <textarea class="form-control mt-4" rows="10" v-model="description" placeholder="请输入简介信息" />
    <div class="btn btn-primary mt-3" @click="updateInfo" :disabled="validate">更新信息</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Upload from '@/components/Upload.vue'
import { editInfo } from '@/api'
import { Author } from '@/types'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    Upload
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const nickname = ref('')
    const description = ref('')
    const avatar = ref('')
    const uploadImg = (url: string) => {
      avatar.value = url || ''
    }
    const updateInfo = async () => {
      const res = validate()
      if (res) {
        const params: Author = {
          nickname: nickname.value,
          description: description.value,
          avatar: avatar.value
        }
        const res = await editInfo(params)
        if (res.message === 'success') {
          setTimeout(() => {
            router.push('/')
          })
        }
      }
    }
    const validate = () => {
      return nickname.value
    }
    onMounted(() => {
      store.dispatch('updateLoading', false)
    })
    return {
      nickname,
      description,
      updateInfo,
      validate,
      uploadImg
    }
  }
})
</script>
<style lang="stylus">
.zhihu-edit-page
  max-width: 690px
  .circle
    width 200px
    height 200px
  .form-control
    resize: none
</style>
