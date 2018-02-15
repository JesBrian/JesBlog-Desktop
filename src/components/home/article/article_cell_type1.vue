<template>
  <!-- 文章列表组件 - 类型1[包含缩略图] -->
  <div class="articleList" style="display:inline-block;">
    <router-link to="/author" style="float:left"><img class="box-show" src="../../../assets/images/touxiang.jpg" style="width:38px; height:38px; margin-left:38px; border-radius:4px;"></router-link>
    <router-link class="hover-underline" to="/author" style="margin:0 18px 0 8px; color:#09D0EE; line-height:1.7em;">JesBrian UserName</router-link>
    <span class="articleInfo" style="margin-right:28px; float:right; font-size:14px;">
      <router-link style="margin:8px;" to="/article"><i class="MyIF status-on"></i> 阅读: <span>888</span></router-link>
      /
      <a class="click-like" style="margin:8px;"><i class="MyIF non-collection"></i> 点赞: <span>666</span></a>
      /
      <a style="margin:8px;"><i class="MyIF feedback"></i> 评论: 333</a>
    </span>
    <span style="padding-right:38px; text-align:right; font-size:14px; float:right;">2017-11-05 14:00</span>
    <router-link class="article-list-title text-effect text-hidden" to="/article">这是文章标题文章标题 The A章标题 The Article Title</router-link>
    <div style="width:96%; height:180px; margin:15px auto;">
      <img class="box-show" src="../../../assets/images/touxiang.jpg" style="width:168px; height:128px; float:right; vertical-align:middle; margin-top:15px; border-radius:4px;">
      <div class="text-effect box-show" style="width:72%; height:86%; padding:8px 12px; box-sizing:border-box; overflow:hidden; text-indent:2em; font-size:15px;">
        潇洒才csacas能撒了空间超csac级萨克bdgfng摩擦手拉手据csacsa此的深v看到视频
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article_cell_type1'
}
</script>

<style scoped>

</style>
