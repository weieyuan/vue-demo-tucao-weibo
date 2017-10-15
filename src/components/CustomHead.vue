<template>
  <nav class="main-navigation">
    <div class="logo">
      <img src="/static/images/logo.png">
    </div>
    <div class="rightContent">
      <div class="container">
        <span>首页</span>
        <span>注册</span>
        <span>登录</span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "CustomHead",
    data: function(){
      return {};
    },
  }

</script>

<style scoped lang="less">
  @logoWidth: 144px;
  .main-navigation {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #F3726D;
    .logo {
      width: @logoWidth;
      height: 100%;
      padding-left: 10px;
      float: left
    }
    .rightContent {
      width: calc(~"100%" - @logoWidth);
      float: left;
    }
  }
</style>
