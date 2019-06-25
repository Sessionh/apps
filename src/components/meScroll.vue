<template>
  <div class="mescroll">
    <!--滑动区域 ref='mescroll'不能删, 目的是路由切换时可通过ref调用mescroll-vue组件的beforeRouteEnter方法-->
    <mescroll-vue ref="mescroll" :up="mescrollUp" :down="mescrollDown" @init="mescrollInit">
      <slot></slot>
    </mescroll-vue>
  </div>
</template>

<script>
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
    name: 'mescrollComponent',
    components: {
        MescrollVue
    },
    props: {
        // 是否启用加载
        use: {
            type: Boolean,
            default: true
        }, 
        // 分页数
        pageSize: {
            type: Number,
            default: 10,
        }
    },
    data () {
        return {
            mescroll: null, // mescroll实例对象
            mescrollUp: {
                use: this.use,
                onScroll: this.onScroll,
                callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
                page: {
                    num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                    size: this.pageSize // 每页数据的数量
                },
                noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                toTop: {
                    src: require('../assets/img/mescroll-totop.png') // 回到顶部按钮的图片路径,支持网络图
                },
                empty: {
                    // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才生效;
                    warpId : null , 
                    icon : null , 
                    tip : "" , 
                    btntext : "" , 
                    btnClick : null, 
                    supportTap : false 
                },
                lazyLoad: {
                    use: true // 是否开启懒加载,默认false
                },
                htmlNodata: '<p class="upwarp-nodata">-- 没有更多了 --</p>',
                // htmlContent: 
                //  `<div class="loadingDown" >
                //                 <div class="loader-inner line-scale">
                //                     <div class="icon"></div>
                //                     <div class="icon"></div>
                //                     <div class="icon"></div>
                //                     <div class="icon"></div>
                //                 </div>
                //             </div>`

            },
            mescrollDown: {
                use: this.use,
                callback: this.downCallback,
            },
            dataList: [], // 列表数据
            pdType: 0 // 菜单
        }
    },
    beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
        next(vm => {
            // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
            vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
        })
    },
    beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
        this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
        next()
    },
    mounted() {

    },
    methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
        mescrollInit (mescroll) {
            this.mescroll = mescroll
        },
        // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
        upCallback (page, mescroll) {
            this.$emit('upCallback', page, mescroll)
    
        },
        /*
     监听滚动
     y为列表当前滚动条的位置;
     isUp=true向上滑,isUp=false向下滑
    */  
        onScroll(mescroll, y, isUp) {
            this.$emit('onScroll', mescroll, y, isUp)
     


        },
        downCallback(mescroll) { // 下拉回调
            this.$emit('downCallback', mescroll)
        },
        statusRefresh() { // 刷新
            this.mescroll.triggerDownScroll();

        },
        hideUpScroll() { // 隐藏上拉加载
            this.mescroll.hideUpScroll()
        },
        /*
      重置到第一页    
      1.默认null,不传参,则显示上拉加载的进度布局 
      2.传参true, 则显示下拉刷新的进度布局 
      3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
    */
        resetUpScroll(isVal, isTo) {  // isTo 是否回到顶部 
            this.mescroll.resetUpScroll(isVal)
            if (isTo !== 1) {
                this.mescroll.scrollTo( 0, 0 );
            }
      

        }
    },
    destroyed() { // 防止 退出页面 向上按钮不隐藏问题
        this.mescroll.hideTopBtn()
    }
}
</script>

<style scoped>
  /*以fixed的方式固定mescroll的高度*/
  .mescroll {
    position: absolute;
    top: 0;
    bottom: 0;
    height: auto;
  }
  
  .mescroll /deep/ .mescroll-upwarp {
      padding-bottom: 3rem;

  }

    .mescroll /deep/ .loadingDown {
        
        width: 100%;
        text-align: center;
       
        font-size: 1.6rem;
        border-radius: 0.5rem;
        
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        height: 4rem;
       

    }
     .mescroll /deep/  .line-scale > div {
        width: .5rem;
        height: 2rem;
        background: #3985ff;
    }
     /* .mescroll /deep/ .ball-pulse > div {
        height: 1.2rem;
        width: 1.2rem;

    }
     .mescroll /deep/ .ball-scale-ripple {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        align-items: center;
        justify-content: center;
        
    }
     .mescroll /deep/ .ball-scale-ripple > div{
        height: 1.5rem;
        width: 1.5rem;

    } */
  

</style>
