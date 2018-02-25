<template>
  <!-- "注册"拟态框组件 -->
  <div class="s1c-Bg box-show">

    <!-- 拟态框头部 -->
    <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img v-lazy="this.$store.state.baseHost + 'img/icon/addUser.png'" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户注册</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <!-- "注册"拟态框内容 -->
    <div style="width:100%; margin-bottom:18px;">

      <div style="width:60%; height:62px; margin:0 auto; font-size:19px;">
        <label class="MyIF IDcard-1" for="registerUser" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
          <span style="margin-left:8px; color:#DDD;">用户名</span>
        </label>
        <input id="registerUser" type="text" class="s1c-Bg box-show" :class="{'warning':warningUsername}"
               v-model.trim="username" @blur="checkUserExist" style="width:268px; padding:6px 12px; float:right;"
               placeholder="请填写用户名"/>
      </div>

      <div style="width:60%; height:62px; margin:0 auto; font-size:19px;">
        <label class="MyIF mail" for="registerMail" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
          <span style="margin-left:8px; color:#DDD;">邮箱</span>
        </label>
        <input id="registerMail" type="text" class="s1c-Bg box-show" :class="{'warning':warningMail}"
               v-model.trim="mail" @blur="checkMail" style="width:268px; padding:6px 12px; float:right;"
               placeholder="请填写邮箱"/>
      </div>

      <div style="width:60%; height:62px; margin:0 auto; font-size:19px;">
        <label class="MyIF yuechi" for="registerPwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
          <span style="margin-left:8px; color:#DDD;">密码</span>
        </label>
        <input id="registerPwd" type="password" class="s1c-Bg box-show" :class="{'warning':warningPasswd}"
               v-model.trim="passwd" @blur="checkRepasswd" style="width:268px; padding:6px 12px; float:right;"
               placeholder="请填写密码"/>
      </div>

      <div style="width:60%; height:62px; margin:0 auto; font-size:19px;">
        <label class="MyIF yuechi" for="registerRePwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
          <span style="margin-left:8px; color:#DDD;">重密码</span>
        </label>
        <input id="registerRePwd" type="password" class="s1c-Bg box-show" :class="{'warning':warningPasswd}"
               v-model.trim="repasswd" @blur="checkRepasswd" style="width:268px; padding:6px 12px; float:right;"
               placeholder="请再次填写密码"/>
      </div>

      <div style="width:75%; height:28%; margin:0 auto 18px; text-align:center;">
                <span class="superButton-Out" style="width:108px; height:38px; margin:0 48px 0 0;">
                    <button class="superButton-In MyIF cancel"
                            style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 重新填写</button>
                </span>
        <span class="superButton-Out" @click="userRegister" style="width:108px; height:38px; margin:0 0 0 48px;">
                    <button class="superButton-In MyIF makesure"
                            style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 确认注册</button>
        </span>
      </div>

      <p style="width:88%; text-align:right;">已有账号？<a class="hover-underline" @click="login" style="color:#EEE;">点此立刻登录</a></p>
    </div>

  </div>
</template>

<script>
import closeButton from '../close_button.vue'

export default {
  name: 'register',
  components: {
    closeButton
  },
  data () {
    return {
      username: '',
      mail: '',
      passwd: '',
      repasswd: '',

      warningUsername: false,
      warningMail: false,
      warningPasswd: false
    }
  },
  methods: {
    login () {
      this.$store.commit('changeModal', 'login')
    },

    /**
     * 确认用户名是否已被注册
     */
    checkUserExist () {
      if (this.username === '') {
        return false
      }

      let data = {
        username: this.username
      }
      let thisObj = this
      this.axios.post('user/check', data).then(function (response) {
        if (response.data.status === '00') {
          thisObj.warningUsername = true
        } else {
          thisObj.warningUsername = false
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    /**
     * 检查用户邮箱
     */
    checkMail () {
      let mailReg = /^([a-zA-Z0-9]+\.?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+\.?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (mailReg.test(this.mail)) {
        this.warningMail = false
      } else {
        this.warningMail = true
      }
    },

    /**
     * 检查用户两次密码输入是否相同
     */
    checkRepasswd () {
      if (this.passwd === this.repasswd) {
        this.warningPasswd = false
      } else {
        this.warningPasswd = true
      }
    },

    /**
     * 用户注册
     */
    userRegister () {
      if ((this.warningUsername) || (this.username === '')) {
        document.getElementById('registerUser').focus()
        return false
      }
      if ((this.warningMail) || (this.mail === '')) {
        document.getElementById('registerMail').focus()
        return false
      }
      if ((this.warningPasswd) || (this.passwd === '') || (this.repasswd === '')) {
        document.getElementById('registerPwd').focus()
        return false
      }

      let data = {
        username: this.username,
        passwd: this.passwd,
        mail: this.mail
      }
      let thisObj = this

      this.axios.post('user/register', data).then(function (response) {
        if (response.data.status === '01') {
          let userInfo = {
            'id': response.data.id,
            'username': thisObj.username,
            'avatar': ''
          }
          thisObj.$store.commit('changeUserInfo', userInfo)
          thisObj.$store.commit('changeModal')
          console.log(response.data.msg)
        } else {
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
