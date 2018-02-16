<template>
  <!-- 列表信息组件 -->
  <div style="position:relative;">

    <table class="box-show" style="width:100%; height:100%;">

      <!-- 列表信息标题组件 -->
      <infoTitle/>

      <!-- 列表单个信息组件 -->
      <info-cell v-for="item in contentList" :key="item.id" :userInfo="item"/>

    </table>

    <pagination/>

  </div>
</template>

<script>
import infoCell from '../user/infoCell.vue'
import infoTitle from '../user/infoTitle.vue'
import pagination from '../../common/pagination/pagination.vue'

export default {
  name: 'info-list',
  components: {
    infoCell,
    infoTitle,
    pagination
  },
  data () {
    return {
      contentList: []
    }
  },

  created () {
    let data = {}
    let thisObj = this
    this.axios.post('user/backstage-user-list', data).then(function (response) {
      if (response.data.status === '01') {
        thisObj.contentList = response.data.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  table tr, table >>> td, table >>> th {
    box-sizing:border-box;
    border: 1px solid #222;
  }

  table tr:nth-child(odd){
    background:#555;
  }
  table tr:nth-child(even){
    background:#666;
  }
</style>
