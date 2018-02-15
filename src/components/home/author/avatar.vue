<template>
  <!-- 头像组件 -->
  <router-link :to="'/author/' + userid"><img class="box-show" src="../../../assets/images/touxiang.jpg"></router-link>
</template>

<script>
export default {
  name: 'avatar',

  props: [
    'userid'
  ]
}
</script>

<style scoped>
  a {
    display: inline-block;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
</style>
