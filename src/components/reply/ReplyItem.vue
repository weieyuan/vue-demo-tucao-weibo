<template>
  <info-display-item :info="replyInfo(reply)"
                     @onClickRightBtn="onClick4ReplyBtn"></info-display-item>
</template>

<script>
  import InfoDisplayItem from "@/components/common/InfoDisplayItem"

  export default {
    name: "ReplyItem",
    components: {
      InfoDisplayItem
    },
    props: {
      reply: Object
    },
    data() {
      return {
        replyInner: this.reply
      }
    },
    methods: {
      replyInfo() {
        let oReplyInfo = {
          pic: "",
          name: "",
          time: "",
          msg: "",
          rightBtns: []
        };
        Object.assign(oReplyInfo, this.replyInner);
        oReplyInfo.rightBtns.push({
          key: "praise",
          label: this.replyInner.praiseNum,
          icon: "glyphicon-thumbs-up"
        });
        return oReplyInfo;
      },
      onClick4ReplyBtn(oReplyBtn) {
        if (oReplyBtn.key == "praise") {
          this.onClickPraiseBtn();
        }
      },
      onClickPraiseBtn() {
        if (this.debug) {
          this.replyInner.praiseNum += 1;
        }
        else {
          //TODO
          this.$http.post(this.baseUrl + "/reply/praise/" + this.replyInner.id).then((resp) => {
            this.replyInner.praiseNum += 1;
          });
        }
      }
    },
    watch: {
      reply(oNewVal, oOldVal) {
        this.replyInner = oNewVal;
      }
    }
  }
</script>

<style scoped>

</style>
