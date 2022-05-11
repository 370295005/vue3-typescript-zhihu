<template>
  <div class="component-upload mt-3" @click="uploadFile">
    <img v-if="imgPath" :src="imgPath" alt="" />
    <h2 v-else>点击上传图片</h2>
    <input type="file" class="file-input d-none" ref="fileUpload" @change="fileChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { uploadImg } from '@/api'
export default defineComponent({
  setup (props, { emit }) {
    const fileUpload = ref()
    const uploadFile = () => {
      fileUpload.value.click()
    }
    const imgPath = ref('')
    const fileChange = async (e: Event) => {
      const eventTarget = e.target as HTMLInputElement
      if (eventTarget.files) {
        const files = Array.from(eventTarget.files)
        const formData = new FormData()
        formData.append('file', files[0])
        const res = await uploadImg(formData)
        console.log(res.data.path)
        imgPath.value = res.data.path || ''
        emit('uploadImg', imgPath.value)
      }
    }
    return {
      uploadFile,
      fileUpload,
      fileChange,
      imgPath
    }
  }
})
</script>
<style lang="stylus">
.component-upload
 background-color #f8f9fa
 height 200px
 cursor pointer
 overflow hidden
 display flex
 align-items center
 justify-content center
</style>
