<template>
    <div class="navTab">
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
    display: flex;
    min-height: rem(20);
    .left-icon, .right-content {
        width: rem(20)
    }
    .title {
        flex: 1;
    }
}


</style>

