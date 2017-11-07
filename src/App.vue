<template>
  <div id="app">
    <custom-head></custom-head>
    <div class="content">
      <div class="container main-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomHead from "@/components/CustomHead";

  export default {
    components: {CustomHead},
    name: 'app',
    data: function () {
      return {};
    },
    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">
  .content {
    background-color: #ebebeb;
    .main-container {
      padding-top: 35px;
    }
  }
</style>
