<template>
  <ul id="categoryList">
    <li v-for="(item, index) in categoryList" :key="index">
      <category-cell :category="item" />
    </li>
    <li>
      <end-tips />
    </li>
  </ul>
</template>

<script>
import categoryCell from './categoryCell.vue'
import endTips from '../../common/endTips/endTips.vue'

export default {
  name: 'category',

  components: {
    categoryCell,
    endTips
  },

  props: [
    'categoryList'
  ]

}
</script>

<style scoped>

</style>
