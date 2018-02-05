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
  import {getReplysById, addReply} from "@/mock/card_mock"
  import UserInputPanel from "@/components/common/UserInputPanel"
  import InfoDisplayItem from "@/components/common/InfoDisplayItem"
  import Replys from "@/components/reply/Replys"
  import {mapState} from "vuex"

  export default {
    name: "RemarkItem",
    components: {
      UserInputPanel,
      Replys,
      InfoDisplayItem
    },
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
      },
      ...mapState({
        cardId: (state) => {
          return state.RemarkDetails.cardId
        }
      })
    },
    methods: {
      onClick4RemarkBtn(oRemarkRightBtn) {
        if (oRemarkRightBtn.key == "praise") {
          this.onClickPraiseBtn();
        }
        else if (oRemarkRightBtn.key == "reply") {
          this.onClickReplyBtn();
        }
      },
      onClickPraiseBtn() {
        if (this.debug) {
          this.remarkInner.praiseNum += 1;
        }
        else {
          //TODO
          this.$http.post(this.baseUrl + "/remark/praise/" + this.remarkInner.id).then((resp) => {
            this.remarkInner.praiseNum += 1;
          });
        }
      },
      onClickReplyBtn() {
        this.showReply = !this.showReply;
        if (this.debug) {
          this.replys = getReplysById(this.cardId, this.remarkInner.id);
          console.log("sss: " + this.cardId);
//            console.log(this.$store.state.RemarkDetails.cardId);
        }
        else {
          //TODO
          if (this.remarkInner.replyNum > 0 && this.remarkInner.replyNum != this.replys.length) {
            this.$http.post(this.baseUrl + "/reply/getByRemarkId/" + this.remarkInner.id).then((resp) => {
              let arrReply = resp.body;
              this.replys = arrReply;
            });
          }
        }
      },
      addReply(strMessage, bAnonymous) {
        if (this.debug) {
          this.remarkInner.replyNum += 1;
          addReply(this.cardId, this.remarkInner.id, strMessage, bAnonymous);
          this.$refs.ref4AddReply.clearInputMessage();
        }
        else {
          //TODO
          let oReply = {
            name: this.$store.getters.getUser.name,
            pic: this.$store.getters.getUser.pic,
            anonymous: bAnonymous,
            time: Date.now(),
            msg: strMessage
          };
          this.$http.post(this.baseUrl + "/reply/add/" + this.remarkInner.id, oReply).then((resp) => {
            let oReplyRes = resp.body;
            this.replys.unshift(oReplyRes);
            this.$refs.ref4AddReply.clearInputMessage();
          });
        }
      }
    },
    watch: {
      remark: {
        handler(oNewVal, oOldVal) {
          this.remarkInner = this.remark;
        },
        deep: false
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .reply-custom {
    padding-top: 10px;
  }
</style>
