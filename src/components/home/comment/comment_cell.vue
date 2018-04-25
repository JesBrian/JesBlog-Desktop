<template>
  <div class="box-show" style="margin-bottom:20px; padding-bottom:8px;">
    <!-- 头像 -->
    <router-link :to="'/author/' + commentData.userid" class="avatar-author"><img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:100%; height:100%; border-radius:3px;"></router-link>

    <!-- 用户名 -->
    <router-link class="hover-underline username-author" :to="'/author/' + commentData.userid">{{ commentData.username }}</router-link>：
    <span style="margin:10px 38px 0; float:right; font-size:13px;">{{ timestampToTime(commentData.create_time) }}</span>

    <p style="padding:0 18px; font-size:14px; line-height:1.2em; word-break:break-all; text-indent:2em;">{{ commentData.content }}</p>

    <!-- 父级评论组件 -->
    <comment-cell-second v-if="commentData.parentid !== '0'" :parentCommentData="commentData.parentCommentData"/>

    <a class="replyButton hover-underline" style="height:18px; margin:8px 0 0 83%; color:#55EEB4;" @click="newComment">回复</a>

    <transition name="fade" mode="out-in">
      <!-- 新回复组件 -->
      <component :is="isNewComment" :parentid="commentData.id" />
    </transition>

  </div>
</template>

<script>
import commentCellSecond from './comment_cell_second.vue'
import newComment from './new_comment.vue'

import {timestampToTime} from '../../../assets/js/common.js'

export default {
  name: 'comment_cell',

  components: {
    commentCellSecond,
    newComment
  },

  props: [
    'commentData'
  ],

  data () {
    return {
      isNewComment: ''
    }
  },

  methods: {
    newComment () {
      this.isNewComment = 'newComment'
      this.$emit('newComment', this)
    },

    timestampToTime (timestamp) {
      return timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped>
  .avatar-author {
    width: 32px;
    height: 32px;
    margin: 8px 3px 8px 18px;
    float: left;
  }

  .username-author {
    margin: 0 3px 0 16px;
    line-height: 2em;
    color: #33BCFF;
  }
</style>
