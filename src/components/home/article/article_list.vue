<template>
  <!-- 文章列表组件 -->
  <ul id="articleListComponent" style="width:100%; color:#999;">
    <li v-for="item in articleList" :key="item.id">
      <article-cell-type-a :article="item" />
      <article-cell-type-b :article="item" />
    </li>
  </ul>
</template>

<script>
import articleCellTypeA from './article_cell_type1.vue'
import articleCellTypeB from './article_cell_type2.vue'

export default {
  name: 'article_list',
  components: {
    articleCellTypeA,
    articleCellTypeB
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
