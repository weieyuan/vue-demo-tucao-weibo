<template>
  <div class="page">
    <custom-head></custom-head>
    <div class="content">
      <div class="container main-container">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomHead from "@/components/CustomHead";

  export default {
    components: {CustomHead},
    name: 'app',
    created() {
      let oMockUser = {
        name: "游客",
        login: false,
        pic: publicPath + "/images/person_default.png"
      };
      this.$store.commit("setUser", oMockUser);
    },
    data: function () {
      return {};
    },
    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">
  .page {
    height: 100%;
  }

  .content {
    min-height: 100%;
    background-color: #ebebeb;
    .main-container {
      padding-top: 35px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
