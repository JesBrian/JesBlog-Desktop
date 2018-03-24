<template>
  <!-- 单个文章组件 - 类型2[不含缩略图] -->
  <div class="articleList" style="display:inline-block;">
    <router-link to="/author" style="float:left"><img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:38px; height:38px; margin-left:38px; border-radius:4px;"></router-link>
    <router-link class="hover-underline" to="/author" style="margin:0 18px 0 8px; color:#09D0EE; line-height:1.7em;">JesBrian UserName</router-link>

    <!-- 文章列表操作栏组件 -->
    <article-oper/>

    <span style="padding-right:38px; text-align:right; font-size:14px; float:right;">2017-11-05 14:00</span>
    <router-link class="article-list-title text-effect text-hidden" to="/article">这是文章标题The Article Title The Article Title The Article Title The Article Title The Article Title</router-link>

    <!-- 文章列表标签组件 -->
    <article-category/>

    <div style="width:90%; height:180px; margin:15px auto;">
      <div class="text-effect box-show" style="width:100%; height:86%; padding:8px 12px; box-sizing:border-box; overflow:hidden; text-indent:2em; font-size:15px;">
        cjxkv距ds成交量的lds;km;ij交量ldvs成交量的时空距ds成lkjij的时空时lvas空距ds成交量的时dsl看电kjd交量的lds;km;ij交量ldvs成交量的时空距ds成lkjij的时空时lvas空距ds成交量的时dsl看电kjd空距离视
      </div>
    </div>
  </div>
</template>

<script>
import articleOper from '../base/extends/article_oper.vue'
import articleCategory from '../base/extends/article_category.vue'

export default {
  name: 'article_simple_type2',

  components: {
    articleOper,
    articleCategory
  }
}
</script>

<style scoped>
  .articleList {
    width: 95%;
    height: 278px;
    margin: 16px 0;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
  }

  .articleList:before, .articleList:after {
    content: '';
    width: 86%;
    height: 1px;
    left:50%;
    transform:translate(-50%, 0);
    position: absolute;
  }

  .articleList:before {
    top: 286px;
    background: #333;
  }

  .articleList:after {
    top: 285.3px;
    background: #000;
  }

  li:last-child > .articleList:after, li:last-child > .articleList:before {
    display: none;
  }

  .article-list-title {
    max-width: 62%;
    display: inline-block;
    text-indent: 1.5em;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.3em;
    color: #BBB;
  }

  .article-list-title:hover {
    color: #FFF;
  }
</style>
