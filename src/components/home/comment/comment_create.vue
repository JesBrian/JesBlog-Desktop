<template>
  <div>
    <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" class="box-show" style="width:43px; height:43px; margin:0 18px 38px 38px; border-radius:4px;">

    <textarea class="s1c-Bg box-show text-effect super-text" v-model="comment" style="width:83%; height:88px; margin-top:18px; padding:8px; font-size:17px; color:#CCC; text-indent:1em; resize:none;"></textarea>

    <div style="width:73%; margin:0 auto; padding:8px 0; position:relative;">

      <!-- 表情 & 限制字数 -->
      <span style="margin-left:38px; display:inline-block; line-height:2em; color:#AAA;">

        <!-- 发表情组件 -->
        <emoji v-on:sendEmoji="createEmojiContent()"/>
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

export default {
  name: 'comment_create',
  components: {
    emoji,
    emojiContent
  },
  data () {
    return {
      comment: '',
      emojiContent: ''
    }
  },
  methods: {
    createEmojiContent () {
      if (this.emojiContent === '') {
        this.emojiContent = 'emojiContent'
      } else {
        this.emojiContent = ''
      }
    },
    hiddenEmojiContent () {
      this.emojiContent = ''
    },
    writeEmoji (info) {
      this.comment += '[-' + info + '-]'
    },

    /**
     *
     */
    createComment (parentid = 0) {
      let data = {
        articleid: this.$route.params.id,
        parentid: parentid,
        userid: this.$store.state.userInfo.id,
        content: this.comment
      }

      this.axios.post('comment/create-comment', data).then((response) => {
        if (response.data.status === '01') {
          this.comment = ''
          console.log(response.data.data)
        } else {
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
