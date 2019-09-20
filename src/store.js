import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rem: 82.8, // iPhone 6尺寸的根元素大小基准值
        cachePage: [], // 缓存keep-alive
        isMenu: true, // 显示底部导航
        isSke: true, // 显示骨架屏

    },
    mutations: {
        setCachePage(state, val) { // val{ pages: [] 页面name,  type: 0.删除  1.添加  }
            if (val) {
               
                val.pages.forEach(res => {
                    let index = state.cachePage.indexOf(res)
                    if (val.type === 0) {
                        if (index > -1) {
                            state.cachePage.splice(index, 1)
                        }
                    } else {
                        if (index == -1) {
                            state.cachePage.push(res)
    
                        }

                    }
                   
                    
                })
            }

        },
        // 设置底部菜单栏 显示隐藏
        setMenu(state, val) {
            state.isMenu = val
        }

    },
    actions: {

    }
})
