<template>
  <!-- 列表信息组件 -->
  <div style="position:relative;">

    <table class="box-show" style="width:100%; height:100%;">

      <!-- 列表信息标题组件 -->
      <component :is="contentTitleType"/>

      <!-- 列表单个信息组件 -->
      <component :is="contentListType" v-for="item in contentList" :key="item.id" :info="item"/>

    </table>

    <pagination/>

  </div>
</template>

<script>
import userInfoTitle from '../user/infoTitle.vue'
import userInfoCell from '../user/infoCell.vue'
import categoryInfoTitle from '../category/infoTitle.vue'
import categoryInfoCell from '../category/infoCell.vue'
import pagination from '../../common/pagination/pagination.vue'

export default {
  name: 'info-list',
  components: {
    userInfoTitle,
    userInfoCell,
    categoryInfoTitle,
    categoryInfoCell,
    pagination
  },
  data () {
    return {
      contentTitleType: '',
      contentListType: '',
      contentList: []
    }
  },

  created () {
    let data = {}
    let thisObj = this
    let url = ''

    if (this.$route.path === '/backstage/userList') {
      this.contentTitleType = 'userInfoTitle'
      this.contentListType = 'userInfoCell'
      url = 'user/backstage-user-list'
    } else if (this.$route.path === '/backstage/categoryList') {
      this.contentTitleType = 'categoryInfoTitle'
      this.contentListType = 'categoryInfoCell'
      url = 'category/backstage-category-list'
    }

    this.axios.post(url, data).then(function (response) {
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
