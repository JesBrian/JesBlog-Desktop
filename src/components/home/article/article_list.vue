<template>
  <!-- 文章列表组件 -->
  <ul id="articleListComponent" style="width:100%; color:#999;">
    <li v-for="item in articleList" :key="item.id">
      <article-cell-type-a :article="item" />
    </li>
  </ul>
</template>

<script>
import articleCellTypeA from './article_cell_type1.vue'

export default {
  name: 'article_list',
  components: {
    articleCellTypeA
  },

  props: [
    'articleList'
  ],

  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
