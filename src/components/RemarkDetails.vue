<template>
  <div>
    <card-item :card="card"></card-item>

    <user-input-panel ref="ref4AddRemark" :btnName="btnName" @onClickBtn="addRemark"></user-input-panel>

    <remarks :remarks="remarks"></remarks>
  </div>
</template>

<script>
  import CardItem from "@/components/cards/CardItem"
  import Remarks from "@/components/remark/Remarks"
  import {getCardInfoById, getRemarksByCardId, addRemark} from "@/mock/card_mock"
  import UserInputPanel from "@/components/common/UserInputPanel"
  import Vue from "vue"
  import store from "@/store"

  export default {
    components: {
      CardItem,
      Remarks,
      UserInputPanel
    },
    name: "RemarkDetails",
    props: {
      id: [String, Number]
    },
    data: function () {
      return {
        card: {},
        btnName: "评论",
        remarks: []
      };
    },
    created() {
      this.getCardInfo();
      this.getCardRemarks();
    },
    mounted() {
      console.log(this.$el);
    },
    computed: {},
    methods: {
      getCardInfo() {
        if (this.debug) {
          this.card = getCardInfoById(this.id);
        }
        else {
          //TODO
          this.$http.post(this.baseUrl + "/card/get/" + this.id).then((resp) => {
            let oCard = resp.body;
            this.card = oCard;
          });
        }
      },
      getCardRemarks() {
        if (this.debug) {
          this.remarks = getRemarksByCardId(this.id);
        }
        else {
          //TODO
          this.$http.post(this.baseUrl + "/remark/get/" + this.id).then((resp) => {
            let oRemarksRes = resp.body;
            this.remarks = oRemarksRes;
          });
        }
      },
      addRemark(strMessage, bAnonymous) {
        if (this.debug) {
          this.card.remarkNum += 1;
          addRemark(this.id, strMessage, bAnonymous);
          this.$refs.ref4AddRemark.clearInputMessage();
        }
        else {
          //TODO
          let oRemark = {
            name: this.$store.getters.getUser.name,
            pic: this.$store.getters.getUser.pic,
            anonymous: bAnonymous,
            time: Date.now(),
            msg: strMessage,
          };
          this.$http.post(this.baseUrl + "/remark/add/" + this.id, oRemark).then((resp) => {
            let oRemarkRes = resp.body;
            this.remarks.unshift(oRemarkRes);
            this.$refs.ref4AddRemark.clearInputMessage();
          });
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      store.commit("setCardId", to.params.id);//在watch中观察id的变化，然后再setCardId，更简单些
      next();
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .panel-remark-custom {
    margin-bottom: 0px;

    .input-style {
      resize: none;
      overflow: hidden;
    }

    .footer-custom {
      height: 50px;

      .checkbox-custom {
        float: right;
        margin-top: 5px;
        margin-right: 20px;
        margin-bottom: 0px;
      }

      .btn-custom {
        float: right;
      }
    }
  }
</style>
