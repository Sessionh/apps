<template>
    <div class="me-search">

        <span class="ant-input-password ant-input-affix-wrapper">
            <input placeholder="请输入" action="click" type="password" class="ant-input" value="">
            <span class="ant-input-suffix">
                <i class="iconfont icon-sousuo1 anticon"></i>
            </span>
    
        </span>

      
        
       
        
        

    </div>
</template>
<style lang="scss" scoped>

input::placeholder {
    color: #c9c9c9;
    // font-size: rem(14);
    
}   
input:focus{
    caret-color:green;
     
}
.me-search {
    font-size: rem(14);
}


.ant-input-affix-wrapper {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.65);
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: start;
}

.ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-left: 25px;
}
.ant-input-affix-wrapper .ant-input {
    min-height: 100%;
}
.ant-input-affix-wrapper .ant-input {
    position: relative;
    text-align: inherit;
}

.ant-input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    height: rem(30);
    padding: 4px 11px;
    color: rgba(0,0,0,0.65);
    line-height: rem(30);
    background-color: #f7f7f7;
    background-image: none;
    border: none;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
}



.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    font-size: rem(14);
    color: #c9c9c9;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


.ant-input-affix-wrapper .ant-input-prefix, .ant-input-affix-wrapper .ant-input-suffix {
    position: absolute;
    top: 50%;
    z-index: 2;
    left: 5px;
    color: rgba(0,0,0,0.65);
    line-height: 0;
    // transform: translateY(-50%);
}






</style>


