import Vue from 'vue'
import Vuex from 'vuex'
import LocalStore from 'store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseHost: 'http://jesbrian.cn/JesBlog-Backstage/web/', // 配置域名
    modalType: '', // 拟态框类型
    alertTips: false, // 弹出的操作提示
    screenWidth: document.body.clientWidth, // 浏览器宽度
    userInfo: {
      id: '0', // 用户ID
      username: '', // 用户姓名
      avatar: '' // 用户头像
    } // 用户信息
  },
  mutations: {

    /**
     * 弹出各种拟态框 OR 关闭拟态框
     */
    changeModal (state, type = '') {
      state.modalType = type
    },

    /**
     * 弹出操作结果提示框
     */
    alertTips (state) {
      state.alertTips = 'alertTips'
      setTimeout(function () {
        state.alertTips = ''
      }, 5000)
    },

    /**
     * 改变浏览器宽度为当前实际宽度
     */
    changeScreenWidth (state, width) {
      state.screenWidth = width
    },

    /**
     *
     * 登录/注册成功修改当前用户信息
     */
    changeUserInfo (state, userInfo) {
      state.userInfo = userInfo
      LocalStore.set('user', state.userInfo)
    }
  }
})
