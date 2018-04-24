<template>
  <!-- PC端前台作者信息页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <div style="width:68%; display:inline-block;">

          <div v-if="userInfo !== null" style="width:100%; color:#EDE;">

            <div class="s1c-Bg box-show" style="width:68px; height:68px; margin:0 18px 0 28px; float:left;">
              <img v-lazy="this.$store.state.baseHost + 'upload/avatar/' + this.$route.params.id + '-' + userInfo.username + '.jpg'" class="box-show" style="width:62px; height:62px; margin:3px;">
            </div>

            <div style="height:68px; margin-top:18px;">
              <p style="float:left; font-size:28px;">{{ userInfo.username }}</p>

              <!-- "关注/取消关注"组件 -->
              <follow v-if="!personal" :hasFollow="userInfo.hasFollow" :type="followType" :typeId="followTypeId" style="margin:-1px 0 0 28px; position:relative; float:left;"/>

              <router-link to="/management" class="superButton-Out" v-if="personal" style="width:106px; height:32px; margin-right:68px; float:right;">
                <span class="superButton-In MyIF add-data" style="width:96px; height:23px; line-height:23px;"> 文章管理</span>
              </router-link>
              <router-link to="/update" class="superButton-Out" v-if="personal" style="width:106px; height:32px; margin-right:28px; float:right;">
                <span class="superButton-In MyIF alter-information" style="width:96px; height:23px; line-height:23px;"> 修改资料</span>
              </router-link>

              <br/><br/>
              <div style="margin-top:8px; color:#C0FFB4; font-family:'Microsoft YaHei UI'">
                <a style="padding:0 12px; float:left;">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ userInfo.articleNum }}</p>
                  <p>文章</p>
                </a>
                <a style="padding:0 12px; float:left;">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ userInfo.follows }}</p>
                  <P>粉丝</P>
                </a>
                <a style="padding:0 12px; float:left;">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ userInfo.attention }}</p>
                  关注
                </a>
                <a style="padding:0 12px; float:left;">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">68</p>
                  评论
                </a>
                <a style="padding:0 12px; float:left;">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ userInfo.likes }}</p>
                  收获点赞
                </a>
              </div>
            </div>
          </div>
          <div v-else style="width:100%; height:86px; position:relative;">
            <page-loading />
          </div>

          <!-- 切换详细信息按钮组 -->
          <div id="changeUserContent">
            <a :class="{active: contentType === 'authorDescript'}" @click="changeContent('authorDescript')"><i
              class="MyIF information"></i> 简介</a>
            <a :class="{active: contentType === 'articleList'}" @click="changeContent('articleList')"><i
              class="MyIF add-data"></i> 文章</a>
            <a :class="{active: contentType === 'fansList'}" @click="changeContent('fansList')"><i
              class="MyIF all-user"></i> 粉丝</a>
            <a :class="{active: contentType === 'commentList'}" @click="changeContent('commentList')"><i
              class="MyIF recommend"></i> 评论</a>
            <a :class="{active: contentType === 'categoryList'}" @click="changeContent('categoryList')"><i
              class="MyIF feedback"></i> 分类</a>
          </div>

          <div v-if="contentList !== null" style="min-height:323px;">
            <component :is="contentType" :descript="contentList" :articleList="contentList" :categoryList="contentList" :userList="contentList" :commentGroupData="contentList"/>
          </div>
          <div v-else style="width:100%; height:323px; padding-bottom:168px; position:relative; box-sizing:border-box;">
            <base-loading style="top:108px;" />
          </div>

        </div>

        <div style="width:28%; display:inline-block; float:right;">
          <!-- 推荐作者列表组件 -->
          <author-list :authorList="recomAuthorList"/>
        </div>

      </div>

    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal/>

  </div>
</template>

