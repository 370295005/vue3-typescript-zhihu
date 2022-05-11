<template>
  <div>test</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup () {
    onMounted(() => {
      console.log('onMounted')
    })
  }
})
</script>
