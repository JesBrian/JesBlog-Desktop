<template>
  <!-- PC端前台文章管理页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <navigation-bar/>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show"
           style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <div style="width:80%; margin:18px auto;">
          <div style="width:100%; color:#EDE;">

            <div class="s1c-Bg box-show" style="width:68px; height:68px; margin:0 18px 0 28px; float:left;">
              <img :src="avatar" class="box-show" style="width:62px; height:62px; margin:3px;">
            </div>

            <div style="height:68px; margin-top:18px;">
              <p style="float:left; font-size:28px; line-height:1.5em;">{{ this.$store.state.userInfo.username }}</p>

              <router-link to="/update" class="superButton-Out"
                           style="width:106px; height:32px; margin-right:88px; float:right;">
                <span class="superButton-In MyIF alter-information" style="width:96px; height:23px; line-height:23px;"> 修改资料</span>
              </router-link>
              <router-link to="/write" class="superButton-Out"
                           style="width:106px; height:32px; margin-right:28px; float:right;">
                <span class="superButton-In MyIF alter-information" style="width:96px; height:23px; line-height:23px;"> 编写文章</span>
              </router-link>

              <p style="width:80%; display:inline-block; clear:both; line-height:2em; text-indent:2em;">共有 {{ articleNum }} 篇文章</p>

              <!-- 切换详细信息按钮组 -->
              <div id="changeArticleContent" style="margin-top:8px;">
                <a :class="{active:contentType === 'publishList'}" @click="changeContent('publishList')"><i
                  class="MyIF add-data"></i> 已发表文章</a>
                <a :class="{active:contentType === 'draftList'}" @click="changeContent('draftList')"><i
                  class="MyIF information"></i> 草稿箱文章</a>
                <a :class="{active:contentType === 'recycleList'}" @click="changeContent('recycleList')"><i
                  class="MyIF trash-1"></i> 回收站文章</a>
              </div>

            </div>
          </div>

          <div id="articleContent" style="min-height:368px; margin-top:98px;">

            <!-- 搜索框 -->
            <div id="articleManagementSearchForm" class="glass-Bg box-show" style="width:508px; height:50px; margin:0 auto 28px; padding:0; position:relative;">
              <input type="text" placeholder=" 请输入文章标题 [ 支持模糊搜索 ] " v-model="searchKey" style="width:423px; height:30px; top:11px; left:10px; padding:0 10px; position:absolute; border:none!important; box-shadow:none; background:#444; color:#DDD; font-size:18px;">
              <span class="superButton-Out" @click="changeContent('')" style="width:40px; height:39px; margin:5.5px; float:right;">
                <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
              </span>
            </div>

            <articleList :articleList="articleList"/>

            <p style="line-height:208px; font-size:22px; font-weight:700; color:#DDD; text-align:center; letter-spacing:2px;">{{ articleText }}</p>
          </div>

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
import navigationBar from '../../components/home/base/extends/navigation_menu.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import articleList from '../../components/home/article/article_list.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

import LocalStore from 'store'

export default {
  name: 'article-management',
  components: {
    navigationBar,
    floatBlock,
    articleList,
    pageFooter,
    modal
  },

  data () {
    return {
      searchKey: '',
      contentType: 'publishList',
      articleNum: 0,
      articleList: [],
      articleText: ''
    }
  },

  beforeCreate () {
    // 简单验证用户
    if ((this.$store.state.userInfo.id === '0') || (this.$store.state.userInfo.id !== LocalStore.get('user').id)) {
      this.$router.push({path: '/'})
    }
  },

  created () {
    let data = {
      userid: this.$store.state.userInfo.id
    }
    let thisObj = this

    this.axios.post('article/article-num', data).then(function (response) {
      if (response.data.status === '01') {
        thisObj.articleNum = response.data.data
      }
    }).catch(function (error) {
      console.log(error)
    })

    this.changeContent('')
  },

  computed: {
    avatar () {
      return 'http://localhost/JesBlog/web/upload/avatar/' + this.$store.state.userInfo.id + '-' + this.$store.state.userInfo.username + '.jpg'
    }
  },

  methods: {

    /**
     * 改变文章列表内容
     */
    changeContent (type) {
      if (type !== '') {
        this.contentType = type
      }

      let data = {
        'userid': this.$store.state.userInfo.id,
        'status': 1,
        'key': this.searchKey
      }
      let thisObj = this

      if (this.contentType === 'draftList') {
        data.status = 2
      } else if (this.contentType === 'recycleList') {
        data.status = 0
      }

      this.axios.post('article/get-simple-info', data).then(function (response) {
        if (response.data.status === '01') {
          thisObj.articleList = response.data.data
          thisObj.articleText = ''
        } else {
          thisObj.articleText = response.data.msg
          thisObj.articleList = []
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  #changeArticleContent {
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

  #changeArticleContent > a {
    padding: 0 20px 5px 12px;
    margin-right: 68px;
  }

  #changeArticleContent > a.active, #changeArticleContent > a:hover {
    color: #DDD;
    position: relative;
  }

  #changeArticleContent > a:before, #changeArticleContent > a:after {
    content: '';
    width: 0;
    height: 3px;
    bottom: -3px;
    position: absolute;
  }

  #changeArticleContent > a.active:before, #changeArticleContent > a.active:after {
    width: 50%;
    transition: all 0.2s 0.1s;
  }

  #changeArticleContent > a:before {
    left: 50%;
    background: linear-gradient(to right, #54E0FF, #2DBEFF, #3072CC);
  }

  #changeArticleContent > a:after {
    right: 50%;
    background: linear-gradient(to right, #3072CC, #2DBEFF, #54E0FF);
  }

  #changeArticleContent > a > i.MyIF {
    font-size: 28px;
    font-weight: 500;
  }

  #changeArticleContent > a.active > i.MyIF {
    color: #38BBEE;
  }

</style>
