<template>

  <div class="list-group list-group-custom">
    <div v-for="reply in replys" class="list-group-item item-custom">
      <info-display-item :key="reply.id" :info="replyInfo(reply)"
                         @onClickRightBtn="onClick4ReplyBtn"></info-display-item>
    </div>
  </div>

</template>

<script>
  import InfoDisplayItem from "@/components/common/InfoDisplayItem"

  export default {
    components: {
      InfoDisplayItem
    },
    name: "Replys",
    props: {
      replys: Array
    },
    data: function () {
      return {};
    },
    methods: {
      replyInfo(oReply) {
        let oReplyInfo = {
          pic: "",
          name: "",
          time: "",
          msg: "",
          rightBtns: []
        };
        Object.assign(oReplyInfo, oReply);
        oReplyInfo.rightBtns.push({
          key: "praise",
          label: oReply.praiseNum,
          icon: "glyphicon-thumbs-up"
        });
        return oReplyInfo;
      },
      onClick4ReplyBtn(oReplyRightBtn, oReply) {
        if (oReplyRightBtn.key == "praise") {
          if (this.debug) {
            oReply.praiseNum += 1;
            oReplyRightBtn.label += 1;
          }
          else {

          }
        }
      }
    }
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
