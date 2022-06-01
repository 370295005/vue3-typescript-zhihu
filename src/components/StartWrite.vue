<template>
  <div class="component-start-write">
    <div class="py-5 text-center">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img class="w-50" src="../assets/images/callout.svg" />
        <div class="py-3 title">随心写作，自由表达</div>
        <div class="btn btn-primary" @click="toWrite">开始写文章</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toWrite = () => {
  router.push('/new')
}
</script>
<style lang="stylus">
.component-start-write
 .title
  font-size 20px
  font-weight bold
</style>
