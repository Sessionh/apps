<template>
    <div class="meMenu border-iphone">
        <div class="content">
          
            <div class="item-tab" v-for="(item, index) in list" :key="index" @click="itemClick(index)">
                <img :src="menuIndex == index? item.image[0] : item.image[1]">
                <div class="title"  :style="{color: menuIndex == index? '#ff8815': ''}">
                    {{item.name}}
                </div>
                <div class="count" v-if="item.count">
                    {{item.count}}
                </div>
            </div>

        </div>
        

    </div>
</template>
<script>
export default {
    name: 'meMenu',
    props: {
        menuIndex: {
            type: Number,
            default: 0,
        },
        list: {
            type: Array,
        } 
    },
    data() {
        return {
            menuList: [
                {
                    id: 1, 
                    name: '首页',
                    image: [ require('../assets/img/shouye(1)@2x.png'), require('../assets/img/shouye(2)@2x.png')],
                   
                },
                {
                    id: 2, 
                    name: '任务',
                    image: [require('../assets/img/renwu(1)@2x.png'), require('../assets/img/renwu(2)@2x.png')],
                },
                {
                    id: 3, 
                    name: '图表',
                    image: [require('../assets/img/top01.png'), require('../assets/img/top02.png')],
                    count: 8,
                },
                {
                    id: 4, 
                    name: '我的',
                    image: [require('../assets/img/top01.png'), require('../assets/img/top02.png')],
                }
            ] 

        }
    },
    methods: {
        itemClick(id) {
            this.$emit('onItem', id)
        }
       

    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
.meMenu {
    position: fixed;
    width: 100%;
    bottom: 0;
  
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: rem(13);
        padding: rem(8) 0;
        color: #80848f;
        @include border(top);
        .item-tab {
            flex: 1;
            position: relative;
            display: inline-block;
            img {
                width: rem(19);
                height: rem(19);
            }
            .count {
                position: absolute;
               
                top: rem(-5);
                left: 60%;
                min-width: rem(4);
                border-radius: rem(9);
                background-color: #FA5151;
                color: #FFFFFF;
                font-size: rem(12);
                height: rem(18);
                padding: 0 rem(6);
                display: flex;
                align-items: center;
                justify-content: center;
               

            }
        }

    }
   
    
    
}
.select {
    color: #ff8815;
}

</style>

