
import "./assets/css/common.css";
import "./assets/css/button.css";


import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './config/router/router.js'
import store from './config/store.js'
import VueLazyload from 'vue-lazyload'


// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost/JesBlog-Backstage/web/index.php/';
Vue.prototype.axios = axios;
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/src/assets/images/common/loading.svg',
    loading: '/src/assets/images/common/loading.svg',
    attempt: 1
});

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});
