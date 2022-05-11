<template>
  <div class="zhihu-register-page">
    <custom-input type="register" />
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
