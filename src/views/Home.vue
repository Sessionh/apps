<template>
  <div class="home" id="searchBar" >
    <!-- <meNavTar pathName="about" title="台况信息"></meNavTar> -->
    <header>
        <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
        <meSearch style="flex: 1"></meSearch>
        <i class="iconfont icon-fenlei"></i>
        <div class="right-alter">
            <i class="iconfont icon-weiwangguanicon-defuben-"></i>
        </div>
        


    </header>
   

    <meScroll ref="mescroll" class="content_list"  @downCallback="downCallback" @upCallback="upCallback">
        <meSwiper class="me-swiper" :height="200/$store.state.rem"  :imageList="swiperList" :loop="true" :loopTime="loopTime"></meSwiper>
        <menuType class="menuType"></menuType>
        <div class="show-foot">
            <div class="foot-item">
                <div class="top-title">
                    <div class="title">
                        秀早餐
                    </div>
                    <div class="icon">
                        <i class="iconfont icon-zhengque"></i>
                    </div>

                </div>
                <div class="bottom-content">
                    3714人在记录

                </div>

            </div>

             <div class="foot-item" style="background-color: #58b15d">
                <div class="top-title">
                    <div class="title">
                        秀午餐
                    </div>
                    <div class="icon">
                        <i class="iconfont icon-zhengque"></i>
                    </div>

                </div>
                <div class="bottom-content">
                    288人在记录

                </div>

            </div>


             <div class="foot-item">
                <div class="top-title">
                    <div class="title">
                        秀晚餐
                    </div>
                    <div class="icon">
                        <i class="iconfont icon-zhengque"></i>
                    </div>

                </div>
                <div class="bottom-content">
                    110人在记录

                </div>

            </div>

        </div>
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

// import meNavTar from '../components/meNavTar';
import meScroll from '../components/meScroll';
import meSwiper from '../components/meSwiper'
import menuType from '../components/menuType';
import meSearch from '../components/meSearch';
export default {
    name: 'homeRouter',
    components: {
        // meNavTar,
        meScroll,
        meSwiper,
        menuType,
        meSearch
    },
    data() {
        return {
            loopTime: 3000,
            scrollTop: 0,
            shopList: [],
            isNothing: false,
            swiperList: [
                {
                    img: 'http://p3.music.126.net/mTjdgQiGU4f3riJG_cJdsg==/109951164160780798.jpg',
                    rem: 0,
                   
                },
                {
                    img: 'http://p3.music.126.net/SlRAByBL6FMdDBTQl8kiUQ==/109951164164111416.jpg',
                    rem: 0,
                   
                },
                {
                    img: 'http://p3.music.126.net/aMhNpf8eVauUkLeWlkVJNQ==/109951164163560721.jpg',
                    rem: 0,
                    
                }
            ],
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
   
    header {
        display: flex;
        align-items: center;
        padding: 5px;
        @include border(bottom);
        .iconfont {
            
            color:#000000;
            font-size: rem(18);
        }
        .icon-tianjiajiahaowubiankuang {
            width: rem(60);
            text-align: center;
            font-weight: bold;
        }
    
        .icon-fenlei {
            width: rem(71);
            text-align: center;
            font-weight: bold;
        }
        .right-alter {
            width: rem(38);
            text-align: left;
            position: relative;

        }

    }
    .lis {
        height: rem(40);
        width: 100%;
        @include border(bottom);
        margin-top: rem(20);
    }
    .content_list {
        height: 100vh ;
        position: relative;
        // border-top: rem(46) solid #fff;
        .menuType {
            padding: 0 rem(20);
        }
       

        .show-foot {
            display: flex;
            margin: rem(20);
            text-align: left;
           
            .foot-item {
                flex: 1;
                padding: rem(6);
                height: rem(50);
                border-radius: rem(5);
                background-color: #95d77d;
                margin-left: rem(10);
                
                .top-title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    color: #fff;
                    font-size: rem(16);
                    .title {
                        flex: 1;
                       
                    }

                    .icon {
                        width: rem(20);
                        height: rem(20);
                         color: #e4dede;
                        border-radius: rem(11);
                        background-color: #f9f9f9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .icon-zhengque {
                            font-size: rem(13);
                        }
                       
                    }
                }

                .bottom-content {
                    color: #fff;
                    font-size: rem(11);

                }

               
               


            }
        }
        
    

    }
    .me-swiper {
        margin-top: rem(16);
    }
  


}

</style>

