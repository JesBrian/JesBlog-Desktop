<template>
  <div class="x-bar">
    <div :id="option.id" :option="option"></div>
  </div>
</template>

<script>
import vueHighcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'

export default {
  name: 'charts',

  // 验证类型
  props: [
    'option'
  ],

  mounted() {
    highcharts3d(vueHighcharts)
    vueHighcharts.chart(this.option.id, this.option)
  }
}
</script>

<style scoped>

</style>
