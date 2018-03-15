<template>
  <div>
    <div class="s1c-Bg box-show" style="width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; border-radius:6px; font-size:25px; line-height:48px; font-family:'Microsoft YaHei', '黑体', sans-serif; font-weight:700; color:#AAA;">
      <router-link to="/backstage" style="color:#24c9ff">后台主页</router-link><i style="margin:0 10px; color:#FFF;">/</i><span style="cursor:not-allowed">修改管理员</span>
    </div>

    <table style="width:80%; margin:0 auto;">
      <tr>
        <td style="padding-bottom:28px; text-align:center;">用户名</td>
        <td style="padding-bottom:28px;">
          <label><input class="s1c-Bg box-show" type="text" style="width:88%; padding:4px 12px; font-size:19px;"/></label>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:28px; text-align:center;">密码</td>
        <td style="padding-bottom:28px;">
          <label><input class="s1c-Bg box-show" type="password" style="width:88%; padding:4px 12px; font-size:19px;"/></label>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:28px; text-align:center;">重输密码</td>
        <td style="padding-bottom:28px;">
          <label><input class="s1c-Bg box-show" type="password" style="width:88%; padding:4px 12px; font-size:19px;"/></label>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align:center;">
          <span class="superButton-Out" style="width:148px; height:40px; margin:18px 13% 0 0;">
            <span class="superButton-In MyIF makesure" style="width:136px; height:28px; left:49%; font-size:20px; line-height:28px;"> 确认提交</span>
          </span>
          <span class="superButton-Out" style="width:148px; height:40px; margin:18px 0 0 13%;">
            <span class="superButton-In MyIF cancel" style="width:136px; height:28px; left:49%; font-size:20px; line-height:28px;"> 取消返回</span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'update-admin'
}
</script>

<style scoped>

</style>
