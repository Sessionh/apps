import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import './common/common.scss'
import './assets/font/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false

const service = axios.create({
    // baseURL: 'http://api.douguo.net/',
    timeout: 6000,
    withCredentials:true,
    headers: {'app-state': 1}
   
})
Vue.prototype.$http = service;


new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
     
        let urls = window.location.href.split('#/')
        if (urls[1] !== 'home') {
            const homeDOM = document.getElementById('skeleton_home')
            if (homeDOM) {
                homeDOM.style.display = 'none'
            }

        }
    
        
       
      
        
     
       

    },  
}).$mount('#app')
