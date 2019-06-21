<template>
  <div class="home">
    <div class="demos">台况信息</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home {
  color:  red;

}
.demos {
  width: 100%;
  font-size: rem(19);
  background: #fff;
  height: rem(46);
  display: flex;
  align-items: center;
  color: #ff8815;
  justify-content: center;
  @include border($type: 1);
  
  
 
 
}
</style>

