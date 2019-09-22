<template>
  <div class="about">
     <div class="item" style="background: yellow">可斯柯达</div>
     <div class="item" style="background: blue">临水临电了</div>
     <div class="item">开始打开</div>
     <div class="item">SDK</div>
     <div class="item">临水临电</div>

  </div>
</template>
<script>
import { about } from '../assets/skeleton.js'
import {setSkeleton, removeSkeleton} from '../utils/util'
export default {
    name: 'about',
    data() {
        return {

        }
    },
    methods: {
        // setSkeleton(name) {
        //     const childNode = document.createElement('div')
        //     childNode.id = `skeleton_${name}`
        //     childNode.style = "position: fixed;top: 0; z-index: 10000;background: #fff"
        //     childNode.innerHTML = about
        //     const appDOM = document.body
        //     appDOM.insertBefore(childNode,  appDOM.childNodes[0])

        //     document.getElementById(`skeleton_${name}`).style.display = 'inline'
        //     setTimeout(() => {
        //         const homeSle = document.getElementById('skeleton_about');
        //         if (homeSle) {
        //             homeSle.remove()
        //         }
        //     }, 1000)


        // }
        getData() {
            setTimeout(() => {
                console.log('数据')

            }, 2000)
        }
    },
    created() {
        setSkeleton('about', about, this)
        removeSkeleton('about', 1000)
        // this.setSkeleton('about')
        
    },
    destroyed() {
        
       
    }
}
</script>
<style lang="scss" scoped>

.item {
  height: rem(50);
  width: 100vw;
  font-size:  rem(18);
  // color: #fff;
  @include border(bottom);
  display: flex;
  align-items: center;
  justify-content: center;


}
</style>

