<template>
    <div class="me-search">
      
        <!-- <span class="iconfont icon-sousuo1"></span>
        <span class="aligned">文字</span> -->
        <span class="icon">
            <i class="iconfont icon-sousuo1"></i>
        </span>
        
       
        
        <input placeholder="请输入搜索内容">

    </div>
</template>
<style lang="scss" scoped>
input{  
	background:none;  
	outline:none;  
	border:0px;
}
input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: rem(13);
}

.me-search {
    display: flex;
    // height: rem(30);
    align-items: center;
    // padding: rem(2) rem(7);
    // border: 1px solid red;
    position: relative;
    background: #e8eaec;
    border-radius: rem(5);
       
    .iconfont {
        font-size: rem(14);
        line-height: rem(30);
        color: #808695;
    }
    
    
    
   
    input {
        height: rem(30);
        width: 100%;
        margin-left: rem(30);
        
    }
    .icon {
        width: 32px;
        height: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
   

}
</style>


