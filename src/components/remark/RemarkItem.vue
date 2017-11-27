<template>
  <div>
    <info-display-item :info="remarkInfo" @onClickRightBtn="onClick4RemarkBtn"></info-display-item>

    <div class="reply-custom" v-show="showReply">

      <user-input-panel ref="ref4AddReply" :btnName="btnName" @onClickBtn="addReply"></user-input-panel>

      <replys :replys="replys"></replys>

    </div>
  </div>
</template>

<script>
  import {cardConfig} from "@/config"
  import timeFormat from "@/components/common/time_format"
  import {getReplysById} from "@/mock/card_mock"
  import UserInputPanel from "@/components/common/UserInputPanel"
  import InfoDisplayItem from "@/components/common/InfoDisplayItem"
  import Replys from "@/components/remark/Replys"

  export default {
    components: {
      UserInputPanel,
      Replys,
      InfoDisplayItem
    },
    name: "RemarkItem",
    props: {
      remark: Object
    },
    mixins: [timeFormat],
    data: function () {
      return {
        remarkInner: this.remark,
        showReply: false,
        btnName: "回复",
        replys: []
      };
    },
    computed: {
      remarkInfo() {
        let oRemarkInfo = {
          pic: "",
          name: "",
          time: "",
          msg: "",
          rightBtns: []
        };
        Object.assign(oRemarkInfo, this.remarkInner);
        oRemarkInfo.rightBtns.push({
          key: "praise",
          label: this.remarkInner.praiseNum,
          icon: "glyphicon-thumbs-up"
        });
        oRemarkInfo.rightBtns.push({
          key: "reply",
          label: this.remarkInner.replyNum,
          icon: "glyphicon-envelope"
        });
        return oRemarkInfo;
      }
    },
    methods: {
      onClick4RemarkBtn(oRemarkRightBtn) {
        if (oRemarkRightBtn.key == "praise") {
          if (this.debug) {
            this.remarkInner.praiseNum += 1;
          }
          else {

          }
        }
        else if (oRemarkRightBtn.key == "reply") {
          this.showReply = !this.showReply;
          if (this.debug) {
            this.replys = getReplysById("", "");
          }
          else {

          }
        }
      },
      addReply(strMessage, bAnonymous) {
        this.remarkInner.replyNum += 1;
        if (this.debug) {
          let oReply = {
            id: this.replys.length,
            anonymous: true,
            pic: "",
            name: "",
            time: 1509526435275 + this.replys.length * 1000,
            msg: strMessage,
            praiseNum: 300
          };
          this.replys.unshift(oReply);
          this.$refs.ref4AddReply.clearInputMessage();
        }
        else {
          //TODO
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .reply-custom {
    padding-top: 10px;
  }
</style>
