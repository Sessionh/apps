<template>
  <div class="home" id="searchBar" >
    <!-- <meNavTar pathName="about" title="台况信息"></meNavTar> -->
    <header v-if="!loadding">
        <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
        <meSearch style="flex: 1"></meSearch>
        <i class="iconfont icon-fenlei"></i>
        <div class="right-alter">
            <i class="iconfont icon-weiwangguanicon-defuben-"></i>
        </div>
        


    </header>
   

    <meScroll v-if="!loadding" ref="mescroll" class="content_list"  @downCallback="downCallback" @upCallback="upCallback">
        <meSwiper class="me-swiper" :height="247/$store.state.rem"  :imageListDel="swiperList" :loop="false" :loopTime="loopTime" v-model="pops"></meSwiper>
        <menuType class="menuType"></menuType>
        <div class="show-foot">
            <div class="foot-item" v-for="item in app.result.header.noteTags" :key="item.id" :style="{backgroundColor: item.backgroundColor}">
                <div class="top-title">
                    <div class="title">
                        {{item.name}}
                    </div>
                    <div class="icon">
                        <i class="iconfont icon-zhengque"></i>
                    </div>

                </div>
                <div class="bottom-content">
                    {{item.description}}

                </div>

            </div>
        </div>

        <div class="hot_activity">
            <span class="title">
                <div class="left-hot">
                  {{hotEvents.title}}
                </div>
                <span class="see_more">更多</span>
                <span class="icon">
                    <i class="iconfont icon-xiangyoujiantou"></i>
                </span>
                 

            </span>
            <div class="hot_shop">
                <div class="hot_shop_item" v-for="item in hotEvents.events" :key="item.id">
                    <div class="image">
                        <img :src="item.image">
                    </div>
                    
                    <div class="content">
                        {{item.name}}
                    </div>


                </div>
                <div class="right_content"> 
                   &nbsp;
                </div>
               
            </div>

        </div>

        <div class="today_recommend">
            <div class="title">
               {{featuresList.title}}
            </div>
            <div class="recommend_item" v-for="(item, index) in featuresList.list" :key="index">
                <div class="item_header">
                    <div class="user_img">
                        <img :src="item.r.a.p">
                    </div>
                    <div class="user_name">
                        <span class="name">{{item.r.a.n}}</span> 
                        <span class="level">LV.{{item.r.a.lvl}}</span>
                    </div>

                </div>
               
                <div class="title">
                    {{item.r.n}}
                </div>
                <div class="image" >
                    <img  :src="item.r.p">
                </div>
                
                <div class="see_num">
                    {{item.r.recommend_label}}
                </div>
               

            </div>

        </div>
       
        <div class="lis">--没有更多--</div>
     

    </meScroll>

    <!-- <iframe v-if="loadding" class="iframe" src="test.html"></iframe> -->

   
   
  </div>
</template>

<script>

// import meNavTar from '../components/meNavTar';
import meScroll from '../components/meScroll';
import meSwiper from '../components/meSwiper'
import menuType from '../components/menuType';
import meSearch from '../components/meSearch';
import appJSON from './lib/app';

