<template>
    <div id="app">
        <keep-alive :include="$store.state.cachePage">
            <router-view/>
        </keep-alive>
  
        <meMenu :list="menuList" :menuIndex="menuIndex" @onItem="itemClick" color="#88d698"></meMenu>
        
  </div>
</template>
<script>
import meMenu from './components/meMenu'
 

export default {
    components: {
        meMenu

    },
    data() {
        return {
            menuIndex: 0,
            cachePage: [],
            menuList: [
                {
                    id: 1, 
                    name: '首页',
                    url: 'home',
                    image: [ require('./assets/img/homeS.png'), require('./assets/img/home.png')],
                   
                },
                {
                    id: 2, 
                    name: '课堂',
                    url: 'about',
                    image: [require('./assets/img/classroom2S.png'), require('./assets/img/classroom2.png')],
                },
                {
                    id: 3, 
                    name: '笔记',
                    url: 'home',
                    image: [require('./assets/img/noteS.png'), require('./assets/img/note.png')],
                },
                {
                    id: 4, 
                    name: '商城',
                    url: 'home',
                    image: [require('./assets/img/shopS.png'), require('./assets/img/shop.png')],
                    count: 8,
                },
                {
                    id: 5, 
                    name: '我的',
                    url: 'home',
                    image: [require('./assets/img/userS.png'), require('./assets/img/user.png')],
                }
            ] 
        }
    },
    methods: {
        itemClick(id) {
            this.menuIndex = id;
            console.log(this.menuList[id])
            if (this.menuList[id].url){
                this.$router.push(this.menuList[id].url)

            }
            

        },
       
        

    },
    created() {
     
    }
}
</script>

<style lang="scss" >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: rem(12);
}
</style>
