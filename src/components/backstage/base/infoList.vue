<template>
  <div style="position:relative;">

    <table class="s1c-Bg box-show" style="width:100%;">
      <info-cell v-for="item in 32" :key="item"/>
    </table>
  </div>
</template>

<script>
import infoCell from '../user/infoCell.vue'

export default {
  name: 'info-list',
  components: {
    infoCell
  }
}
</script>

<style scoped>

</style>
