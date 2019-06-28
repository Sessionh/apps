<template>
    <div class="meSwipe" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <div class="swipe-item" :class="item.moveClass"  v-for="(item, indexItem) in imageList" :key="indexItem"  :style="{transform: `translate3d(${item.rem}px, 0px, 0px) scaleY(${item.scaleY})`  }">
            <img :src="item.img">
        </div>
        <div class="index-icon">
            <div class="icon-item" :class=" indexIcon == index? 'icon-item-check' : ''"   v-for="(itemIcon, indexIcon) in imageList" :key="indexIcon"></div>
        </div>

    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    name: 'meSwiper',
    props: {
        imageList: {
            type: Array,

        }
    },
    data() {
        return {
            // imageList: [
            //     {
            //         img: 'http://p3.music.126.net/mTjdgQiGU4f3riJG_cJdsg==/109951164160780798.jpg',
            //         rem: 0,
                   
            //     },
            //     {
            //         img: 'http://p3.music.126.net/SlRAByBL6FMdDBTQl8kiUQ==/109951164164111416.jpg',
            //         rem: 0,
                   
            //     },
            //     {
            //         img: 'http://p3.music.126.net/aMhNpf8eVauUkLeWlkVJNQ==/109951164163560721.jpg',
            //         rem: 0,
                    
            //     }
            // ],
            startX: 0, // 开始位置
            width: 0, // 屏幕宽度
            endX: 0, // 结束位置
            index: 0, // 当前图片下标
            endIndex: 0, // 未显示图片下标
            isLoading: false, // 是否加载中

        }
    },
    methods: {
        touchstart(ev) {
            console.log(ev)
            let touch = ev.targetTouches[0];
            this.startX = touch.pageX;
        },
        touchmove(ev) {
           
            // console.log(ev.changedTouches[0])
            let moveX = ev.changedTouches[0].pageX - this.startX;
            this.endX = moveX
            console.log(moveX, this.index)
             
            if (!this.imageList[this.index].moveClass) { // 判断是否动画完成
                if (moveX > 0) { // 向右移动
                    console.log(this.imageList[this.index])
                    if (this.index <= 0) {
                        this.endIndex = this.imageList.length - 1
                    } else {
                        this.endIndex = this.index - 1
                    }
                    this.imageList[this.index].rem = moveX
                    this.imageList[this.endIndex].rem =  moveX - this.width

                    

                } else { // 向左移动
                    if (this.index == this.imageList.length - 1) {
                        this.endIndex = 0
                    } else {
                        this.endIndex = this.index + 1
                    }

                    this.imageList[this.index].rem = moveX
                    this.imageList[this.endIndex].rem =  moveX + this.width


                }
                if (Math.abs(moveX) <= 100) {
                    if ( this.imageList[this.index].scaleY > 0.9) {
                        this.imageList[this.index].scaleY =  1 - Math.abs(moveX) /1000
                    } 
                    if (this.imageList[this.index].scaleY < 1) {
                        this.imageList[this.endIndex].scaleY =  0.9 + Math.abs(moveX)/1000 
                    }

                }
                
                console.log(this.imageList[this.index].scaleY, this.imageList[this.endIndex].scaleY)
              
                 
                

            }
            

        },
        touchend() {
            this.imageList[this.index].moveClass = 'swiperMove' // 加载动画
            this.imageList[this.endIndex].moveClass =  'swiperMove' 
            this.imageList[this.index].scaleY = 1
            this.imageList[this.endIndex].scaleY = 1
            let nowIndex = 0;
            if (this.endX > 0) { // 向右移动
                if (this.endX  > this.width/5) { // 移动距离超出屏幕宽度 3/1 切换轮播图
              
                    this.imageList[this.index].rem =  this.width
                    this.imageList[this.endIndex].rem =  0
                    nowIndex = this.endIndex
                } else {
                    
                    this.imageList[this.index].rem = 0
                    this.imageList[this.endIndex].rem = -this.width
                    nowIndex = this.index
                }

            } else { // 向左移动 

                if (Math.abs(this.endX)  > this.width/5) {
              
                    this.imageList[this.index].rem =  -this.width
                    this.imageList[this.endIndex].rem =  0
                    nowIndex = this.endIndex
                } else {

                    this.imageList[this.index].rem = 0
                    this.imageList[this.endIndex].rem = this.width
                    nowIndex = this.index
                }

            }
            
           
           
            setTimeout(() => {
                
                this.imageList[this.index].moveClass = ''
                this.imageList[this.endIndex].moveClass =  ''
                this.index = nowIndex
            }, 200)
        }

    },
    created() {
        this.width = window.innerWidth;
        this.imageList.forEach((res, i) => {
            res.scaleY = 1;
            res.moveClass = '';
            if (i == 0) {
                res.rem = 0
            } else {
                res.rem = this.width
            }
        })
        console.log(this.imageList)
       
        

    }
}
</script>
<style lang="scss" scoped>
.meSwipe {
    height: rem(200);
    width: 100%;
    position: relative;
    overflow: hidden;
    .swipe-item {
        height: rem(200);
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        overflow: hidden;
        background: #fdfdfc;
        padding: 0 rem(10);
        // transition-duration: 0ms;
       
   

        img {
            width: 100vh;
            height: 100%;
            border-radius: rem(20);
        }

    }
    .swiperMove {
         transition: transform .2s  ease;

    }
    .index-icon {
        position: absolute;
        z-index: 1000;
        bottom: rem(5);
        width: 100%;
        height: rem(10);
        // background: #ccc;
        display: flex;
        justify-content: center;
       

        .icon-item {
            width: rem(8);
            height: rem(8);
            border-radius: rem(4);
            background-color: #fff;
            margin: 0 rem(3);


        }
        .icon-item-check {
            background-color: #588b58;
        }
       

    }
   
    
}
</style>

