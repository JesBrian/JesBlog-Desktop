<template>
  <!-- PC端前台文章页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <navigation-bar/>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show"
           style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <!-- 文章详情组件 -->
        <article-detail :articleId="this.$route.params.id"/>

        <div style="width:68%; display:inline-block;">
          <!-- 文章列表组件 -->
          <article-list/>
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
import navigationBar from '../../components/home/base/extends/navigation_menu.vue'
import articleList from '../../components/home/article/article_list.vue'
import authorList from '../../components/home/author/author_list_recom.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import articleDetail from '../../components/home/article/article_detail.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

export default {
  name: 'articlePage',
  components: {
    navigationBar,
    articleDetail,
    articleList,
    authorList,
    floatBlock,
    pageFooter,
    modal
  },

  data () {
    return {}
  },

  beforeCreate () {
    if (!this.$route.params.id) {
      this.$router.push({path: '/'})
    }
  }

}
</script>

<style scoped>

</style>
