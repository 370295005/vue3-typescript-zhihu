<template>
  <transition name="fade">
    <div class="component-toast" v-show="isShow">
      <div class="text">{{ toastText }}</div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    toastText: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 1000
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const isShow = ref(false)
    watch(
      () => props.isVisible,
      (nv) => {
        if (nv) {
          isShow.value = !isShow.value
          setTimeout(() => {
            isShow.value = !isShow.value
          }, 1000)
        }
      }
    )
    return {
      isShow
    }
  }
})
</script>
<style lang="stylus">
.fade-enter, .fade-leave-active
 opacity 0
.fade-enter-active, .fade-leave-active
 transition all 0.3s ease-in-out
.component-toast
 position: fixed
 top 50%
 left 50%
 transform translate(-50%, -50%)
 border-radius 3px
 overflow hidden
 background-color #25262d
 .text
  padding: 10px 10px
  color: #fff
  text-align: center
  font-size 16px
</style>
