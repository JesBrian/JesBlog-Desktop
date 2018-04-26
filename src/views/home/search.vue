<template>
  <!-- PC端前台搜索页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <!-- 页面内容布局 -->
      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; min-height:608px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <!-- 切换搜索内容 -->
        <div style="width:18%; margin:0 18px 0 68px; float:left; display:inline-block;">
          <div class="glass-Bg box-show" style="width:98%; margin:10px 23px 10px 0; padding:8px 8px; float:right; background:#181818;">
            <div style="width:88%; margin:12px auto; color:#DDD; font-weight:700; font-size:18px; text-shadow:0.5px 0.5px 0.2px #000;">切换搜索类型：
            </div>

            <ul style="text-align:center;">
              <li>
                <input id="searchTitle" class="superInput" type="radio" v-model="searchType" value="titles">
                <label for="searchTitle"><i class="MyIF cubes-1" style="font-weight:500; font-size:24px;"></i>搜索标题</label>
              </li>
              <li>
                <input id="searchAuthor" class="superInput" type="radio" v-model="searchType" value="author">
                <label for="searchAuthor"><i class="MyIF mysteryman" style="font-weight:500; font-size:24px;"></i> 搜索作家</label>
              </li>
              <li>
                <input id="searchCategory" class="superInput" type="radio" v-model="searchType" value="category">
                <label for="searchCategory"><i class="MyIF theme" style="font-weight:500; font-size:24px;"></i>搜索分类</label>
              </li>
              <li>
                <input id="searchTag" class="superInput" type="radio" v-model="searchType" value="tag">
                <label for="searchTag"><i class="MyIF kinds" style="font-weight:500; font-size:24px;"></i> 搜索标签</label>
              </li>
            </ul>
          </div>
        </div>

        <!---->
        <div id="searchContent" style="width:72%; min-height:138px; display:inline-block;">

          <!-- 搜索框 -->
          <div id="searchForm" class="glass-Bg box-show search-box" style="width:508px; height:53px; left:28px; margin:20px auto 38px; padding:0; position:relative;">
            <input type="text" placeholder=" 请输入文章标题 [ 支持模糊搜索 ] " v-model="searchKeyTemp" style="width:420px; height:30px; top:50%; left:10px; transform:translate(0,-50%); padding:0 10px; position:absolute; border: 1px solid #222; background:#444; color:#DDD; font-size:18px;">
            <span class="superButton-Out" @click="changeContent" style="width:40px; height:39px; top:50%; right:6px; transform:translate(0,-50%); float:right;">
              <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
            </span>
          </div>

          <component :is="searchType" v-if="loadData" :articleList="contentItem" :userList="contentItem" :categoryList="contentItem"/>
          <page-loading v-if="!loadData" style="margin-left:88px;"/>

          <!-- 分页组件 -->
          <pagination v-if="loadData" />

        </div>

      </div>

    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal/>

    <!-- 操作结果提示弹出框组件 -->
    <alert-tips v-if="$store.state.alertTips !== ''" />

  </div>
</template>

<script>
import navigationMenu from '../../components/home/base/extends/navigationMenu.vue'
import searchBox from '../../components/home/base/extends/searchBox.vue'
import titles from '../../components/home/article/article_list.vue'
import author from '../../components/home/author/author_list_search.vue'
import category from '../../components/home/category/category_list.vue'
import tag from '../../components/home/article/article_list.vue'
import pagination from '../../components/common/pagination/pagination.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'
import alertTips from '../../components/common/alertTips/alertTips.vue'
import pageLoading from '../../components/common/loading/pageLoading.vue'

export default {
  name: 'search',

  components: {
    navigationMenu,
    searchBox,
    titles,
    author,
    category,
    tag,
    pagination,
    floatBlock,
    pageFooter,
    modal,
    alertTips,
    pageLoading
  },

  data () {
    return {
      loadData: false,
      changeRouter: true,
      searchType: 'titles',
      searchKey: '',
      searchKeyTemp: '',
      contentItem: []
    }
  },

  watch: {
    '$route' () {
      if (typeof (this.$route.params.type) !== 'undefined' && typeof (this.$route.params.key) === 'undefined') {
        this.searchKey = ''
        this.$route.params.key = ''
        this.searchType = this.$route.params.type
      } else if (typeof (this.$route.params.type) === 'undefined') {
        this.searchKey = ''
        this.searchType = ''
      } else {
        this.searchType = this.$route.params.type
        this.searchKey = this.$route.params.key
      }
      this.searchKeyTemp = this.searchKey
      if (this.changeRouter === true) {
        this.changeContent()
        this.changeRouter = true
      } else {
        this.changeRouter = true
      }
    },

    'searchType' () {
      this.$router.push({path: '/search/' + this.searchType + '/' + this.searchKey})
    },

    'searchKey' () {
      this.$router.push({path: '/search/' + this.searchType + '/' + this.searchKey})
    }
  },

  created () {
    if (typeof (this.$route.params.type) !== 'undefined' && typeof (this.$route.params.key) === 'undefined') {
      this.searchKey = ''
      this.$route.params.key = ''
      this.searchType = this.$route.params.type
    } else if (typeof (this.$route.params.type) === 'undefined') {
      this.searchKey = ''
      this.searchType = ''
    } else {
      this.searchType = this.$route.params.type
      this.searchKey = this.$route.params.key
    }
    this.searchKeyTemp = this.searchKey
    this.changeContent()
    this.changeRouter = true
  },

  methods: {

    /**
     * 改变内容
     */
    changeContent () {
      console.log('changeContent')
      this.loadData = false
      this.changeRouter = false
      this.searchKey = this.searchKeyTemp

      let data = {
        'key': this.searchKey
      }
      let url = ''

      if (this.searchType === 'titles') {
        url = 'search/title'
      } else if (this.searchType === 'author') {
        url = 'search/author'
      } else if (this.searchType === 'category') {
        url = 'search/category'
      } else if (this.searchType === 'tag') {
        url = 'search/tag'
      }

      this.axios.post(url, data).then( (response) => {
        if (response.data.status === '01') {
          this.contentItem = response.data.data
        } else {
          this.contentItem = []
        }
        this.loadData = true
      }).catch( (error) => {
        console.log(error)
      })
    }
  }

}

</script>

<style scoped>
.search-box input:focus {
  animation: glow 800ms ease-out infinite alternate;
  background: #222922;
  background: -webkit-linear-gradient(#333, #222);
  background: -moz-linear-gradient(#333, #222);
  background: -o-linear-gradient(#333, #222);
  background: -ms-linear-gradient(#333, #222);
  background: linear-gradient(#333, #222);
  border:1px solid #22E8FF;
  box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(0, 255, 0, .1), 0 2px 0 #000;
  color: #DCD;
  outline: none;
}
@keyframes glow {
  0% {
    border-color: #22E8FF;
    box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
  }
  100% {
    border-color: #30CDFF;
    box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
  }
}
</style>
