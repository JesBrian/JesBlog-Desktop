<template>
  <!-- 列表单个信息组件 -->
  <!-- eslint-disable no-tabs -->
	<tr style="height:43px; line-height:42px; font-size:16px;">
    <td>0</td>
    <td>1</td>
    <td>{{ info.name }}</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
  </tr>
</template>

<script>

export default {
  name: 'info-cell',

  components: {},

  props: [
    'info'
  ]
}
</script>

<style scoped>

</style>
