<template>
  <!-- 文章详情组件 -->
  <div style="margin-bottom:68px;">

    <div v-if="articleData !== null">
      <!-- 作者 & 文章相关内容 -->
      <div style="width:88%; margin:18px auto;">

        <!-- 文章基本信息 -->
        <h2 style="padding:0 18px; text-indent:2em; font-size:25px; color:#DED;">{{ articleData.title }} &nbsp;</h2>
        <div style="width:88%; margin:18px auto;">

          <!-- 头像 -->
          <router-link :to="'/author/' + articleData.userid" class="avatar-author"><img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'"></router-link>

          <div style="height:56px; display:inline-block;">

            <!-- 用户名 -->
            <router-link class="username-author hover-underline" :to="'/author/' + articleData.userid">{{ articleData.username }}</router-link>

            <!-- "关注/取消关注"组件 -->
            <follow v-if="articleData.userid !== this.$store.state.userInfo.id" :hasFollow="articleData.hasFollow" :type="followType" :typeId="followTypeId" style="margin:-3px 0 0 28px; position:relative; float:left;"/>

            <p style="clear:both;">
              <span style="margin:8px; font-size:13.5px; line-height:2em; color:#999;">最后编辑时间：{{ articleData.update_time }}</span>
              <span style="margin:8px; font-size:13.5px; line-height:2em; color:#999;">字数：11525</span>
            </p>
          </div>

          <!-- 点赞文章 & 计数 -->
          <div style="float:right;">
            <span class="MyIF non-collection" style="text-align:left; line-height:1em; color:lightgreen; font-size:20px;"> {{ articleData.likes }} </span>
            <!-- 点赞 -->
            <span v-if="!haveLike" class="likeButton superButton-Out" @click="changeLike(1)">
            <span class="superButton-In">
              <i class="MyIF add-collection"></i> 点赞文章
            </span>
          </span>
            <!-- 取消点赞 -->
            <span v-else class="likeButton superButton-Out" @click="changeLike(0)">
            <span class="superButton-In">
              <i class="MyIF remove-collection"></i> 取消点赞
            </span>
          </span>
          </div>

        </div>

        <!-- 文章标签分类 -->
        <div style="width:88%; margin:0 auto; font-size:14.5px; line-height:30px; text-align:right;">
          <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
            <img v-lazy="this.$store.state.baseHost + 'img/tag/tag1.png'" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
            <p class="text-hidden">XXX产生变化</p>
          </router-link>
          <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
            <img v-lazy="this.$store.state.baseHost + 'img/tag/tag2.png'" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
            <p class="text-hidden">ggdch产生变化空间fdghjkfghjkl</p>
          </router-link>
          <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
            <img v-lazy="this.$store.state.baseHost + 'img/tag/tag3.png'" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
            <p class="text-hidden">XXX产生变化</p>
          </router-link>
        </div>

        <!-- 文章详细内容 -->
        <descript :descript="articleData.content"/>

      </div>

      <!-- 文章评论组件 -->
      <article-comment/>

      <!-- 分页组件 -->
      <pagination/>
    </div>
    <div v-else style="height:268px; position:relative;">
      <page-loading />
    </div>

  </div>

</template>

<script>
import follow from '../base/extends/follow.vue'
import descript from '../base/extends/descript.vue'
import articleComment from '../comment/article_comment.vue'
import pagination from '../../common/pagination/pagination.vue'
import pageLoading from '../../common/loading/pageLoading.vue'

export default {
  name: 'article_detail',

  components: {
    follow,
    descript,
    articleComment,
    pagination,
    pageLoading
  },

  props: [
    'articleId'
  ],

  data () {
    return {
      articleData: null,
      haveLike: false,
      followType: 'user',
      followTypeId: '0'
    }
  },

  created () {
    let data = {
      id: this.articleId,
      userid: this.$store.state.userInfo.id
    }

    this.axios.post('article/show-article-info', data).then( (response) => {
      if (response.data.status === '01') {
        this.articleData = response.data.data
        this.haveLike = !this.articleData.hasLike
        this.followTypeId = this.articleData.userid
      } else {

      }
    }).catch( (error) => {
      console.log(error)
    })
  },

  methods: {
    changeLike (status) {
      if (this.$store.state.userInfo.id === '0') {
        return false
      }

      let data = {
        articleid: this.articleId,
        userid: this.$store.state.userInfo.id,
        status: status
      }

      this.axios.post('attention/like-article', data).then( (response) => {
        if (response.data.status === '01') {
          if (status) {
            this.haveLike = true
            this.articleData.likes++
          } else {
            this.haveLike = false
            this.articleData.likes--
          }
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
  .avatar-author {
    width: 42px;
    height: 42px;
    margin: 8px 18px;
    float: left;
  }
  .avatar-author > img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .username-author {
    float: left;
    color: #55eeb4;
    line-height: 1.8em;
  }

  .tagList {
    min-width: 68px;
    max-width: 128px;
    height: 30px;
    margin: auto 28px;
    padding: 0 8px 0 18px;
    position: relative;
    display: inline-block;
    color: #999;
  }

  .tagList:hover {
    color: #DDD;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), 2px 6px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  .likeButton {
    width: 108px;
    height: 32px;
    margin: -6px 28px 0 8px;
    float: right;
    border-radius: 2px;
  }

  .likeButton > span {
    width: 98px;
    height: 23px;
    line-height: 24px;
  }
</style>
