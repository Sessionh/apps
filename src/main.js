import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import './common/common.scss'
import './assets/font/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.timeout = 5000;
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
