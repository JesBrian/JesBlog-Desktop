<template>
  <!-- PC端前台更新资料页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <keep-alive include="navigation-menu">
      <navigation-menu/>
    </keep-alive>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <!-- 更新个人资料 -->
        <div style="width:80%; height:100%; margin:0 auto; color:#AAA; position:relative;">

          <h3 style="font-size:32px; font-weight:500; line-height:2em; font-style:italic; color:#EEE;">{{ this.$store.state.userInfo.username }} ：</h3>

          <!-- 修改头像 -->
          <div style="width:128px; top:128px; right:58px; position:absolute; text-align:center;">
            <div class="s1c-Bg box-show" @click="uploadAvatar" style="width:108px; height:108px; margin:8px auto; border-radius:5px;" title="点击更换头像">
              <img class="box-show" v-if="avatar !== ''" :src="avatar" style="width:98px; height:98px; margin:5px; border:none;"/>
            </div>
            <span class="superButton-Out" @click="uploadAvatar" style="width:108px; height:33px;">
              <a class="superButton-In MyIF avatar" style="width:100px; height:25px; line-height:25px;"> 修改头像</a>
            </span>
            <input type="file" id="uploadAvatar" name="avatarTemp" value="" style="display:none;"/>
          </div>

          <table style="width:100%; margin:28px 0 48px;">
            <!-- 性别 -->
            <tr>
              <td style="width:18%; height:68px; text-align:center;">
                <label class="MyIF mysteryman" style="font-size:20px; font-weight:700;">
                  性别
                </label>
              </td>
              <td>
                <input type="radio" class="niftyModalForm superInput" id='boy' v-model="sex" value="1">
                <label for='boy' style="width:58px; height:30px; margin-right:18px; line-height:30px; font-size:15px;"><i class="MyIF boy-2" style="font-weight:500;"></i> 男</label>
                <input type="radio" class="niftyModalForm superInput" id='girl' v-model="sex" value="2">
                <label for='girl' style="width:58px; height:30px; margin-right:18px; line-height:30px; font-size:15px;"><i class="MyIF girl-2" style="font-weight:500;"></i> 女</label>
                <input type="radio" class="niftyModalForm superInput" id='secrecy' v-model="sex" value="0">
                <label for='secrecy' style="width:58px; height:30px; margin-right:18px; line-height:30px; font-size:15px;"><i class="MyIF mysteryman" style="font-weight:500;"></i> 保密</label>
              </td>
            </tr>

            <!-- 邮箱 -->
            <tr>
              <td style="width:18%; height:68px; text-align:center;">
                <label for="updateMail" class="MyIF mail" style="font-size:20px; font-weight:700;">
                  邮箱
                </label>
              </td>
              <td>
                <input id="updateMail" v-model="mail" class="s1c-Bg box-show"
                       style="width:368px; padding:3px 8px; font-size:20px;" type="text"/>
              </td>
            </tr>

            <!-- 主页 -->
            <tr>
              <td style="width:18%; height:68px; text-align:center;">
                <label for="updateHome" class="MyIF home" style="font-size:20px; font-weight:700;">主页</label>
              </td>
              <td>
                <input id="updateHome" v-model="home" class="s1c-Bg box-show" style="width:368px; padding:3px 8px; font-size:20px;" type="text"/>
              </td>
            </tr>

            <!-- 个人介绍 - 简单的富文本编辑器组件 -->
            <tr>
              <td colspan="3">
                <quill-editor class="quill-editor box-show" v-model="descript"/>
              </td>
            </tr>

            <!-- 保存按钮 -->
            <tr>
              <td style="height:68px;"></td>
              <td style="text-align:right;">
                <span class="superButton-Out" @click="confirmUpdateInfo" style="width:108px; height:38px; top:13px; right:108px;">
                  <a class="superButton-In MyIF questionnaire-3" style="width:98px; height:28px; line-height:28px;"> 确定保存</a>
                </span>
              </td>
            </tr>

          </table>

        </div>
      </div>
    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal @makeSure="sureUpdateInfo" :warningText="warningText"/>

  </div>
</template>

<script>
import navigationMenu from '../../components/home/base/extends/navigationMenu.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
import LocalStore from 'store'

export default {
  name: 'write',
  components: {
    navigationMenu,
    quillEditor,
    floatBlock,
    pageFooter,
    modal
  },

  data () {
    return {
      sex: this.sex === '' ? '' : this.sex,
      mail: '',
      home: '',
      descript: '',
      warningText: '更新个人信息资料'
    }
  },

  beforeCreate () {
    // 简单验证用户
    if ((this.$store.state.userInfo.id === '0') || (this.$store.state.userInfo.id !== LocalStore.get('user').id)) {
      this.$router.push({path: '/'})
    }
  },

  created () {
    let thisObj = this
    this.axios.post('user/get-info', {'id': this.$store.state.userInfo.id}).then(function (response) {
      thisObj.sex = response.data.data.sex
      thisObj.home = response.data.data.home
      thisObj.mail = response.data.data.mail
      thisObj.descript = response.data.data.descript
    }).catch(function (error) {
      console.log(error)
    })
  },

  computed: {
    avatar () {
      if (this.$store.state.userInfo.id !== '0') {
        return this.$store.state.baseHost + 'upload/avatar/' + this.$store.state.userInfo.id + '-' + this.$store.state.userInfo.username + '.jpg'
      } else {
        return ''
      }
    }
  },

  methods: {
    /**
     * 更新用户资料
     */
    confirmUpdateInfo () {
      this.$store.commit('changeModal', 'warning')
    },
    sureUpdateInfo () {
      let data = {
        'mail': this.mail,
        'sex': this.sex,
        'home': this.home,
        'descript': this.descript,
        'id': this.$store.state.userInfo.id
      }
      // let thisObj = this

      this.axios.post('user/update', data).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },

    /**
     * 上传头像
     */
    uploadAvatar () {
      let uploadAvatarDom = document.getElementById('uploadAvatar')
      let thisObj = this

      uploadAvatarDom.click()
      uploadAvatarDom.onchange = function (event) {
        let file = event.target.files[0]
        if ((file.type !== 'image/jpeg') && (file.type !== 'image/png') && (file.type !== 'image/pjpeg')) {
          console.log('只能上传图片')
          return false
        }
        if (file.size > 1572864) {
          console.log('你上传的图片过大')
          return false
        }
        let data = new FormData() // 创建form对象
        data.append('file', file, file.name) // 通过append向form对象添加数据
        data.append('id', thisObj.$store.state.userInfo.id) // 添加form表单中其他数据 - 用户id
        data.append('username', thisObj.$store.state.userInfo.username) // 添加form表单中其他数据 - 用户名
        thisObj.axios.post('user/avatar', data).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
