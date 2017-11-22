<template>
  <div class="list-group">
    <template v-for="(remark, index) in remarks">
      <div class="list-group-item item-custom">
        <remark-item :ref="remark.id" :remark="remark" :key="remark.id"></remark-item>
      </div>
    </template>
  </div>
</template>

<script>
  import RemarkItem from "@/components/remark/RemarkItem"

  export default {
    components: {
      RemarkItem
    },
    name: "Remarks",
    props: {
      remarks: Array
    },
    data: function () {
      return {};
    },
    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">

  .item-custom{
    border: none;
  }

  .list-group-item:nth-child(2n) {
    /*background-color: #dff0d8;*/
  }

  .list-group-item:nth-child(2n+1) {
    /*background-color: #f2dede;*/
  }
</style>
