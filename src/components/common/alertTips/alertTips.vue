<template>
  <!-- 操作结果提示弹出框组件 -->
  <div class="glass-Bg box-show" style="height:38px; padding-right:28px; bottom:28px; left:28px; position:fixed; z-index:9999;box-shadow:0 0 3px #3FE6FF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727; border-radius:0;">

    <p style="line-height:38px;">
      <i class="MyIF horn" style="margin:-2px 8px 0 18px; float:left; color:#00d8ff; font-size:23px;"></i>
      <span style="font-size:18px; color:#AAA;">{{ $store.state.alertTips }}</span>
    </p>

    <i @click="closeAlertTips" style="top:-1px; right:3px; position:absolute; font-size:20px; color:#DDD; cursor:pointer;">×</i>
  </div>
</template>

<script>
export default {
  name: 'alert-tips',

  methods: {
    closeAlertTips () {
      this.$store.commit('closeAlertTips')
    }
  }
}

</script>

<style scoped>

</style>
