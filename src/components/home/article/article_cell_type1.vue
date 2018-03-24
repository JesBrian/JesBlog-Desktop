<template>
  <!-- 单个文章组件 - 类型1[包含缩略图] -->
  <div class="articleList" style="display:inline-block;">
    <router-link :to="'/author/' + article.userid" style="float:left"><img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:38px; height:38px; margin-left:38px; border-radius:4px;"></router-link>
    <router-link class="hover-underline" :to="'/author/' + article.userid" style="margin:0 18px 0 8px; color:#09D0EE; line-height:1.7em;">JesBrian UserName</router-link>

    <!-- 文章列表操作栏组件 -->
    <article-oper :article="article"/><br/>

    <router-link :to="'/article/' + article.id" class="article-list-title text-effect text-hidden">{{ article.title }}</router-link>
    <span style="padding-right:38px; text-align:right; font-size:14px; float:right;">2017-11-05 14:00</span>

    <!-- 文章列表标签组件 -->
    <article-category/>

    <div style="width:96%; height:180px; margin:15px auto;">
      <router-link :to="'/article/' + article.id">
        <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:168px; height:128px; float:right; margin-top:15px; border-radius:4px;">
      </router-link>
      <router-link :to="'/article/' + article.id" class="text-effect box-show" style="width:72%; height:86%; padding:8px 12px; display:inline-block; box-sizing:border-box; overflow:hidden; text-indent:2em; font-size:15px; color:#888;">
        换成你的离开，acskmsldv成绩单深v领看电视剧出口减少了几次啦才能使拉开门出口量hbnjlkm
      </router-link>
    </div>
  </div>
</template>

<script>
import articleOper from '../base/extends/article_oper.vue'
import articleCategory from '../base/extends/article_category.vue'

export default {
  name: 'article_cell_type1',

  components: {
    articleOper,
    articleCategory
  },

  props: [
    'article'
  ]

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
