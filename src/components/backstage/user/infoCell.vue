<template>
  <!-- 列表单个信息组件 -->
  <!-- eslint-disable no-tabs -->
	<tr style="height:43px; line-height:42px; font-size:16px;">
    <td></td>
    <td>1</td>
    <td>{{ userInfo.username }}</td>
    <td>3</td>
    <td>4</td>
    <td>{{ userInfo.mail }}</td>
    <td>6</td>
    <td>7</td>
    <td style="text-align:center;">{{ timestampToTime(userInfo.create_time) }}</td>
  </tr>
</template>

<script>
import helpFunc from '../../../assets/js/common.js'

export default {
  name: 'info-cell',

  components: {},

  props: [
    'userInfo'
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
