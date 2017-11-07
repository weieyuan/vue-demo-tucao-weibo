<template>
  <div class="main-content">
    <div class="row">
      <div class="col-md-8">
        <div class="panel panel-info" :class="{suspension: suspened}" v-show="hasNewMsg" @click="onClickNewMsg">
          <div class="panel-heading new-info">
            <ins>有新的消息，点击查看</ins>
          </div>
        </div>
        <cards :cards="cards"
               @onClickRemark="onClickRemark"></cards>
      </div>
      <div class="col-md-4">
        <div class="panel panel-default left-panel-custom">
          <h4 class="title">社区</h4>
          <div class="panel-body">
            QQ: 472967051
            <br>
            微信：DESTINA
          </div>
        </div>
      </div>
    </div>
    主页 laravel
    <a class="anchor" v-show="showAnchor" href="#">
      <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
  </div>
</template>

<script>
  import debounce from "@/widget/debounce"
  import Cards from "@/components/cards/cards"
  import CardMock, {getNewMsgs} from "@/mock/card_mock"

  export default {
    components: {
      Cards
    },
    name: "MainContent",
    data: function () {
      return {
        //region
        suspened: false,
        hasNewMsg: true,
        //endregion
        //region cards
        cards: [],
        //endregion
        //region anchor
        showAnchor: false
        //endregion
      };
    },
    methods: {
      onMousewheel: debounce(function (oEvent) {
        if (window.scrollY >= 75) {
          this.suspened = true;
        }
        else {
          this.suspened = false;
        }
        if (window.scrollY >= 50) {
          this.showAnchor = true;
        }
        else {
          this.showAnchor = false;
        }
      }, 500),
      onClickNewMsg() {
        if (this.debug) {
          console.log("onClickNewMsg");
          getNewMsgs();
          this.hasNewMsg = false;
          setTimeout(() => {
            this.hasNewMsg = true;
          }, 60 * 1000);
          window.scrollTo(0, 0);
        }
        else {
          //TODO
        }
      },
      onClickRemark(oCard) {
        this.$router.push({
          name: "RemarkDetails",
          params: {
            id: oCard.id
          }
        });
      }
    },
    created() {
      window.addEventListener("scroll", this.onMousewheel)
    },
    mounted() {
      if (this.debug) {
        this.cards = CardMock;
      }
      else {

      }
    },
    destroyed() {
      window.removeEventListener("scroll", this.onMousewheel)
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../css/const.less";

  .main-content {
    .new-info {
      text-align: center;
      vertical-align: middle;
    }
    .new-info:hover {
      cursor: pointer;
    }
    .suspension {
      position: fixed;
      left: 33%;
      top: @BodyPaddingTopo + 10px;
      margin-left: auto;
      margin-right: auto;
    }

    .left-panel-custom {
      position: relative;
      background: #fff;
      padding: 21px 30px;
      .title {
        margin-top: 0;
        padding-bottom: 7px;
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 21px;
        position: relative;
      }
      .title::after {
        content: "";
        width: 90px;
        height: 1px;
        background: #f4645f;
        position: absolute;
        left: 0;
        bottom: -1px;
      }
    }

    .anchor {
      position: fixed;
      width: 30px;
      height: 30px;
      line-height: 30px;
      right: 10px;
      bottom: 10px;
      color: #FFFFFF;
      background-color: rgba(244, 100, 95, 0.6);
      text-align: center;
    }
    .anchor:hover {
      background-color: #F4645F;
    }
  }
</style>
