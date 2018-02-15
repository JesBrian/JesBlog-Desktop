<template>
  <!-- 用户名组件 -->
  <router-link class="hover-underline" :to="'/author/' + userid">{{ username }}</router-link>
</template>

<script>
export default {
  name: 'username',

  props: [
    'userid',
    'username'
  ]
}
</script>

<style scoped>

</style>
