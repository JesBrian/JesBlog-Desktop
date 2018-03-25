<template>
  <ul id="authorList">
    <li v-for="(item, index) in userList" :key="index">
      <!--单个搜索作家组件-->
      <author-cell-search />
    </li>
    <li>
      <end-tips />
    </li>
  </ul>
</template>

<script>
import authorCellSearch from './author_cell_search.vue'
import endTips from '../../common/endTips/endTips.vue'

export default {
  name: 'author_list_search',

  components: {
    authorCellSearch,
    endTips
  },

  props: [
    'userList'
  ]
}
</script>

<style scoped>

</style>
