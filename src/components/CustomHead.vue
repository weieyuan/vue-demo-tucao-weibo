<template>
  <nav class="main-navigation">
    <div class="logo">
      <img src="/static/images/logo.png">
    </div>
    <div class="rightContent">
      <div class="container">
        <span class="nav-item" @click="onClickMainPage">首页</span>
        <span class="nav-item">注册</span>
        <span class="nav-item">登录</span>
        <span class="nav-item" @click="onClickTest">Test</span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "CustomHead",
    data: function () {
      return {};
    },
    methods: {
      onClickMainPage(){
        this.$router.push({name: "MainContent"});
      },
      onClickTest() {
        this.$router.push({
          path: "/test"
        });
      }
    }
  }

</script>

<style scoped lang="less" type="text/less">
  @import "../css/const.less";

  .main-navigation {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: @BodyPaddingTopo;
    line-height: @BodyPaddingTopo;
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

      .nav-item {
        color: #FFFFFF;
        font-size: 12pt;
        margin: 0 10px;
      }
      .nav-item:hover{
        cursor: pointer;
      }
    }
  }
</style>
