<template>
  <!-- 文章评论完整组件 -->
  <div id="articleComment" style="width:100%; margin:18px 0;">
    <p style="width:90%; margin:8px auto; border-bottom:3px solid #0febe5; color:#DDD; font-size:23px; font-style:italic; text-shadow:0.5px 0.5px 0.2px #000;">
      <i style="margin:0 18px 0 38px; font-size:28px; color:#4F84FF; line-height:2em;" class="MyIF feedback"></i>文章评论
    </p>

    <div style="width:88%; margin:0 auto 48px;">
      <!-- 创建新评论组件 -->
      <comment-create />
    </div>

    <!-- 评论列表组件 -->
    <comment-list style="width:82%; margin:0 auto;" />
  </div>
</template>

<script>
import commentCreate from './comment_create.vue'
import commentList from './comment_list.vue'

export default {
  name: 'article_comment',
  components: {
    commentCreate,
    commentList
  }
}
</script>

<style scoped>

  .exciting:hover {
    color: #63EE84;
  }
</style>
