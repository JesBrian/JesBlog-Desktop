<template>
  <div>
    简记 - 后台管理系统主页

    <x-charts :id="id" :option="option" />
  </div>
</template>

<script>
import xCharts from '../../components/backstage/charts/charts.vue'
import options from '../../assets/js/testCharts.js'

export default {
  name: 'index',

  components: {
    xCharts
  },

  data() {
    let option = options.bar
    return {
      id: 'test',
      option: option
    }
  }
}
</script>

<style scoped>
  #test {
    width: 400px;
    height: 400px;
    margin: 40px auto;
  }
</style>
