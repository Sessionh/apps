<template>
    <div id="app">
        <keep-alive :include="cachePage">
            <router-view/>
        </keep-alive>
  
        <meMenu :list="menuList" :menuIndex="menuIndex" @onItem="itemClick"></meMenu>
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
                    image: [ require('./assets/img/shouye(1)@2x.png'), require('./assets/img/shouye(2)@2x.png')],
                   
                },
                {
                    id: 2, 
                    name: '任务',
                    url: 'about',
                    image: [require('./assets/img/renwu(1)@2x.png'), require('./assets/img/renwu(2)@2x.png')],
                },
                {
                    id: 3, 
                    name: '图表',
                    url: 'home',
                    image: [require('./assets/img/top01.png'), require('./assets/img/top02.png')],
                    count: 8,
                },
                {
                    id: 4, 
                    name: '我的',
                    url: 'home',
                    image: [require('./assets/img/top01.png'), require('./assets/img/top02.png')],
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
            

        }
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
