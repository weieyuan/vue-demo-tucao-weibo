<template>

  <div class="list-group list-group-custom">
    <div v-for="reply in replys" class="list-group-item item-custom">
      <reply-item :key="reply.id" :reply="reply"></reply-item>
    </div>
  </div>

</template>

<script>
  import ReplyItem from "@/components/reply/ReplyItem"

  export default {
    name: "Replys",
    components: {
      ReplyItem
    },
    props: {
      replys: Array
    },
    data: function () {
      return {};
    },
    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">
  .list-group-custom {
    margin-top: 20px;
    margin-left: 20px;

    .item-custom {
      background-color: #f7f7f7;
      border: none;
    }
  }
</style>
