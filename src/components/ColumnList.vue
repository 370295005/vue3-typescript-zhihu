<template>
  <div class="component-colum-list row py-4">
    <div v-for="item in dataList" :key="item.id" class="list-item col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center" @click="toDetail(item)">
          <img class="rounded-circle border border-light my-3" :src="item.avatar" />
          <div class="card-title">{{ item.title }}</div>
          <div class="card-text desc">{{ item.description }}</div>
          <div class="btn btn-primary">进入专栏</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { ColumProps } from '@/types'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumProps[]>,
      default: () => []
    }
  },
  setup (props) {
    const router = useRouter()
    const dataList = computed(() => {
      return (props.list || []).map((e) => {
        e.avatar = e.avatar || require('@/assets/images/avatar.jpg')
        return e
      })
    })
    const toDetail = (item: ColumProps) => {
      router.push({
        path: '/author',
        params: {
          id: item.id
        },
        name: 'Author'
      })
    }
    return {
      toDetail,
      dataList
    }
  }
})
</script>
<style lang="stylus">
.component-colum-list
  .list-item
    .card-body
      cursor pointer
    .desc
      height 90px
      text-align left
      overflow hidden
</style>
