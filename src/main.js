import './assets/css/common.css'
import './assets/css/button.css'
import './assets/plugins/myfonticon/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './config/router/router.js'
import store from './config/store.js'
import vueLazyload from 'vue-lazyload'

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = store.state.baseHost + 'index.php/'
// axios.defaults.baseURL = store.state.baseHost
Vue.prototype.axios = axios
Vue.use(vueLazyload, {
  error: store.state.baseHost + 'img/loading.svg',
  loading: store.state.baseHost + 'img/loading.svg'
})

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
