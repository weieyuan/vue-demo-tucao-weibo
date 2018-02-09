<template>
  <nav class="main-navigation">
    <div class="logo">
      <img :src="publicPath + '/images/logo.png'">
    </div>
    <div class="rightContent">
      <div class="container">
        <router-link tag="li" class="nav-item" exact exact-active-class="active"
                     :to="{name: 'MainContent'}">
          <span class="glyphicon glyphicon-home"></span> 首页
        </router-link>
        <router-link v-if="!isLogined" tag="li" class="nav-item" exact exact-active-class="active"
                     :to="{name: 'Registry'}">
          <span class="glyphicon glyphicon-registration-mark"></span> 注册
        </router-link>
        <router-link v-if="!isLogined" tag="li" class="nav-item" exact exact-active-class="active"
                     :to="{name: 'Login'}">
          <span class="glyphicon glyphicon-log-in"></span>
          登录
        </router-link>
        <li v-if="isLogined" class="nav-item">
          <span class="glyphicon glyphicon-log-out"></span> 注销
        </li>
        <router-link tag="li" class="nav-item" exact exact-active-class="active"
                     :to="{name: 'Test'}">Test
        </router-link>
        <div class="left">
          <li>
            <span class="glyphicon glyphicon-user"></span> {{userName}}
          </li>
        </div>
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
    computed: {
      userName() {
        return this.$store.state.user.name;
      },
      isLogined() {
        return this.$store.state.user.login;
      }
    },
    methods: {}
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
      width: calc(~"100% - @{logoWidth} - 10px");
      height: 100%;
      float: left;
      margin-left: 10px;
      color: #FFFFFF;
      font-size: 1.2em;
      word-spacing: 2px;

      .nav-item {
        margin: 0 10px;
        padding-bottom: 2px;
        list-style: none;
        display: inline;
        line-height: 1.5;
        font-weight: normal;
      }
      .nav-item:hover {
        cursor: pointer;
        text-decoration: none;
        border-bottom: 2px solid #00bfff;
      }
      .nav-item:active {
        color: #00bfff;
      }
      .active {
        text-decoration: none;
        border-bottom: 2px solid #00bfff;
      }
      .left {
        float: right;
        li {
          list-style: none;
        }
      }
    }
  }
</style>
