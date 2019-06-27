<template>
    <div class="navTab">
        <div class="content">
            <div class="left-icon" @click="backPage()">
                <div class="iconfont icon-xiangzuojiantou"></div>
            </div>
            <div class="title">
                {{title}}

            </div>
            <div class="right-content">
                
    
            </div>

        </div>
       
    </div>
</template>
<script>
export default {
    name: 'meNavTar',
    props: {
        pathName: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods: {
        backPage() {
            if (this.pathName) {
                this.$router.push(this.pathName)
            }
           
        }

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
    overflow: hidden;
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
            padding-left: rem(6);
            .icon-xiangzuojiantou {
                font-weight: bold;
                font-size: rem(18);

            }
        }
        .title {
            flex: 1;
        }

    }
   
}


</style>

