<template>
  <div class="zhihu-index-page">
    <start-write />
    <column-list :list="data"></column-list>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, onActivated, ref } from 'vue'
import StartWrite from '@/components/StartWrite.vue'
import { getRecommend, getBlogList } from '@/api'
import ColumnList from '@/components/ColumnList.vue'
import { useRoute } from 'vue-router'
import { ColumProps } from '@/types'
import { useStore, mapActions } from 'vuex'
import { FLIPPED_ALIAS_KEYS } from '@babel/types'
const store = useStore()
const data = ref<ColumProps[]>([])
const initData = async () => {
  const data = await getBlogList()
  console.log(data)
  setTimeout(() => {
    store.dispatch('updateLoading', false)
  }, 1000)
}
onActivated(() => {
  initData()
})
</script>
<style lang="stylus"></style>
