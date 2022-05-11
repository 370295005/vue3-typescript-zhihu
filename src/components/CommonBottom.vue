<template>
  <div class="component-common-bottom">
    <div class="text-center py-4 mt-3">
      <ul class="list-inline mb-0" @click="toIndex">
        <li class="list-inline-item">知乎专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const toIndex = () => {
      console.log('toIndex')
    }
    return {
      toIndex
    }
  }
})
</script>
<style lang="stylus">
.component-common-bottom
  background-color #f8f9fa
  ul
    > li
      cursor pointer
</style>
