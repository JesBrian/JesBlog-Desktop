<template>
  <!-- 列表单个信息组件 -->
  <!-- eslint-disable no-tabs -->
	<tr style="height:30px; line-height:30px; font-size:16px;">
    <td style="text-align:center;"><label class="super-checkbox"><input type="checkbox"/><i>√</i></label></td>
    <td class="accountTableOper"><i class="accountOperIframeUrl MyIF tool" title="修改"></i></td>
    <td class="accountTableOper"><i class="MyIF search" title="查看详情"></i></td>
    <td class="accountTableOper"><i class="MyIF recycle-2" title="删除"></i></td>
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
