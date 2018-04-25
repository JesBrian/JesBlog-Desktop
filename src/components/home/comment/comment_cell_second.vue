<template>
  <div class="s1c-Bg box-show" style="width:85%; margin:8px auto; padding:8px 12px 12px; border-radius:4px;">
    <p style="font-size:14px; line-height:1.35em; word-break:break-all;">
      <router-link class="hover-underline username-author" :to="'/author/' + parentCommentData.userid">{{ parentCommentData.username }}</router-link>：
      {{ parentCommentData.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment_cell_second',

  props: [
    'parentCommentData'
  ]
}
</script>

<style scoped>
  .username-author {
    margin: 0 3px 0 16px;
    color: #33BCFF;
    font-size: 16px;
  }
</style>
