<template>
  <div class="start-write-component">
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

const toWrite = () => {
  console.log(123)
}

</script>

<style lang="scss">
.start-write-component {
  width: 100%;
  // background-color: #f8f9fa;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
