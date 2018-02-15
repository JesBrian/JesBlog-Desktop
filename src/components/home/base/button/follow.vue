<template>
  <!-- "关注"按钮组件 -->
  <span class="superButton-Out">
    <span class="superButton-In MyIF follow" @click="clickFollow"> 关注</span>
  </span>
</template>

<script>
export default {
  name: 'follow',
  methods: {
    clickFollow () {
      this.$parent.clickFollow()
    }
  }
}
</script>

<style scoped>
  span.superButton-Out {
    width: 68px;
    height: 32px;
    top: 7px;
    right: 8px;
    position: absolute;
    border-radius: 2px;
  }

  span.follow {
    width: 58px;
    height: 23px;
    line-height: 24px;
  }
</style>
