<template>
  <div id="app">
    <router-view/>
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
            menuList: [
                {
                    id: 1, 
                    name: '首页',
                    image: [ require('./assets/img/shouye(1)@2x.png'), require('./assets/img/shouye(2)@2x.png')],
                   
                },
                {
                    id: 2, 
                    name: '任务',
                    image: [require('./assets/img/renwu(1)@2x.png'), require('./assets/img/renwu(2)@2x.png')],
                },
                {
                    id: 3, 
                    name: '图表',
                    image: [require('./assets/img/top01.png'), require('./assets/img/top02.png')],
                    count: 8,
                },
                {
                    id: 4, 
                    name: '我的',
                    image: [require('./assets/img/top01.png'), require('./assets/img/top02.png')],
                }
            ] 
        }
    },
    methods: {
        itemClick(id) {
            this.menuIndex = id;

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
}
</style>
