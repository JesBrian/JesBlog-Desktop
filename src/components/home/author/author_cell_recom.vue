<template>
  <div class="glass-Bg box-show" style="width:95%; height:48px; margin:0 auto; padding-top:5px; position:relative; box-sizing:border-box;">

    <!-- 头像 -->
    <router-link :to="'/author/' + authorData.userid" class="avatar-author"><img class="box-show" v-lazy="$store.state.baseHost + 'img/touxiang.jpg'"></router-link>

    <!-- 用户名 -->
    <router-link :to="'/author/' + authorData.userid" class="hover-underline" style="line-height:19px;">{{ authorData.username }}</router-link>

    <p>
      <span style="margin-right:8px; line-height:0.3em; font-size:13px; color:#666;"><span style="margin-right:3px;">{{ authorData.likes }}</span>喜欢</span>
      <span style="line-height:0.3em; font-size:13px; color:#666;"><span style="margin-right:3px;">{{ authorData.follows }}</span>关注</span>
    </p>

    <!-- "关注"按钮组件 -->
    <follow v-if="!haveFollow"/>
    <!-- "取消关注"按钮组件 -->
    <leave v-else/>

  </div>
</template>

<script>
import avatar from './avatar.vue'
import username from './username.vue'
import follow from '../base/button/follow.vue'
import leave from '../base/button/leave.vue'

export default {
  name: 'author_cell_recom',

  components: {
    avatar,
    username,
    follow,
    leave
  },

  props: [
    'authorData'
  ],

  data () {
    return {
      haveFollow: false
    }
  },

  methods: {
    clickFollow () {
      this.haveFollow = true
    },
    clickLeave () {
      this.haveFollow = false
    }
  }
}
</script>

<style scoped>

  .avatar-author {
    width: 32px;
    height: 32px;
    margin:1px 8px;
    float: left;
  }

  .avatar-author img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .username-author {
    max-width: 146px;
    display: inline-block;
    line-height: 2em;
    color: #888;
  }
</style>
