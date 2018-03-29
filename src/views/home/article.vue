<template>
  <!-- PC端前台文章页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <!-- 文章详情组件 -->
        <article-detail :articleId="this.$route.params.id"/>

        <div style="width:68%; display:inline-block;">
          <!-- 文章列表组件 -->
          <article-list :articleList="this.recomArticleList" />
        </div>

        <div style="width:28%; display:inline-block; float:right;">
          <!-- 推荐作者列表组件 -->
          <author-list/>
        </div>

      </div>
    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal/>

  </div>
</template>

<script>
import navigationMenu from '../../components/home/base/extends/navigationMenu.vue'
import articleList from '../../components/home/article/article_list.vue'
import authorList from '../../components/home/author/author_list_recom.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import articleDetail from '../../components/home/article/article_detail.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

import {scrollToLoadData} from '../../assets/js/common.js'

export default {
  name: 'article',

  components: {
    navigationMenu,
    articleDetail,
    articleList,
    authorList,
    floatBlock,
    pageFooter,
    modal
  },

  watch: {
    '$route' () {
      this.$router.go(0)
    }
  },

  data () {
    return {
      recomArticleList: []
    }
  },

  beforeCreate () {
    if (!this.$route.params.id) {
      this.$router.push({path: '/'})
    }
  },

  mounted () {
    this.getRecommondArticleList()
    scrollToLoadData()
  },

  methods: {
    getRecommondArticleList () {

      this.axios.post('article/recommond-list').then( (response) => {
        if (response.data.status === '01') {
          this.recomArticleList = response.data.data
        } else {

        }
      }).catch( (error) => {
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>

</style>
