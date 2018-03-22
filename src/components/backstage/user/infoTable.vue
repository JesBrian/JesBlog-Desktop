<template>
  <!-- 用户列表表格 -->
  <table class="box-show" style="width:100%; height:100%;">
    <tr class="glass-Bg" style="height:33px; line-height:33px; font-size:18px; font-weight:700; color:#FFF; background:#333; border-radius:0;">
      <th style="width:33px;"><label class="super-checkbox"><input v-model="selectAll" value="selectAll" type="checkbox"/><i>√</i></label></th>
      <th colspan="3">操作</th>
      <th>用户名</th>
      <th style="width:53px;">头像</th>
      <th style="width:53px;">性别</th>
      <th>邮箱</th>
      <th style="width:53px;">主页</th>
      <th style="width:53px;">状态</th>
      <th>注册时间</th>
    </tr>

    <tr v-for="item in contentList" :key="item.id" style="height:30px; line-height:30px; font-size:16px;">
      <td style="text-align:center;"><label class="super-checkbox"><input v-model="selectIds" type="checkbox" :value="item.id" :checked="selectAll.length === 1" /><i>√</i></label></td>
      <td class="accountTableOper"><i class="accountOperIframeUrl MyIF tool" title="修改"></i></td>
      <td class="accountTableOper"><i class="MyIF search" title="查看详情"></i></td>
      <td class="accountTableOper"><i class="MyIF recycle-2" title="删除"></i></td>
      <td>{{ item.username }}</td>
      <td>{{ item.avata }}</td>
      <td>{{ numToSex(item.sex) }}</td>
      <td>{{ item.mail }}</td>
      <td>{{ item.home }}</td>
      <td>{{ item.status }}</td>
      <td style="text-align:center;">{{ timestampToTime(item.create_time) }}</td>
    </tr>
  </table>
</template>

<script>
import helpFunc from '../../../assets/js/common.js'

export default {
  name: 'info-table',

  props: [
    'contentList'
  ],

  data () {
    return {
      selectAll: [],
      selectIds: []
    }
  },

  watch: {
    selectAll (val) {
      this.selectIds = []
      if (val.length === 1) {
        for (let i = 0; i < this.contentList.length; i++) {
          this.selectIds.push(this.contentList[i].id)
        }
      }
    }
  },

  methods: {

    numToSex (num) {
      if (num === 1) {
        return '男'
      } else if (num === 2) {
        return '女'
      } else {
        return '保密'
      }
    },

    timestampToTime (timestamp) {
      return helpFunc.timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped>

</style>
