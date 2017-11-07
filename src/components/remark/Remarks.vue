<template>
  <div class="list-group">
    <template v-for="(remark, index) in remarks">
      <div class="list-group-item">
        <remark-item :remark="remark" :key="remark.id"></remark-item>
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
    methods: {

    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
