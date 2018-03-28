<template>
  <ul style="color:#999;">
    <comment-cell @newComment="nowNewComment" v-for="item in commentGroupData" :key="item.id" :commentData="item" />
  </ul>
</template>

<script>
import commentCell from './comment_cell.vue'

export default {
  name: 'comment_list',

  components: {
    commentCell
  },

  data () {
    return {
      newNewCommentObj: null,
      commentGroupData: []
    }
  },

  created () {
    let data = {
      'articleid': this.$route.params.id
    }

    this.axios.post('comment/home-group-data', data).then( (response) => {
      if (response.data.status === '01') {
        // console.log(response.data.data)
        this.commentGroupData = response.data.data
      }
    }).catch( (error) => {
      console.log(error)
    })
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
