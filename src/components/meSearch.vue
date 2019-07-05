<template>
    <div class="me-search">
      
        <!-- <span class="iconfont icon-sousuo1"></span>
        <span class="aligned">文字</span> -->
        <div class="icon">
            <div class="iconfont icon-sousuo1"></div>
        </div>
       
       
        
       
        
        <input placeholder="请输入搜索内容">

    </div>
</template>
<style lang="scss" scoped>
input{  
	background:none;  
	outline:none;  
	border:0px;
}
input::placeholder {
    color: #c9c9c9;
    font-size: rem(12);
}   
input:focus{
    caret-color:green;
     
}

.me-search {
    display: flex;
    align-items: center;
    padding: rem(2) rem(4);
    background: #e8eaec;
    border-radius: rem(5);
    margin: rem(10) 0;
    width: 100%;
       
    
    
    
    
   
    input {
        height: rem(20);
        width: 100%;
        // margin-left: rem(2);
        display: flex;
        align-items: center;
        line-height: rem(20);   
        
        
    }
    .icon {
        width: rem(20);
        height: 100%;
        line-height: rem(20);
        .iconfont {
            font-size: rem(12);
            color: #c9c9c9;
        
        }

    }
   
   

}
</style>


