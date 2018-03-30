<template>
  <!-- PC端后台主页 -->
  <div style="width:100%; height:100%; top:0; left:0; position:fixed;">

    <!-- 导航栏部分 -->
    <nav class="glass-Bg box-show" style="width:100%; height:56px; position:fixed; z-index:99; box-sizing:border-box; border-radius:0;">
      <div style="width:1234px; height:100%; margin:0 auto; line-height:60px; position:relative;">

        <!-- LOGO -->
        <router-link to="/backstage" style="width:108px; height:48px; display:inline-block; vertical-align:middle; position:relative;">
          <img v-lazy="this.$store.state.baseHost + 'img/logo.png'" style="width:40px; margin-right:8px;">
          <span style="font-size:26px; margin-top:-8px; position:absolute; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">简记</span>
        </router-link>

        <!-- 折叠左侧菜单面板按钮 -->
        <div class="show-left-menu-btn s1c-Bg box-show MyIF" :class="{'double-arrow-left':showLeftMenu === true,'double-arrow-right':showLeftMenu === false,}" @click="changeLeftMenuShow"></div>

        <!-- 登录注册 -->
        <div id="navMenuAdmin" style="width:48px; height:45px; margin-top:4px; margin-right:68px; position:relative; float:right;">
          <router-link class="superButton-Out" to="/backstage/index" style="width:100%; height:100%;">
            <img class="superButton-In" :src="this.$store.state.baseHost + 'upload/avatar/' + this.$store.state.userInfo.id + '-' + this.$store.state.userInfo.username + '.jpg'" style="width:36px; height:34px; margin-top:-1px;"/>
          </router-link>

          <div style="top:40px; left:-55%; position:absolute;">
            <div v-if="this.$store.state.userInfo.id !== '0'" class="s1c-Bg box-show" style="width:100px; margin-top:10px; padding:0 4px; text-align:center; line-height:30px;">
              <ul>
                <li>
                  <router-link :to="'/author/' + this.$store.state.userInfo.id"><i class="MyIF home"></i> 个人信息
                  </router-link>
                </li>
                <li>
                  <router-link to="/backstage/updateAdmin"><i class="MyIF gears"></i> 修改资料</router-link>
                </li>
                <li @click="logout">
                  <a><i class="MyIF exit-1"></i> 安全退出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 左侧手风琴菜单栏 -->
    <div id="leftMenu" class="glass-Bg box-show" :class="{'leftmenu-is-show':showLeftMenu === true}" style="width:188px; height:100%; top:0; left:-188px; padding:60px 0 28px; box-sizing:border-box; position:fixed; z-index:9;  font-family:'宋体','Microsoft YaHei','黑体',sans-serif;">
      <div style="width:100%; height:100%; padding:6px 0 0; overflow-y:auto; color:#DDD; box-sizing:border-box;">
        <gemini-scrollbar class="my-scroll-bar">
          <ul>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('user')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>用户模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'user'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'user'" style="padding-bottom:8px;">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/userList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('userList')">
                    <i class="MyIF all-user"></i><span style="margin-left:8px; font-size:15px;">用户列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/addUser" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('addUser')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">添加用户</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/userBlacklist" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('userBlacklist')">
                    <i class="MyIF delete-user"></i><span style="margin-left:8px; font-size:15px;">用户黑名单</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('admin')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>管理员模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'admin'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'admin'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/adminList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('adminList')">
                    <i class="MyIF all-user"></i><span style="margin-left:8px; font-size:15px;">管理员列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/addAdmin" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('addAdmin')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">添加管理员</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('navigation')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>导航栏模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'navigation'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'navigation'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/navigationList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('navigationList')">
                    <i class="MyIF all-user"></i><span style="margin-left:8px; font-size:15px;">菜单列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('slide')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>幻灯片模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'slide'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'slide'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/slideList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('slideList')">
                    <i class="MyIF all-user"></i><span style="margin-left:8px; font-size:15px;">幻灯片列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/addSlide" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('addSlide')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">添加幻灯片</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('category')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>文章分类模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'category'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'category'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/categoryList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('categoryList')">
                    <i class="MyIF all-user"></i><span style="margin-left:8px; font-size:15px;">分类列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/addCategory" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('addCategory')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">添加文章分类</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('article')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>文章模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'article'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'article'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/articleList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('articleList')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">文章列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/addArticle" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('addCategory')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">添加文章</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li style="width:100%; margin:0 0 8px;">
              <div class="glass-Bg box-show" @click="changeFirstMenu('bulletin')" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:30px; font-size:18px; display:inline-block;">
                  <i class="MyIF menu-user" style="margin:0 8px 0 12px;"></i>留言模块
                </p>
                <div class="second-menu-btn s1c-Bg box-show">
                  <i class="MyIF double-arrow-up" :class="{'active':firstMenu === 'bulletin'}" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul v-if="firstMenu === 'bulletin'">
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/backstage/bulletinList" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('bulletinList')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">留言列表</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
                <li style="width:83%; height:25px; margin:3px auto 0;">
                  <router-link to="/666" class="s1c-Bg box-show menu-link" @click="changeSecondMenu('666')">
                    <i class="MyIF add-user"></i><span style="margin-left:8px; font-size:15px;">留言黑名单</span>
                    <i class="MyIF double-arrow-left" style="right:10px; position:absolute; line-height:25px; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </gemini-scrollbar>
      </div>
    </div>

    <!-- 中心 & 右侧内容 -->
    <div class="s1c-Bg" :class="{'leftmenu-is-close':showLeftMenu === false}" style="width:100%; height:100%; top:0; right:0; position:fixed; padding:63px 8px 35px 195px; box-sizing:border-box; z-index:5; font-family:'宋体','Microsoft YaHei','黑体',sans-serif;">
        <div class="glass-Bg" style="width:100%; height:100%; box-sizing:border-box; color:#DDD; position:relative;">
          <gemini-scrollbar class="my-scroll-bar">
            <router-link class="s1c-Bg box-show MyIF home" to="/backstage" v-if="this.$route.path !== '/backstage/index'" style="width:33px; height:33px; top:22px; left:22px; position:absolute; z-index:99; color:#6DE1FF; font-size:23px; line-height:32px; text-align:center;" title="回到主页" />
            <router-view style="min-width:1008px; padding:18px 28px; box-sizing:border-box;" />
          </gemini-scrollbar>
        </div>
    </div>

    <!-- 底部信息条 -->
    <footer class="glass-Bg box-show3">
      © 2015 - 2020 &nbsp;&nbsp;&nbsp;Music House 所有版权归 JesBrian 个人所有
    </footer>
  </div>
