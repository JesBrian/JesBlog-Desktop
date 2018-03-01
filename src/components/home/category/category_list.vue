<template>
  <ul id="categoryList">
    <li v-for="(item, index) in categoryList" :key="index">
      <category-cell :category="item" />
    </li>
  </ul>
</template>

<script>
import categoryCell from './categoryCell.vue'

export default {
  name: 'category',

  props: [
    'categoryList'
  ],

  components: {
    categoryCell
  }
}
</script>

<style scoped>

</style>
