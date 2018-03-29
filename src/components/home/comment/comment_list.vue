<template>
  <ul style="width:82%; margin:0 auto; color:#999;">
    <comment-cell @newComment="nowNewComment" v-for="item in commentGroupData" :key="item.id" :commentData="item" />
    <end-tips />
  </ul>
</template>

<script>
import commentCell from './comment_cell.vue'
import endTips from '../../common/endTips/endTips'

export default {
  name: 'comment_list',

  components: {
    commentCell,
    endTips
  },

  props: [
    'commentGroupData'
  ],

  data () {
    return {
      newNewCommentObj: null
    }
  },

  methods: {
    /**
     * 为了控制一次只出现一个回复区域
     */
    nowNewComment (obj) {
      if ((this.newNewCommentObj !== null) && (this.newNewCommentObj._uid !== obj._uid)) {
        this.newNewCommentObj.isNewComment = ''
      }
      this.newNewCommentObj = obj
    }
  }
}
</script>

<style scoped>
  li {
    width: 88%;
    min-height: 60px;
    margin: 0 auto 10px;
    padding: 8px 0;
    clear: both;
    border-bottom: 0.5px solid #555;
    color: #999;
  }

  ul li:last-child {
    border: none;
  }
</style>
