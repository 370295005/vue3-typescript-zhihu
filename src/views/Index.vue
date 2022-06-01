<template>
  <div class="index-page">
    <start-write></start-write>
    <div class="recommend-container">
      <div class="recommend-item row py-4">
        <div v-for="item in recommendList" :key="item.id" class="list-item col-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <!-- <img class="rounded-circle border border-light my-3" :src="item.avatar" /> -->
              <div class="card-title">{{ item.title }}</div>
              <div class="card-text content">{{ item.content }}</div>
              <div class="btn btn-primary" @click="toDetail(item)">进入专栏</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getRecommedList, recommendListType, respondType } from '../api'
import StartWrite from '../components/StartWrite.vue'
const recommendList = ref([])
const router = useRouter()
const route = useRoute()
const initData = () => {
  getRecommedListData()
}
const getRecommedListData = async () => {
  const res = await getRecommedList()
  recommendList.value = res?.data?.recommendList || []
}
const toDetail = (item: any) => {
  router.push({
    path: `/post/${item.id}`,
    query: route.query
  })
}
onMounted(async () => {
  initData()
})
</script>

<style lang="scss">
.index-page {
  height: 100%;
  .recommend-item {
    .content {
      height: 90px;
      margin-bottom: 5px;
      text-align: left;
      overflow: hidden;
    }
  }
}
</style>