import { setTimeout } from 'timers';
export default {
    name: 'homeRouter',
    components: {
        // meNavTar,
        meScroll,
        meSwiper,
        menuType,
        meSearch,
    },
    data() {
        return {
            app: '',
            pops: 33,
            loopTime: 4000,
            scrollTop: 0,
            shopList: [],
            isNothing: false,
            
            swiperList: [], // 轮播图
            hotEvents: [], // 热门活动
            featuresList: [], // 今日推荐
            loadding: false, 
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
            let config = {
                _session: '1563936447-7FBA1CC6-6174-4661-B24F-D46698CC00B3',
                agent_id: '9192d867e6e1d435ec3d8835d3c04991',
                direction: 5,
                request_count: 2,
                signature: '7d6b367f9ce445573ffc9ffb427f0ed7',
                signtime: '1563936448',
                user_id: '24000354'

            }
            this.$http.post('personalized/home/0/20', config).then(res => {
                console.log(res)
               
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
            mescroll.endSuccess('')
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
            

           
        }
    },
    created() {
        console.log(22)
        
        this.app = appJSON;
       
        let dsps =  appJSON.result.header.dsps
        let hot_events = appJSON.result.header.hot_events;
        dsps.forEach(res => {
            res.rem = 0;
            res.img = res.d.i;

        })
       
        this.swiperList = dsps
        this.hotEvents = hot_events
        this.featuresList = appJSON.result.features_list

       
        document.getElementById('skeleton_home').style.display = 'inline';
        setTimeout(() => {
            document.getElementById('skeleton_home').style.display = 'none';
            this.$store.commit('setMenu', true)
        }, 1000)
     
        this.getData();
    },
    destroyed() {
    }
}
</script>
<style lang="scss" scoped>

.home {
    .iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        overflow: hidden;
    }
   
    header {
        display: flex;
        align-items: center;
        padding: 5px;
        position: fixed;
        top: 0;
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
        height: calc(100vh - #{rem(43)});
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

        .hot_activity {
            .title {
                padding: rem(45) rem(26) rem(37) rem(26);
                display: flex;
                align-items: center;
                .left-hot {
                    flex: 1;
                    font-size: rem(18);
                    text-align: left;
                    font-weight: bold;
                }
                .see_more {
                    font-size: rem(14);
                    color: #c9c9c9;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    //  
                    
                    .more_title {
                       
                    }
                    .iconfont {
                       font-size: rem(14);
                       line-height: rem(14);
                       
                    //   
                       
                        
                    }
                }
                .icon {
                    line-height: 0;
                     color: #c9c9c9;
                    // transform: translateY(-50%);
                    .iconfont {
                        font-size: rem(13);
                    }

                }
                
            }
            // .hot_shop::-webkit-scrollbar { width: 0 !important }
            .hot_shop {
               
                
                display: flex;
                // white-space: nowrap;
                overflow-x: scroll;
                // height: 100%;
                padding-left: rem(20);
                .hot_shop_item {
                    width: rem(232);
                    margin-right: rem(11);
                  
                    .image {
                        height: rem(131);
                        width: rem(232);
                       
                    }
                    img {
                        border-radius: rem(10);
                        width: 100%;
                        height: 100%;
                    }
                    .content {
                        margin-top: rem(11);
                        font-weight: bold;
                        font-size: rem(15);
                        text-align: left;
                        position: relative;
                        // overflow: hidden;
                        // text-overflow:ellipsis;
                        // white-space: nowrap;
                        // -webkit-line-clamp: 2;
                        // &::after {
                        //     content:"...";
                        //     font-weight:bold;
                        //     position:absolute;
                        //     bottom:0;
                        //     right:0;
                        //     padding:0 20px 1px 45px;                        
                        // }
                       
                    }
                   
                   
                     
                }
                .right_content {
                    width: rem(10);
                    height: rem(10);
                }
                .hot_shop_item:last-child {
                    padding-right: rem(10);
                }
               
            }
          
            
        }

        .today_recommend {
            padding: rem(45) rem(20) rem(30) rem(20);
            .title {
                font-size: rem(18);
                text-align: left;
                font-weight: bold;
            }
            .recommend_item {
                margin-top: rem(32);
                .item_header {
                    display: flex;
                    align-items: center;
                    .user_img {
                        img {
                            width: rem(33);
                            height: rem(33);
                            border-radius: rem(16.5)
                        }
                    }
                    .user_name {
                    
                        .name {
                            font-size: rem(13);
                            padding: 0 rem(10);

                        }
                        .level {
                            font-size: rem(10);
                            color: #dcc080;
                            font-weight: bold;

                        }

                    }
                   

                }
                .title {
                    font-size: rem(16);
                    margin-top: rem(8);
                    font-weight: bold;

                }
                .image {
                  
                    margin: rem(10) 0;
                    width: auto;
                    height: rem(208);
                    // background-size: 100% 100%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: rem(10);
                    }

                }
                .see_num {
                    font-size: rem(10);
                    color: #999999;
                    text-align: left;

                }
               
               

            }
        }
        
    

    }
    .me-swiper {
        margin-top: rem(16);
    }
  


}

</style>

