<template>
  <div class="box-show" style="width:100%; height:80px; margin:8px 0 16px; position:relative;">
    <router-link :to="'/category/' + category.id" style="width:48px; height:48px; margin:15px 8px 8px 18px; float:left;">
      <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:100%; height:100%; border-radius:3px;">
    </router-link>
    <router-link class="category-name hover-underline text-hidden" :to="'/category/' + category.id">{{ category.name }}</router-link>
    <p style="color:#999; font-size:15px;">
      <span style="padding:0 18px; border-right:1px solid #7AFFB4;">火热程度 A</span>
      <span style="padding:0 18px; border-right:1px solid #7AFFB4;">关注人数 {{ category.follows }}</span>
      <span style="padding:0 18px;">收录文章 {{ category.articleNum }}</span>
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
  name: 'category-cell',

  components: {
    follow,
    leave
  },

  props: [
    'category'
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
  .category-name {
    max-width: 208px;
    margin: 13px 18px 0;
    display: inline-block;
    color: #999;
    line-height: 1.8em;
    font-size: 18px;
  }

  .category-name:hover {
    color: #DDD;
  }

  .search-follow {
    margin:16px;
  }
</style>
