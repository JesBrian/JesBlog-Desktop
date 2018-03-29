<template>
  <div id="replyOtherUser" class="s1c-Bg box-show" style="width:96%; height:148px; margin:8px auto; text-align:center;">

    <textarea class="text-effect super-text" v-model="comment" style="width:97%; height:86px; margin:13px auto 6px; padding:5px; box-sizing:border-box; background:#222; resize:none; border:none;"></textarea>

    <div style="width:88%; margin:0 auto; text-align:left; position:relative;">

      <!-- 表情 & 限制字数 -->
      <span style="display:inline-block; line-height:2.5em; color:#AAA;">

        <!-- 发表情组件 -->
        <emoji @sendEmoji="createEmojiContent"/>
        限制<i style="margin:0 3px;">125</i>字
      </span>

      <!-- "发表评论"按钮 -->
      <span @click="createComment(0)" class="superButton-Out" style="width:105px; height:32px; position:relative; float:right; border-radius:2px;">
        <span class="superButton-In MyIF feedback" style="width:96px; height:23px; top:48.5%; line-height:24px;"> 发表评论</span>
      </span>

      <transition name="fade">
        <!-- 表情区组件 -->
        <components :is="emojiContent"/>
      </transition>

    </div>
  </div>
</template>

<script>
import emoji from '../base/emoji/emoji.vue'
import emojiContent from '../base/emoji/emoji_content.vue'
import commentButton from '../base/button/comment.vue'

export default {
  name: 'new_comment',
  components: {
    emoji,
    emojiContent,
    commentButton
  },
  data () {
    return {
      emojiContent: '',
      comment: this.$store.state.userInfo.username + '：'
    }
  },
  methods: {
    createEmojiContent () {
      if (this.emojiContent === '') {
        this.emojiContent = 'emojiContent'
      } else {
        this.hiddenEmojiContent()
      }
    },
    hiddenEmojiContent () {
      this.emojiContent = ''
    },
    writeEmoji (info) {
      this.comment += '[-' + info + '-]'
    },

    createComment (parentid = 0) {
      let data = {
        articleid: this.$route.params.id,
        parentid: parentid,
        userid: this.$store.state.userInfo.id,
        content: this.comment
      }

      this.axios.post('comment/create-comment', data).then( (response) => {
        if (response.data.status === '01') {
          this.comment = ''
          console.log(response.data.data)
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
