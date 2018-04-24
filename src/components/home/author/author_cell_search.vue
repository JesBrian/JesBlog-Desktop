<template>
  <div class="box-show" style="width:100%; height:80px; margin:8px 0 16px; position:relative;">

    <!-- 头像 -->
    <router-link :to="'/author/' + authorInfo.userid" class="avatar-author"><img class="box-show" v-lazy="$store.state.baseHost + 'img/touxiang.jpg'"></router-link>

    <!-- 用户名 -->
    <router-link class="username-author hover-underline" :to="'/author/' + authorInfo.userid">{{ authorInfo.username }}</router-link>

    <p style="color:#999; font-size:15px;">
      <span style="padding:0 18px; border-right:1px solid #7AFFB4;">关注 {{ authorInfo.attention }}</span>
      <span style="padding:0 18px; border-right:1px solid #7AFFB4;">粉丝 {{ authorInfo.follows }}</span>
      <span style="padding:0 18px; border-right:1px solid #7AFFB4;">点赞 {{ authorInfo.likes }}</span>
      <span style="padding:0 18px;">文章 0</span>
    </p>

    <!-- "关注"按钮组件 -->
    <follow class="search-follow" v-if="!haveFollow"/>
    <!-- "取消关注"按钮组件 -->
    <leave class="search-follow" v-else/>

  </div>
</template>

<script>
import follow from '../base/button/follow.vue'
import leave from '../base/button/leave.vue'

export default {
  name: 'author_cell_search',

  components: {
    follow,
    leave
  },

  props: [
    'authorInfo'
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
    width: 42px;
    height: 42px;
    margin: 18px 8px 0 18px;
    float: left;
  }
  .avatar-author > img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .username-author {
    margin: 0 18px;
    display: inline-block;
    color: #999;
    line-height: 2.6em;
    font-size: 18px;
  }

  .username-author:hover {
    color: #DDD;
  }

  .search-follow {
    width: 72px !important;
    height: 38px !important;
    top: 20px !important;
    right: 18px !important;
  }

  .search-follow >>> span.follow, .search-follow >>> span.leave {
    width: 60px;
    height: 26px;
    line-height: 26px;
    left: 50.2%;
  }

</style>
