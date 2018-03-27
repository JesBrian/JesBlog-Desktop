<template>
  <!-- 用户 or 游客新留言 -->
  <div class="s1c-Bg box-show" style="width:98%; margin:38px 23px 10px 0; padding:18px 8px; float:right;">
    <form style="width:100%; margin:0 auto 10px; text-align:center; position:relative;">
      <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" class="box-show" style="width:38px; height:38px; margin:0 0 12px 10px; border-radius:4px; float:left;">
      <p style="line-height:1.4em; color:#DDD; text-align:left; font-weight:700; text-indent:1em;">{{ this.$store.state.userInfo.username === ''?'游客':this.$store.state.userInfo.username }}</p>
      <span style="margin-left:-38px; line-height:1.68em; font-size:15px; color:#AAA; letter-spacing:1px;">请留下您的宝贵意见 ~</span>
      <i @click="createBulletin" class="clickButton glass-Bg box-show MyIF makesure" style="width:32px; height:32px; top:8px; right:4px; display:inline-block; position:absolute; font-size:26px; line-height:31px; color:#05C4E6;"></i>
      <textarea v-model="bulletin" class="s1c-Bg box-show" style="width:81%; height:68px; padding:10px 43px 10px 8px; color:#0febe5; background:#222; border-color:#111; font-size:15px; resize:none;" placeholder="谢谢你的评论"></textarea>
    </form>

    <div style="margin-top:28px; max-height:508px; min-height:508px; padding:0 6px; box-sizing:border-box; overflow-y:auto;">
      <ul style="padding-bottom:8px;">
        <li class="glass-Bg box-show" v-for="item in bulletinList" :key="item.username" style="width:100%; min-height:48px; margin-bottom:8px; padding:8px 6px 3px; box-sizing:border-box;">
          <!--<avatar style="width:38px; height:38px;"/>-->
          <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" class="box-show" style="width:33px; height:33px; margin:-2px 6px 0 0; border-radius:4px; float:left;">
          <p class="text-effect" style="width:100%; line-height:1.2em; text-indent:0.8em; font-size:14.5px; color:#AAA;">
            <span style="font-size:15px; font-weight:700; color:#DDD;">{{ item.username === ''?'游客':item.username }}：</span>{{ item.content }}
          </p>
          <p style="text-align:right; line-height:1.5em; font-size:14px; color:#DDD;">{{ timestampToTime(item.create_time) }}</p>
        </li>
        <li>
          <end-tips />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import endTips from '../../../common/endTips/endTips.vue'

import {timestampToTime} from "../../../../assets/js/common";

export default {
  name: 'bulletin_board',

  components: {
    endTips
  },

  props: [
    'bulletinList'
  ],

  data () {
    return {
      bulletin: ''
    }
  },

  computed: {},

  methods: {
    /**
     *
     * @returns {boolean}
     */
    createBulletin () {
      if (this.bulletin === '') {
        return false
      }

      let data = {
        userid: this.$store.state.userInfo.id,
        username: this.$store.state.userInfo.username,
        bulletin: this.bulletin
      }
      let thisObj = this

      this.axios.post('bulletin/create', data).then(function (response) {
        if (response.data.status === '01') {
          thisObj.bulletinList.unshift({
            username: thisObj.$store.state.userInfo.username === '' ? '游客' : thisObj.$store.state.userInfo.username,
            content: thisObj.bulletin,
            create_time: response.data.data.timestamp
          })
          thisObj.bulletin = ''
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    /**
     *
     * @param timestamp
     * @returns {*}
     */
    timestampToTime (timestamp) {
      return timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped>
  li >>> .end-tips {
    width:68%;
    left:51%;
  }
</style>
