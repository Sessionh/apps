<template>
  <div class="home" id="searchBar" >
    <meNavTar pathName="about" title="台况信息"></meNavTar>
   

    <meScroll ref="mescroll" class="content_list"  @downCallback="downCallback" @upCallback="upCallback">
         <meSwiper></meSwiper>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>

        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div> 
        <div class="lis">开始看达克赛德</div>

        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>
        <div class="lis">开始看达克赛德</div>

        <div class="lis">开始看达克赛德</div>

    </meScroll>
   
  </div>
</template>

<script>

import meNavTar from '../components/meNavTar';
import meScroll from '../components/meScroll';
import meSwiper from '../components/meSwiper'
export default {
    name: 'homeRouter',
    components: {
        meNavTar,
        meScroll,
        meSwiper
    },
    data() {
        return {
            scrollTop: 0,
            shopList: [],
            isNothing: false,
        }

    },
    activated() {
       
        if (this.scrollTop) {
            window.scrollTo(0, this.scrollTop)

        }
       
    },
    mounted () {//给window添加一个滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        getData() {
            this.$http.get('http://192.168.1.166:3006/users').then(res => {
                console.log(res)
                if (res.data) {
                    this.list = res.data;
                }
            })

        },
        downCallback(mescroll) {
            setTimeout(()=> {
                mescroll.endSuccess()
            }, 1000);

        },
        upCallback(page, mescroll) {
            console.log(page)
            this.isNothing = false; 
            // setTimeout(() => {
            //     let config = {
            //         params: {
            //             pageNumber: page.num,
            //             pageSize: page.size,
            //         }
            //     }

            //     this.$http.get('http://192.168.1.166:3006/users', config).then(res => {
            //         console.log(res)
            //         if (res.data) {
            //             this.shopList = res.data;
            //             // 如果是第一页需手动制空列表
            //             if (page.num === 1) this.shopList = []
            //             // 把请求到的数据添加到列表
            //             this.shopList = this.shopList.concat(res.data)
            //             // 数据渲染成功后,隐藏下拉刷新的状态
            //             this.$nextTick(() => {
            //                 console.log(res.total)
            //                 mescroll.endSuccess(res.data.length)
            //                 if ( this.shopList.length === 0) {
            //                     this.isNothing = true;

            //                 }
            //             })
            //         }
            //     })

            // }, 300)
       
        },
        handleScroll () { //改变元素#searchBar的top值
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
           
            if (scrollTop) {
                this.scrollTop = scrollTop
            }
            

           
        },
    },

    created() {
        console.log(22)
        // this.getData();
    },
    destroyed() {
       
    }
}
</script>
<style lang="scss" scoped>
.home {
  color:  red;
  .lis {
    height: rem(40);
    width: 100%;
    @include border(bottom);
    margin-top: rem(20);
  }
  .content_list {
    height: 100vh ;
    position: relative;
    border-top: rem(60) solid #fff;
   

  }
  


}

</style>

