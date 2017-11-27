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
  import {getCardInfoById, getRemarksById} from "@/mock/card_mock"
  import UserInputPanel from "@/components/common/UserInputPanel"

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
        }
      },
      getCardRemarks() {
        if (this.debug) {
          console.log("RemarkDetails: " + this.id);
          this.remarks = getRemarksById(this.id);
        }
        else {
          //TODO
        }
      },
      addRemark(strMessage, bAnonymous){
        if(this.debug){
          let oRemark = {
            id: this.remarks.length,
            anonymous: true,
            pic: "",
            name: "",
            time: 1509526435275 + 10000,
            msg: strMessage,
            replyNum: 30,
            praiseNum: 300
          };
          this.remarks.unshift(oRemark);
          this.$refs.ref4AddRemark.clearInputMessage();
        }
        else{
          //TODO:
        }
      }
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
