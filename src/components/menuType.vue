<template>
    <div class="menuType">
        <div class="content" v-for="item in channels" :key="item.id">
            <img :src="item.icon">
            <div>{{item.title}}</div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'menuType',
    data() {
        return {
            channels: [{
                id: "14",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558410144.png",
               
                show_red_point: false,
                title: "菜谱分类",
            }, 
            {
                id: "35",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1560941019.png",
                show_red_point: false,
                title: "豆果商城",
            }, 
            {
                id: "19",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1559095327.gif",
                show_red_point: false,
                title: "达人专区",
            }, 
            {
                id: "31",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558359671.png",
                show_red_point: false,
                title: "母婴专区",
            }, 
            {
                id: "20",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558357211.png",
                show_red_point: false,
                title: "签到领现金",
            }, 
            {
                id: "16",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558357224.png",
                show_red_point: false,
                title: "关注动态",
            }, 
            {
                id: "24",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558359653.png",
                show_red_point: false,
                title: "视频菜谱",
            }, 
            {
                id: "15",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558408811.png",
                show_red_point: false,
                title: "安佳美食社",
            }, 
            {
                id: "36",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558359719.png",
                show_red_point: false,
                title: "记录生活",
            }, 
            {
                id: "18",
                url:'',
                icon: "https://i1.douguo.com/upload/banner/1558357192.png",
                show_red_point: false,
                title: "健康管理",
            }]

        }
    },
    methods: {

    },
    created() {
        console.log(22)
       
        console.log(this.channels)

    }
}
</script>
<style lang="scss" scoped>
.menuType {
    display: flex;
    flex-flow: row wrap;
    .content {
        // flex: 1;
        width: 20%;
        margin-top: rem(10);
         color: #515a6e;
         font-size: rem(12);
        img {
            width: rem(40);
            height: rem(40);
        }
    }
}
</style>