</template>

<script>
export default {
  name: 'frame',

  components: {},

  data () {
    return {
      showLeftMenu: true,
      firstMenu: '',
      secondMenu: ''
    }
  },

  beforeCreate () {
    if (this.$store.state.userInfo.id === '0') {
      this.$router.push({path: '/'})
    }
    // document.getElementById('backstagePage').style.height = document.body.clientHeight - 128 + 'px'
  },

  methods: {
    /**
     * 后台管理员退出登录
     */
    logout () {
      this.$store.commit('changeUserInfo', {
        id: '0', // 用户ID
        username: '', // 用户姓名
        avatar: '' // 用户头像
      })
      this.$router.push({path: '/'})
    },

    /**
     * 折叠/展示左侧菜单
     */
    changeLeftMenuShow () {
      this.showLeftMenu === true ? this.showLeftMenu = false : this.showLeftMenu = true
    },

    /**
     * 折叠/展开左侧二级菜单
     */
    changeFirstMenu (type) {
      if (this.firstMenu === type) {
        this.firstMenu = ''
      } else {
        this.firstMenu = type
      }
    },

    changeSecondMenu (type) {
      this.secondMenu = type
    }
  }
}
</script>

<style scoped>
  /**
   * 主页主体部分
   */
  #navMenuAdmin > div {
    display: none;
  }

  #navMenuAdmin:hover > div {
    display: block;
  }

  #navMenuAdmin li {
    width: 100%;
    height: 30px;
    margin: 4px 0;
    box-sizing: border-box;
  }

  #navMenuAdmin li a {
    color: #AAA;
  }

  #navMenuAdmin li:hover {
    background: #333;
    box-shadow: inset 0 0 0 1px #222, 0 0 0 1px lightseagreen;
  }

  #navMenuAdmin li:hover a {
    color: #EEE;
  }

  #navMenuAdmin li:hover i.MyIF {
    color: #2DBEFF;
  }

  .show-left-menu-btn {
    width: 33px;
    height: 33px;
    top: 10px;
    left: 128px;
    position: absolute;
    display: inline-block;
    font-size: 22px;
    line-height: 32px;
    color: #30cdff;
    text-align: center;
    opacity: 0.68;
  }

  .show-left-menu-btn:hover {
    opacity: 1;
  }

  .leftmenu-is-show {
    left: 0 !important;
  }

  .leftmenu-is-close {
    padding-left: 7px !important;
  }

  .second-menu-btn {
    width: 20px;
    height: 20px;
    top: 4px;
    right: 5px;
    display: inline-block;
    position: absolute;
    font-size: 16px;
    color: #30cdff;
    text-align: center;
    line-height: 19px;
    opacity: 0.68;
  }

  .second-menu-btn:hover {
    opacity: 1;
  }

  .second-menu-btn > i {
    animation: menuSwitch 0.6s forwards;
    -webkit-animation: menuSwitch 0.6s forwards;
  }

  .second-menu-btn > i.active {
    animation: menuSwitchActive 0.6s forwards;
    -webkit-animation: menuSwitchActive 0.6s forwards;
  }

  @keyframes menuSwitch /*IE 9 & Firefox & Opera*/
  {
    from {
      transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      -moz-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes menuSwitch /*Safari & Chrome*/
  {
    from {
      -webkit-transform: rotate(-180deg);
    }
    to {
      -webkit-transform: rotate(-0deg);
    }
  }

  @keyframes menuSwitchActive /*IE 9 & Firefox & Opera*/
  {
    to {
      transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
    }
  }

  @-webkit-keyframes menuSwitchActive /*Safari & Chrome*/
  {
    to {
      -webkit-transform: rotate(180deg);
    }
  }

  footer {
    width: 100%;
    height: 28px;
    bottom: 0;
    margin: 0;
    padding: 0 68px;
    box-sizing: border-box;
    border-radius: 0;
    position: fixed;
    z-index: 99;
    font-size: 15px;
    color: #30CDFF;
    text-shadow: 1px 1px 1px;
    line-height: 28px;
    text-align: right;
  }

  .menu-link {
    width: 100%;
    height: 100%;
    padding-left: 8px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    line-height: 23px;
    color: #AAA;
  }

  .menu-link:hover {
    color: #8CFFB2;
  }

  .menu-link:hover > i {
    color: #9f8bff;
  }

  .menu-link.router-link-active {
    margin-left: 8px;
    color: #FFF;
    background: #161616;
  }

  .menu-link.router-link-active > i {
    color: #67D4FF;
  }

  .menu-link > i.double-arrow-left {
    display: none;
  }

  .menu-link.router-link-active > i.double-arrow-left {
    display: inline-block;
  }


  /**
   * 滚动条样式重写
   */
  .my-scroll-bar >>> .gm-scrollbar .thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  .my-scroll-bar >>> .gm-scrollbar .thumb:hover, .my-scroll-bar >>> .gm-scrollbar .thumb:active{
    background: rgba(70, 223, 255, 0.5);
  }

</style>
