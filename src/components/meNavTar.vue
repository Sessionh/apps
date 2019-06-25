<template>
    <div class="navTab">
        <div class="content">
            <div class="left-icon">
                <div class="iconfont icon-xiangzuojiantou"></div>
            </div>
            <div class="title">
                台况信息

            </div>
            <div class="right-content">
                <div class="iconfont icon-xiangzuojiantou"></div>
    
            </div>

        </div>
       
    </div>
</template>
<script>
export default {
    name: 'meNavTar',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.navTab {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #fff;  
    .content {
          
        font-size: rem(19);
        height: rem(46);
        display: flex;
        align-items: center;
        color: #ff8815;
        justify-content: center;
        @include border(bottom);

        .left-icon, .right-content {
            width: rem(40)
        }
        .left-icon {
            text-align: left;
        }
        .title {
            flex: 1;
        }

    }
   
}


</style>