<script>
import navigationMenu from '../../components/home/base/extends/navigationMenu.vue'
import follow from '../../components/home/base/extends/follow.vue'
import authorDescript from '../../components/home/base/extends/descript.vue'
import articleList from '../../components/home/article/article_list.vue'
import fansList from '../../components/home/author/author_list_search.vue'
import commentList from '../../components/home/comment/comment_list.vue'
import categoryList from '../../components/home/category/category_list.vue'
import authorList from '../../components/home/author/author_list_recom.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'
import baseLoading from '../../components/common/loading/baseLoading.vue'
import pageLoading from '../../components/common/loading/pageLoading.vue'

export default {
  name: 'author',

  components: {
    navigationMenu,
    follow,
    authorDescript,
    articleList,
    fansList,
    commentList,
    categoryList,
    authorList,
    floatBlock,
    pageFooter,
    modal,
    baseLoading,
    pageLoading
  },

  data () {
    return {
      userInfo: null,
      contentList: null,
      followType: 'user',
      followTypeId: this.$route.params.id,
      contentType: '',
      personal: false,
      recomAuthorList: []
    }
  },

  watch: {
    '$route' () {
      this.$router.go(0)
    }
  },

  beforeCreate () {
    if (!this.$route.params.id) {
      this.$router.push('/')
    }
  },

  created () {
    let data = {
      'id': this.$route.params.id,
      'userid': this.$store.state.userInfo.id
    }

    this.axios.post('user/get-detail-info', data).then( (response) => {
      if (response.data.status === '01') {
        this.userInfo = response.data.data
        this.changeContent()
      }
    }).catch( (error) => {
      console.log(error)
    })

    if (this.$store.state.userInfo.id === this.$route.params.id) {
      this.personal = true
    }

    this.getRecommondAuthorList()
  },

  methods: {

    getRecommondAuthorList () {
      this.axios.post('recommend/author').then( (response) => {
        if (response.data.status === '01') {
          this.recomAuthorList = response.data.data
        } else {
        }
      }).catch( (error) => {
        console.log(error)
      })
    },

    changeContent (type = 'authorDescript') {
      if (type === this.contentType) {
        return false
      }

      this.contentType = type
      this.contentList = null

      let data = {
        userid: this.$route.params.id,
        status: 1
      }
      let url = ''

      if (this.contentType === 'articleList') {
        url = 'article/get-simple-info'
      } else if (this.contentType === 'fansList') {
        url = 'attention/fans-group-data'
      } else if (this.contentType === 'commentList') {
        url = 'comment/group-data-by-user-id'
      } else if (this.contentType === 'categoryList') {
        url = 'category/user-follows'
        data.categoryIds = this.userInfo.category
      } else {
        this.contentList = this.userInfo.descript === null ? '' : this.userInfo.descript
        return false
      }

      this.axios.post(url, data).then( (response) => {
        if (response.data.status === '01') {
          this.contentList = response.data.data
          console.log(this.contentList)
        } else if (response.data.status === '00') {
          console.log(response.data.msg)
        }
      }).catch( (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  #changeUserContent {
    width: 95%;
    height: 48px;
    margin: 30px 0;
    color: #999;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    text-shadow: 0.5px 0.5px 0.1px #000;
  }

  #changeUserContent > a {
    padding: 0 20px 5px 12px;
    margin: 0 0 0 28px;
  }

  #changeUserContent > a.active, #changeUserContent > a:hover {
    color: #DDD;
    position: relative;
  }

  #changeUserContent > a:before, #changeUserContent > a:after {
    content: '';
    width: 0;
    height: 3px;
    bottom: -3px;
    position: absolute;
  }

  #changeUserContent > a.active:before, #changeUserContent > a.active:after {
    width: 50%;
    transition: all 0.2s 0.1s;
  }

  #changeUserContent > a:before {
    left: 50%;
    background: linear-gradient(to right, #54E0FF, #2DBEFF, #3072CC);
  }

  #changeUserContent > a:after {
    right: 50%;
    background: linear-gradient(to right, #3072CC, #2DBEFF, #54E0FF);
  }

  #changeUserContent > a > i.MyIF {
    font-size: 28px;
    font-weight: 500;
  }

  #changeUserContent > a.active > i.MyIF {
    color: #38BBEE;
  }

  #authorList, #categoryList {
    width: 90%;
    margin: 0 auto;
  }
</style>
