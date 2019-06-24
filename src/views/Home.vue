<template>
  <div class="home">
    <div class="demos">台况信息</div>
    <meNavTar></meNavTar>
  </div>
</template>

<script>

import meNavTar from '../components/meNavTar'
export default {
    name: 'home',
    components: {
        meNavTar
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
  @include border(bottom);
 
}
</style>

