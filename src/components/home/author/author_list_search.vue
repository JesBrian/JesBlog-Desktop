<template>
  <ul id="authorList">
    <li v-for="(item, index) in userList" :key="index">
      <!--单个搜索作家组件-->
      <author-cell-search/>
    </li>
  </ul>
</template>

<script>
import authorCellSearch from './author_cell_search.vue'

export default {
  name: 'author_list_search',
  components: {
    authorCellSearch
  },

  props: [
    'userList'
  ]
}
</script>

<style scoped>

</style>
