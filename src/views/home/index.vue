<template>
  <!-- PC端前台主页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div class="glass-Bg box-show" style="width:888px; height:348px; margin:0 auto 38px; position:relative; border-radius:8px; clear:both;">
        <!-- 轮播图组件 -->
        <slide-box style="width:72%; height:88.4%; display:inline-block;"/>

        <!-- 推荐文章分类 -->
        <div v-if="loadData" style="width:20%; height:92%; margin:23px 23px 0 0; display:inline-block; float:right;">
          <ul style="height:100%;">
            <li v-for="n in 6" class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
              <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                <img v-lazy="$store.state.baseHost + 'img/tag/tag' + ((n - 1) % 3 + 1) + '.png'" style="width:43px; height:43px; top:-7px; left:-28px; position:absolute;"/>
                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">{{ n }}sfdvgchjkdfbgjhjk</p>
              </router-link>
            </li>
          </ul>
        </div>

        <base-loading v-if="!loadData" style="top:50%; right:0; margin-right:68px; transform:translate(0, -50%); position:absolute;"/>
      </div>

      <!-- 搜索框组件 -->
      <search-box @search="goSearch" />

      <!-- 主页内容 -->
      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; min-height:388px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <div v-if="loadData" >
          <div style="width:68%; display:inline-block;">
            <!-- 文章列表组件 -->
            <article-list :articleList="articleList"/>
          </div>

          <div style="width:28%; display:inline-block; float:right;">
            <!-- 推荐作者列表组件 -->
            <author-list :authorList="authorList" />

            <!-- 留言板组件 -->
            <bulletin-board :bulletinList="bulletinList"/>
          </div>
        </div>

        <page-loading v-if="!loadData"/>

      </div>
    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal/>

    <!-- 操作结果提示弹出框组件 -->
    <component :is="alertTips"/>

  </div>
</template>

<script>
import navigationMenu from '../../components/home/base/extends/navigationMenu.vue'
import slideBox from '../../components/home/base/extends/slide_box.vue'
import searchBox from '../../components/home/base/extends/searchBox.vue'
import articleList from '../../components/home/article/article_list.vue'
import authorList from '../../components/home/author/author_list_recom.vue'
import bulletinBoard from '../../components/home/base/extends/bulletin_board.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import alertTips from '../../components/common/alertTips/alertTips.vue'
import modal from '../../components/common/modal/modalTotal.vue'
import baseLoading from '../../components/common/loading/baseLoading.vue'
import pageLoading from '../../components/common/loading/pageLoading.vue'

export default {
  name: 'index',
  components: {
    navigationMenu,
    slideBox,
    searchBox,
    articleList,
    authorList,
    bulletinBoard,
    floatBlock,
    pageFooter,
    alertTips,
    modal,
    baseLoading,
    pageLoading
  },
  data () {
    return {
      loadData: false,
      articleList: [],
      authorList: [],
      bulletinList: []
    }
  },

  created () {
    let data = {
      userid: this.$store.state.userInfo.id
    }

    this.axios.post('index/home-index', data).then( (response) => {
      if (response.data.status === '01') {
        this.loadData = true
        this.articleList = response.data.data.articleList
        this.authorList = response.data.data.authorList
        this.bulletinList = response.data.data.bulletinList
      }
    }).catch( (error) => {
      console.log(error)
    })
  },

  computed: {
    alertTips () {
      return this.$store.state.alertTips
    }
  },
  methods: {
    goSearch (key) {
      this.$router.push('/search/titles/' + key)
    }
  }
}
</script>

<style scoped>

</style>
