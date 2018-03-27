<template>
  <!-- PC端前台分类页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <div style="width:68%; display:inline-block;">
          <div style="width:100%; color:#EDE;">
            <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" class="box-show" style="width:68px; height:68px; margin:0 18px 0 28px; float:left; border-radius:4px;">
            <div style="height:68px; margin-top:18px;">
              <p style="float:left; font-size:28px;">{{ categoryData.name }}</p>

              <!-- "关注/取消关注"组件 -->
              <follow :hasFollow="categoryData.hasFollow" :type="followType" :typeId="followTypeId" style="margin:-2.5px 0 0 28px; position:relative; float:left;"/>

              <br/><br/>
              <div style="margin-top:8px; color:#C0FFB4; font-family:'Microsoft YaHei UI'">
                <a style="padding:0 12px; float:left;" title="A级">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">A</p>火热程度
                </a>
                <a style="padding:0 12px; float:left;" title="123456">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ categoryData.articles }}</p>收录文章
                </a>
                <a style="padding:0 12px; float:left;" title="68000">
                  <p style="text-align:center; font-size:15px; color:#AAA; line-height:1.5em;">{{ categoryData.follows }}</p>关注人数
                </a>
              </div>
            </div>
          </div>

          <!-- 切换详细信息按钮组 -->
          <div id="changeTagContent">
            <a :class="{active: contentType === 'new'}" @click="changeContent('new')"><i class="MyIF information"></i>最新收录文章</a>
            <a :class="{active: contentType === 'hot'}" @click="changeContent('hot')"><i class="MyIF hot"></i>最受欢迎文章</a>
          </div>

          <div id="articleContent" style="width:100%;">
            <!--文章列表组件-->
            <article-list :articleList="categoryData.articleList"/>
          </div>

        </div>

        <div style="width:28%; display:inline-block; float:right;">
          <!-- 推荐作者列表组件 -->
          <author-list/>
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
import articleList from '../../components/home/article/article_list.vue'
import authorList from '../../components/home/author/author_list_recom.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

export default {
  name: 'category',
  components: {
    navigationMenu,
    follow,
    articleList,
    authorList,
    floatBlock,
    pageFooter,
    modal
  },
  data () {
    return {
      categoryData: {},
      contentType: 'new',
      followType: 'category',
      followTypeId: this.$route.params.id
    }
  },

  beforeCreate () {
    if (!this.$route.params.id) {
      this.$router.push({path: '/'})
    }
  },

  created () {
    let data = {
      id: this.$route.params.id,
      userid: this.$store.state.userInfo.id
    }
    let thisObj = this

    this.axios.post('category/category-show-info', data).then(function (response) {
      if (response.data.status === '01') {
        thisObj.categoryData = response.data.data
      } else {
        console.log(response.data.msg)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },

  methods: {
    changeContent (type = 'new') {
      if (this.contentType === type) {
        return false
      }
      this.contentType = type
      let data = {
        categoryid: this.$route.params.id,
        order: 'create_time'
      }
      let thisObj = this
      if (this.contentType === 'hot') {
        data.order = 'likes'
      }
      this.axios.post('article/article-list', data).then(function (response) {
        if (response.data.status === '01') {
          thisObj.categoryData.articleList = response.data.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>
  #changeTagContent {
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

  #changeTagContent > a {
    padding: 0 20px 5px 12px;
    margin-right: 68px;
  }

  #changeTagContent > a.active, #changeTagContent > a:hover {
    color: #DDD;
    position: relative;
  }

  #changeTagContent > a:before, #changeTagContent > a:after {
    content: '';
    width: 0;
    height: 3px;
    bottom: -3px;
    position: absolute;
  }

  #changeTagContent > a.active:before, #changeTagContent > a.active:after {
    width: 50%;
    transition: all 0.2s 0.1s;
  }

  #changeTagContent > a:before {
    left: 50%;
    background: linear-gradient(to right, #54E0FF, #2DBEFF, #3072CC);
  }

  #changeTagContent > a:after {
    right: 50%;
    background: linear-gradient(to right, #3072CC, #2DBEFF, #54E0FF);
  }

  #changeTagContent > a > i.MyIF {
    font-size: 28px;
    font-weight: 500;
  }

  #changeTagContent > a.active > i.MyIF {
    color: #38BBEE;
  }

</style>
