<template>
  <div class="zhihu-login-page">
    <custom-input type="login" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomInput from '@/components/CustomInput.vue'
export default defineComponent({
  components: {
    CustomInput
  }
})
</script>
<style lang="stylus"></style>
