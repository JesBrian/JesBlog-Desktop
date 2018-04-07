<template>
  <div>
    <div class="s1c-Bg box-show" style="width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; border-radius:6px; font-size:25px; line-height:48px; font-family:'Microsoft YaHei', '黑体', sans-serif; font-weight:700; color:#AAA;">
      <router-link to="/backstage" style="color:#24c9ff">后台主页</router-link><i style="margin:0 10px; color:#FFF;">/</i><span style="cursor:not-allowed">搜索记录列表</span>

      <div style="top:5px; right:8px; position:absolute;">
        <span class="superButton-Out" style="width:39px; height:38px;">
          <span class="superButton-In MyIF add-data" style="width:29px; height:27px; font-size:21px; line-height:28px;"></span>
        </span>
        <span class="superButton-Out" style="width:39px; height:38px;">
          <span class="superButton-In MyIF recycle-2" style="width:29px; height:27px; font-size:21px; line-height:28px;"></span>
        </span>
      </div>

    </div>

    <!-- 列表信息组件 -->
    <info-list/>

  </div>
</template>

<script>
import infoList from '../../../components/backstage/base/infoList.vue'

export default {
  name: 'search-list',

  components: {
    infoList
  }
}
</script>

<style scoped>

</style>
