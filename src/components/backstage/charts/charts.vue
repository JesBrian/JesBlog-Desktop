<template>
  <div class="x-bar">
    <div :id="id" :option="option"></div>
  </div>
</template>

<script>
import vueHighcharts from 'highcharts'

export default {
  name: 'charts',

  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },

  mounted() {
    vueHighcharts.chart(this.id, this.option)
  }
}
</script>

<style scoped>

</style>
