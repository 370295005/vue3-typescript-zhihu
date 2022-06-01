<template>
  <router-view v-slot="{ Component }">
    <common-header />
    <div class="container component-container">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </div>
    <common-bottom></common-bottom>
  </router-view>
</template> 

<script lang="ts" setup>
import CommonHeader from './components/CommonHeader.vue'
import CommonBottom from './components/CommonBottom.vue'
import useMapState from './hooks/useMapState'
</script>

<style lang="scss">
.component-container {
  min-height: calc(100vh - 160px);
}
</style>