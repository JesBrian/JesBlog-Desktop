<template>
  <div class="glass-Bg box-show" style="width:95%; height:48px; margin:0 auto; position:relative;">

    <!-- 头像组件 -->
    <avatar class="avatar-author"/>

    <!-- 用户名组件 -->
    <username class="username-author text-hidden"/>

    <p style="line-height:0.3em; font-size:13px; color:#666;">2.2K 喜欢</p>

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
    margin: 8px;
    float: left;
  }

  .avatar-author > > > img {
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
