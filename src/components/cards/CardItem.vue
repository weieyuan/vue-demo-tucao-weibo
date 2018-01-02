<template>
  <div class="panel panel-default panel-custom">
    <info-display-item :info="cardInfo" @onClickRightBtn="onClickRightBtn"></info-display-item>
  </div>
</template>

<script>
  import InfoDisplayItem from "@/components/common/InfoDisplayItem"

  export default {
    name: "CardItem",
    components: {
      InfoDisplayItem
    },
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    data: function () {
      return {
        cardInner: this.card
      }
    },
    methods: {
      onClickPraise() {
        this.cardInner.praiseNum += 1;
        if (this.debug) {
          console.log("onClickPraise");
        }
        else {
          //TODO:post后台
          let promise = new Promise((resolve, reject) => {

          }).then((oRes) => {

          }, (oRes) => {

          });
        }
      },
      onClickRemark() {
        this.$emit("onClickRemark", this.cardInner);
      },
      onClickRightBtn(oRigthBtn) {
        if (oRigthBtn.key == "praise") {
          this.onClickPraise();
        }
        else if (oRigthBtn.key == "remark") {
          this.onClickRemark();
        }
      }
    },
    computed: {
      cardInfo() {
        let oCardInfo = {
          pic: "",
          name: "",
          time: "",
          msg: "",
          rightBtns: []
        };
        Object.assign(oCardInfo, this.cardInner);
        oCardInfo.rightBtns.push({
          key: "praise",
          label: this.cardInner.praiseNum,
          icon: "glyphicon-thumbs-up"
        });
        oCardInfo.rightBtns.push({
          key: "remark",
          label: this.cardInner.remarkNum,
          icon: "glyphicon-comment"
        });
        return oCardInfo;
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .panel-custom {
    background-color: #FFFFFF;
    padding: 10px;
  }

</style>
