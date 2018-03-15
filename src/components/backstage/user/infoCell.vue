<template>
  <!-- 列表单个信息组件 -->
  <!-- eslint-disable no-tabs -->
	<tr style="height:33px; line-height:33px; font-size:16px;">
    <td style="text-align:center;"><input type="checkbox"/></td>
    <td>1</td>
    <td>{{ info.username }}</td>
    <td>3</td>
    <td>4</td>
    <td>{{ info.mail }}</td>
    <td>6</td>
    <td>7</td>
    <td style="text-align:center;">{{ timestampToTime(info.create_time) }}</td>
  </tr>
</template>

<script>
import helpFunc from '../../../assets/js/common.js'

export default {
  name: 'info-cell',

  components: {},

  props: [
    'info'
  ],

  methods: {
    timestampToTime (timestamp) {
      return helpFunc.timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped>

</style>
