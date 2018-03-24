<template>
  <!-- 文章列表标签组件 -->
  <div style="width:95%; text-align:right;">
    <router-link v-for="n in 3" :key="n" class="s1c-button s1c-Bg box-show text-hidden" style="max-width:138px; height:26px; margin-left:48px; padding:0 12px; display:inline-block; box-sizing:border-box; border-radius:4px; color:#DDD; line-height:28px;" to="/category">XXXXXXXXXXXXXXXXXXXX</router-link>
  </div>
</template>

<script>
export default {
  name: 'article_category'
}
</script>

<style scoped>

</style>
