<template>
  <div class="component-loading" v-show="isLoading">
    <div class="circle"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="stylus">
.component-loading
 width: 100%
 height: 100%
 background-color #fff
 opacity: 0.4
 position: absolute
 top 0
 left: 0
 display flex
 justify-content center
 align-items center
 .circle
  width: 5rem
  height: 5rem
  border-radius: 50%
  border: 3px solid #0d6efd
  border-right 3px solid transparent
  animation: rotate360 1s infinite linear
 @keyframes rotate360 {
  0%{
   transform: rotate(0deg)
  }
  50%{
   transform: rotate(180deg)
  }
  100%{
   transform: rotate(360deg)
  }
 }
</style>
