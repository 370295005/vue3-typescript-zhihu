<template>
  <div class="zhihu-index-page">
    <start-write />
    <column-list :list="data"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, onActivated, ref } from 'vue'
import StartWrite from '@/components/StartWrite.vue'
import { getRecommend } from '@/api'
import ColumnList from '@/components/ColumnList.vue'
import { useRoute } from 'vue-router'
import { ColumProps } from '@/types'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    ColumnList,
    StartWrite
  },
  setup () {
    const store = useStore()
    const data = ref<ColumProps[]>([
      {
        id: 0,
        title: '',
        avatar: '',
        description: ''
      }
    ])
    const initData = async () => {
      data.value = await getRecommend()
      setTimeout(() => {
        store.dispatch('updateLoading', false)
      }, 1000)
    }
    onActivated(() => {
      initData()
    })
    return {
      data
    }
  }
})
</script>
<style lang="stylus"></style>
