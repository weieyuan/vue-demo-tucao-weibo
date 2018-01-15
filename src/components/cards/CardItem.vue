<template>
  <div class="panel panel-default panel-custom">
    <info-display-item v-if="showCardInfo" :info="cardInfo" @onClickRightBtn="onClickRightBtn"></info-display-item>
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
    computed: {
      showCardInfo() {
        return this.card.id != undefined;
      },
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
    },
    methods: {
      onClickPraise() {
        if (this.debug) {
          this.cardInner.praiseNum += 1;
          console.log("onClickPraise");
        }
        else {
          //TODO
          this.$http.post(this.baseUrl + "/card/praise/" + this.cardInner.id).then((resp) => {
            this.cardInner.praiseNum += 1;
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
    watch: {
      card: function (oNewVal, oOldVal) {
        this.cardInner = oNewVal;
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
