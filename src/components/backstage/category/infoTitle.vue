<template>
  <!-- 列表信息标题组件 -->
  <!-- eslint-disable no-tabs -->
  <tr class="glass-Bg" style="height:33px; line-height:33px; font-size:18px; font-weight:700; color:#FFF; background:#333; border-radius:0;">
    <th style="width:33px;"><label class="super-checkbox"><input type="checkbox"/><i>√</i></label></th>
    <th colspan="3">操作</th>
    <th >分类名</th>
    <th >图标</th>
    <th >火热程度</th>
    <th >关注人数</th>
    <th >收录文章</th>
    <th >状态</th>
  </tr>
</template>

<script>
export default {
  name: 'info-title'
}
</script>

<style scoped>

</style>
