import Vue from 'vue'
import Router from 'vue-router'
import addURL from './libs/addTemplate.js'


Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'redirect',
        component: addURL('redirect')
    },
    {
        path: '/home',
        name: 'home',
        component:  addURL('Home')
    },
    {
        path: '/about',
        name: 'about',
        component: addURL('About')
    }
]

const router = new Router({
    routes
})


// router.beforeEach(() => {

// })


export default router
