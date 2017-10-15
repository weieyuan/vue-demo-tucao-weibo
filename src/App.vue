<template>
  <div id="app">
    <custom-head></custom-head>
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomHead from "@/components/CustomHead";

  export default {
    components: {CustomHead},
    name: 'app'
  }
</script>

<style scoped lang="less">
.content{
  background-color: #ebebeb;
}

</style>
