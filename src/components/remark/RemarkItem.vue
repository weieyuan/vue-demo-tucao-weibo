<template>
  <div>
    <info-display-item :info="remarkInfo" @onClickRightBtn="onClick4RemarkBtn"></info-display-item>

    <div v-show="showReply">

      <user-input-panel ref="ref4AddReply" :btnName="btnName" @onClickBtn="addReply"></user-input-panel>

      <div class="list-group list-group-custom">
        <div v-for="reply in replys" class="list-group-item item-custom">
          <info-display-item :ref="reply.id" :info="replyInfo(reply)" @onClickRightBtn="onClick4ReplyBtn"></info-display-item>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {cardConfig} from "@/config"
  import timeFormat from "@/components/common/time_format"
  import {getReplysById} from "@/mock/card_mock"
  import UserInputPanel from "@/components/remark/UserInputPanel"
  import InfoDisplayItem from "@/components/remark/InfoDisplayItem"

  export default {
    components: {
      UserInputPanel,
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
      onClick4ReplyBtn(oReplyRightBtn, oReply){
        if(oReplyRightBtn.key == "praise"){
          if(this.debug){
            oReply.praiseNum += 1;
            oReplyRightBtn.label += 1;
          }
          else{

          }
        }
      },
      addReply(strMessage, bAnonymous) {
        this.remarkInner.replyNum += 1;
        if (this.debug) {
          let oReply = {
            id: this.replys.length,
            anonymous: bAnonymous,
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

  .list-group-custom {
    margin-top: 20px;
    margin-left: 20px;

    .item-custom {
      background-color: #f7f7f7;
      border: none;
    }
  }

</style>
