<template>
  <!-- 列表信息组件 -->
  <div class="info-list" style="position:relative;">

    <!-- 列表信息组件 -->
    <component :is="listType" :contentList="contentList" />

    <!-- 加载等待loading组件 -->
    <div v-if="contentList.length === 0" style="width:100%; height:288px; position:relative;">
      <page-loading/>
    </div>

    <!-- 分页组件 -->
    <pagination/>

  </div>
</template>

<script>
import userInfoTable from '../user/infoTable.vue'
import adminInfoTable from '../admin/infoTable.vue'
import categoryInfoTable from '../category/infoTable.vue'
import articleInfoTable from '../article/infoTable.vue'
import slideInfoTable from '../slide/infoTable.vue'
import pagination from '../../common/pagination/pagination.vue'
import pageLoading from '../../common/loading/pageLoading.vue'

export default {
  name: 'info-list',
  components: {
    userInfoTable,
    adminInfoTable,
    categoryInfoTable,
    articleInfoTable,
    slideInfoTable,
    pagination,
    pageLoading
  },
  data () {
    return {
      listType: '',
      contentList: []
    }
  },

  created () {
    let data = {}
    let thisObj = this
    let url = ''

    if (this.$route.path === '/backstage/userList') {
      this.listType = 'userInfoTable'
      url = 'user/backstage-user-list'
    } else if (this.$route.path === '/backstage/categoryList') {
      this.listType = 'categoryInfoTable'
      url = 'category/backstage-category-list'
    } else if (this.$route.path === '/backstage/adminList') {
      this.listType = 'adminInfoTable'
      url = 'admin/backstage-list'
    } else if (this.$route.path === '/backstage/articleList') {
      this.listType = 'articleInfoTable'
      url = 'article/backstage-list'
    } else if (this.$route.path === '/backstage/slideList') {
      this.listType = 'slideInfoTable'
      url = 'slide/backstage-list'
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

  .info-list >>> tr, .info-list >>> td, .info-list >>> th {
    margin:0;
    padding:0;
    box-sizing:border-box;
    border: 1px solid #222;
  }

  .info-list >>> tr:nth-child(odd){
    background:#555;
  }
  .info-list >>> tr:nth-child(even){
    background:#666;
  }
  .info-list >>> tr:hover{
    background:#3F3F3F;
  }

  .info-list >>> .accountTableOper {
    width:33px;
    border-radius:4px;
    text-align:center;
    position:relative;
    z-index:8888;
  }
  .info-list >>> .accountTableOper:hover {
    background:#191919;
    box-shadow:inset 0 0 2px #FFF, 0 0 5px #000;
    z-index:9999;
  }
  .info-list >>> .accountTableOper > .MyIF {
    width:100%;
    height:100%;
    display:inline-block;
    font-size:18px;
    color: #459bff;
    cursor:pointer;
  }
  .info-list >>> .accountTableOper:hover > .MyIF {
    color: #46dfff;
    text-shadow:0.2px 0.2px 0.2px #000;
  }

  .info-list >>> input[type=checkbox] {
    display:none;
  }
  .info-list >>> .super-checkbox > i {
    width:20px;
    height:20px;
    margin:0;
    position:relative;
    display:inline-block;
    z-index:2;
    font-size:18px;
    font-weight:900;
    line-height:22px;
    color: #111;
    text-align:left;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    text-decoration: none;
    cursor: pointer;
    border: 0.5px solid #333;
    background-image: linear-gradient(#2e3537, #333);
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 rgba(128, 128, 128, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    user-select:none;
  }
  .info-list >>> .super-checkbox > i:after {
    content:'';
    width:22px;
    height:22px;
    top:-1px;
    left:-1px;
    position:absolute;
    z-index:-1;
  }
  .info-list >>> .super-checkbox:hover > i {
    color: #AEAEAE;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #545454), color-stop(100%, #373738));
    background-image: -moz-linear-gradient(#545454, #373738);
    background-image: -webkit-linear-gradient(#545454, #373738);
    background-image: linear-gradient(#545454, #373738);
  }
  .info-list >>> .super-checkbox > input[type=checkbox]:checked + i {
    color:#00ccff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 255, 0.7);
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #262627), color-stop(100%, #2d2d2e));
    background-image: -moz-linear-gradient(#262627, #2d2d2e);
    background-image: -webkit-linear-gradient(#262627, #2d2d2e);
    background-image: linear-gradient(#262627, #2d2d2e);
    box-shadow: inset 0 5px 6px rgba(0, 0, 0, 0.3), inset 0 0 4px rgba(0, 0, 0, 0.9), 0 0 0 black,  0 0 8px rgba(0, 193, 255, 0.2), 0 0 1px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05), 0 0 6px rgba(0, 193, 255, 0.1);

  }
</style>
