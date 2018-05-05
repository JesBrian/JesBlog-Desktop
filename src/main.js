import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './config/router/router.js'
import store from './config/store.js'
import vueLazyload from 'vue-lazyload'
import geminiScrollbar from 'vue-gemini-scrollbar'

import './assets/css/common.css'
import './assets/css/button.css'
import './assets/plugins/myfonticon/iconfont.css'

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = store.state.baseHost + 'index.php/' // 本地开发配置域名
// axios.defaults.baseURL = store.state.baseHost // 服务器生产配置域名
Vue.prototype.axios = axios
Vue.use(vueLazyload, {
  error: store.state.baseHost + 'img/loading.svg',
  loading: store.state.baseHost + 'img/loading.svg'
})
Vue.use(geminiScrollbar)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

// 每次路由跳转执行操作 - 重置 vuex 变量
router.beforeEach((to, from, next) => {
  store.commit('resetVuexStore')
  next()
})
