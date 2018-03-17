<template>
  <!-- 列表信息组件 -->
  <div style="position:relative;">

    <table class="box-show" style="width:100%; height:100%;">

      <!-- 列表信息标题组件 -->
      <component :is="contentTitleType"/>

      <!-- 列表单个信息组件 -->
      <component :is="contentListType" v-for="item in contentList" :key="item.id" :info="item" :isSelectAll="isSelectAll" />
    </table>

    <!-- 加载等待loading组件 -->
    <div v-if="contentList.length === 0" style="width:100%; height:288px; position:relative;">
      <page-loading/>
    </div>

    <!-- 分页组件 -->
    <pagination/>

  </div>
</template>

<script>
import userInfoTitle from '../user/infoTitle.vue'
import userInfoCell from '../user/infoCell.vue'
import adminInfoTitle from '../admin/infoTitle.vue'
import adminInfoCell from '../admin/infoCell.vue'
import categoryInfoTitle from '../category/infoTitle.vue'
import categoryInfoCell from '../category/infoCell.vue'
import articleInfoTitle from '../article/infoTitle.vue'
import articleInfoCell from '../article/infoCell.vue'
import slideInfoTitle from '../slide/infoTitle.vue'
import slideInfoCell from '../slide/infoCell.vue'
import pagination from '../../common/pagination/pagination.vue'
import pageLoading from '../../common/loading/pageLoading.vue'

export default {
  name: 'info-list',
  components: {
    userInfoTitle,
    userInfoCell,
    adminInfoTitle,
    adminInfoCell,
    categoryInfoTitle,
    categoryInfoCell,
    articleInfoTitle,
    articleInfoCell,
    slideInfoTitle,
    slideInfoCell,
    pagination,
    pageLoading
  },
  data () {
    return {
      contentTitleType: '',
      contentListType: '',
      contentList: [],
      isSelectAll: false
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
    } else if (this.$route.path === '/backstage/adminList') {
      this.contentTitleType = 'adminInfoTitle'
      this.contentListType = 'adminInfoCell'
      // url = 'category/backstage-category-list'
    } else if (this.$route.path === '/backstage/articleList') {
      this.contentTitleType = 'articleInfoTitle'
      this.contentListType = 'articleInfoCell'
      // url = 'category/backstage-category-list'
    } else if (this.$route.path === '/backstage/slideList') {
      this.contentTitleType = 'slideTitle'
      this.contentListType = 'slideInfoCell'
      // url = 'category/backstage-category-list'
    }

    this.axios.post(url, data).then(function (response) {
      if (response.data.status === '01') {
        thisObj.contentList = response.data.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  },

  methods: {
    selectAll (type) {
      // console.log(type)
      this.isSelectAll = type
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  table tr, table >>> td, table >>> th {
    margin:0;
    padding:0;
    box-sizing:border-box;
    border: 1px solid #222;
  }

  table tr:nth-child(odd){
    background:#555;
  }
  table tr:nth-child(even){
    background:#666;
  }
  table tr:hover{
    background:#3F3F3F;
  }

  table >>> .accountTableOper {
    width:33px;
    border-radius:4px;
    text-align:center;
    position:relative;
    z-index:8888;
  }
  table >>> .accountTableOper:hover {
    background:#191919;
    box-shadow:inset 0 0 2px #FFF, 0 0 5px #000;
    z-index:9999;
  }
  table >>> .accountTableOper > .MyIF {
    width:100%;
    height:100%;
    display:inline-block;
    font-size:18px;
    cursor:pointer;
  }
  table >>> .accountTableOper:hover > .MyIF {
    color: #46dfff;
    text-shadow:0.2px 0.2px 0.2px #000;
  }

  table >>> input[type=checkbox] {
    display:none;
  }
  table >>> .super-checkbox > i {
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
  table >>> .super-checkbox > i:after {
    content:'';
    width:22px;
    height:22px;
    top:-1px;
    left:-1px;
    position:absolute;
    z-index:-1;
  }
  table >>> .super-checkbox:hover > i {
    color: #AEAEAE;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #545454), color-stop(100%, #373738));
    background-image: -moz-linear-gradient(#545454, #373738);
    background-image: -webkit-linear-gradient(#545454, #373738);
    background-image: linear-gradient(#545454, #373738);
  }
  table >>> .super-checkbox > input[type=checkbox]:checked + i {
    color:#00ccff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 255, 0.7);
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #262627), color-stop(100%, #2d2d2e));
    background-image: -moz-linear-gradient(#262627, #2d2d2e);
    background-image: -webkit-linear-gradient(#262627, #2d2d2e);
    background-image: linear-gradient(#262627, #2d2d2e);
    box-shadow: inset 0 5px 6px rgba(0, 0, 0, 0.3), inset 0 0 4px rgba(0, 0, 0, 0.9), 0 0 0 black,  0 0 8px rgba(0, 193, 255, 0.2), 0 0 1px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05), 0 0 6px rgba(0, 193, 255, 0.1);

  }
</style>
