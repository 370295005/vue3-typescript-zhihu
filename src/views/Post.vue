<template>
  <div class="post-page">
    <div class="post-container w-75 mx-auto">
      <!-- <img class="rounded-lg img-fluid my-4" :src="postData.image" alt="" /> -->
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
        <div class="col text-right">发表于：{{ publishTime }}</div>
      </div>
      <div class="content">{{ postData.content }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostDetail, postDetailType, getUserInfo, userInfoType } from '../api'
import defaultAvatar from '../assets/images/avatar.jpg'
import parseTime from '../lib/parseTime'
const route = useRoute()
const postData: Ref<postDetailType> = ref({
  id: 0,
  title: '',
  content: '',
  createTime: 0,
  author: '',
  recommend: 0
})
const authorInfo: Ref<userInfoType> = ref({
  id: 0,
  description: '',
  nickname: '',
  avatar: null
})
const publishTime = computed(() => {
  return parseTime(postData.value.createTime)
})
const initData = () => {
  getPostDetailData()
}
const getPostDetailData = async () => {
  const id = +route.params.id
  const res = await getPostDetail(id)
  postData.value = res.data
  getUserInfoData(res.data.author)
}
const getUserInfoData = async (nickname: string) => {
  const payload = {
    nickname
  }
  const res = await getUserInfo(payload)
  authorInfo.value = res.data
  if (authorInfo.value.avatar === null) {
    authorInfo.value.avatar = defaultAvatar
  }
}
onMounted(() => {
  initData()
})
</script>

<style lang="scss">
@import '../assets/style/utils.scss';
.post-page {
  height: 100%;
  .text-right {
    text-align: right;
  }
  .flex {
    @include flex-box('flex-start', 'flex-start');
    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
}
</style>
