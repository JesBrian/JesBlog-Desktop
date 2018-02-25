<template>
  <!-- "找回密码"拟态框组件 -->
  <div class="s1c-Bg box-show">

    <!-- 拟态框头部 -->
    <div class="no-select glass-Bg"
         style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img v-lazy="this.$store.state.baseHost + 'img/icon/power.png'" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">找回密码</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <!-- "找回密码"拟态框内容 -->
    <div style="width:100%; margin-bottom:18px;">

      <div style="width:60%; height:62px; margin:0 auto; font-size:19px;">
        <label class="MyIF mail" for="registerMail" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
          <span style="margin-left:8px; color:#DDD;">注册邮箱</span>
        </label>
        <input id="registerMail" type="text" class="s1c-Bg box-show" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写注册时填写的邮箱"/>
      </div>

      <p style="text-align:center; font-size:16px;">邮件发送后，两小时有效！请注意时间</p>

      <div style="width:75%; height:28%; margin:18px auto; text-align:center;">
        <span class="superButton-Out" @click="closeModal" style="width:108px; height:38px; margin:0 48px 0 0;">
          <button class="superButton-In MyIF cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 取消返回</button>
        </span>
        <span class="superButton-Out" style="width:108px; height:38px; margin:0 0 0 48px;">
          <a class="superButton-In MyIF makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 确认发送</a>
        </span>
      </div>

    </div>

  </div>
</template>

<script>
import closeButton from '../close_button.vue'

export default {
  name: 'repasswd',
  components: {
    closeButton
  },
  data () {
    return {}
  },
  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>

</style>
