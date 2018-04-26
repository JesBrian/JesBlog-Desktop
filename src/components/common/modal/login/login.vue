<template>
  <!-- "登录"拟态框组件 -->
  <div class="s1c-Bg box-show">

    <!-- 拟态框头部 -->
    <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img v-lazy="this.$store.state.baseHost + 'img/icon/login.png'" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户登录</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <!-- "登录"拟态框内容 -->
    <div style="width:100%; height:200px; margin-bottom:28px;">

      <!-- 注册本站用户登陆 -->
      <div style="width:72%; height:100%; float:left;">

        <div style="width:83%; height:32%; margin:0 auto; font-size:19px;">
          <label class="MyIF IDcard-1" for="loginUser" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">用户名</span>
          </label>
          <input id="loginUser" type="text" class="s1c-Bg box-show" v-model="username" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写用户名"/>
        </div>

        <div style="width:83%; height:32%; margin:0 auto; font-size:19px;">
          <label class="MyIF yuechi" for="loginPwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">密码</span>
          </label>
          <input id="loginPwd" type="password" class="s1c-Bg box-show" v-model="passwd" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写密码"/>
        </div>

        <div style="width:75%; height:28%; margin:0 auto; text-align:center;">
          <span class="superButton-Out" style="width:108px; height:38px; margin:0 48px 0 0;">
            <button class="superButton-In MyIF cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 重新填写</button>
          </span>
          <span class="superButton-Out" @click="userLogin" style="width:108px; height:38px; margin:0 0 0 48px;">
            <button class="superButton-In MyIF makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 确认登陆</button>
          </span>
        </div>

        <p style="margin-right:18px; float:right; line-height:2.5em; color:#FFF;">
          <a class="hover-underline" @click="repasswd" style="margin:0 18px;">忘记密码</a>/<a class="hover-underline" @click="register" style="margin:0 18px;">新用户注册</a>
        </p>
      </div>

      <!-- 其他授权登陆方式 -->
      <div style="width:28%; height:100%; padding-top:13px; float:right; box-sizing:border-box; border-left:1px solid #000; border-image:linear-gradient(#25b8dd, #3072cc, #25b8dd) 2; text-align:center;">
        <table style="width:88%;">
          <tr>
            <td style="text-align:right;">
              <!-- 微信 -->
              <div @click="checkOAuthLogin('Weixin')" class="superButton-Out" title="微信登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF wechat" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
            <td>
              <!-- QQ -->
              <div @click="checkOAuthLogin('QQ')" class="superButton-Out" title="QQ登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF qq" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align:right;">
              <!-- 微博 -->
              <div @click="checkOAuthLogin('Weibo')" class="superButton-Out" title="微博登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
            <td>
              <!-- 百度 -->
              <div @click="checkOAuthLogin('Baidu')" class="superButton-Out" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF github" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align:right;">
              <!-- Gitee -->
              <div @click="checkOAuthLogin('Gitee')" class="superButton-Out" title="码云登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
            <td>
              <!-- Github -->
              <div @click="checkOAuthLogin('Github')" class="superButton-Out" title="Github登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="superButton-In MyIF github" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </div>
            </td>
          </tr>
        </table>
      </div>

    </div>

  </div>
</template>

<script>
import closeButton from '../close_button.vue'

export default {
  name: 'login',

  components: {
    closeButton
  },

  data () {
    return {
      username: '',
      passwd: ''
    }
  },

  beforeDestroy () {
    clearInterval(this.timer)
  },

  methods: {
    register () {
      this.$store.commit('changeModal', 'register')
    },
    repasswd () {
      this.$store.commit('changeModal', 'repasswd')
    },

    /**
     * 用户登录
     */
    userLogin () {
      let data = {
        username: this.username,
        passwd: this.passwd
      }

      this.axios.post('user/login', data).then( (response) => {
        if (response.data.status === '01') {
          let userInfo = {
            'id': response.data.id,
            'username': this.username,
            'avatar': response.data.avatar
          }
          this.$store.commit('changeUserInfo', userInfo)
          this.$store.commit('changeModal')
          this.$router.go(0)
        }
      }).catch( (error) => {
        console.log(error)
      })
    },

    checkOAuthLogin (oauthType) {
      let oauthWindow = window.open(this.$store.state.baseHost + 'oauth/login?oauthType=' + oauthType, '_blank')
      setTimeout(() => {
        this.timer = setInterval( () => {
          this.axios.post('oauth/check-login').then( (response) => {
            if (response.data.status === '01') {
              clearInterval(this.timer)
              oauthWindow.close()
            }
            console.log(response)
          }).catch( (error) => {
            console.log(error)
          })
        }, 2368)
      }, 5000)
    }
  }
}
</script>

<style scoped>

</style>
