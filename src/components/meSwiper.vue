<template>
    <div class="meSwipe" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <div class="swipe-item" v-for="item in imageList" :key="item.id"  :style="{transform: `translate3d(${item.rem}px, 0px, 0px)` }">
            <img :src="item.img">

        </div>

    </div>
</template>
<script>
export default {
    name: 'meSwiper',
    data() {
        return {
            imageList: [
                {
                    id: 1,
                    img: 'http://p3.music.126.net/mTjdgQiGU4f3riJG_cJdsg==/109951164160780798.jpg',
                    rem: -1118
                },
                {
                    id: 2,
                    img: 'http://p3.music.126.net/SlRAByBL6FMdDBTQl8kiUQ==/109951164164111416.jpg',
                    rem: -374
                },
                {
                    id: 3,
                    img: 'http://p3.music.126.net/aMhNpf8eVauUkLeWlkVJNQ==/109951164163560721.jpg',
                    rem: 0
                }
            ],
            startX: 0,
            isMove: false,
            width: 0,
            endX: 0

        }
    },
    methods: {
        touchstart(ev) {
            console.log(ev)
            let touch = ev.targetTouches[0];
            this.startX = touch.pageX;
            console.log(window.innerWidth)
            this.width = window.innerWidth

        },
        touchmove(ev) {
            
            // console.log(ev.changedTouches[0])
            let moveX = ev.changedTouches[0].pageX - this.startX;
            this.endX = moveX
            console.log(moveX)
            this.imageList[1].rem = moveX - this.width  
            this.imageList[2].rem =  moveX
            // this.imageList[1].rem = this.imageList[1].rem + moveX - this.initPage

        },
        touchend() {
            console.log(22)
            if (this.endX > 100) {
                this.imageList[2].rem =  1000
                this.imageList[1].rem = 0
            } else {
                this.imageList[1].rem =  1000
                this.imageList[2].rem = 0
            }
        }

    },
    created() {

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
        transition-duration: 0ms;
    //    transition: transform .5s ease-in .1s,

        img {
            width: 100vh;
            height: 100%;
            border-radius: rem(20)
        }

    }
    
}
</style>

