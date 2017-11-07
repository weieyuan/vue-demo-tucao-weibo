<template>
  <div class="panel panel-default panel-custom">
    <div class="media remark">
      <div class="media-left">
        <img class="media-object person-icon" :src="headPic" alt="...">
      </div>
      <div class="media-body">
        <h4 class="remark-person-name">{{name}}</h4>
        <p class="media-heading">{{cardInner.content}}</p>
        <div class="remark-foot">
          <div class="remark-item-left">
            <span class="glyphicon glyphicon-thumbs-time"></span> {{cardInner.time | formatTime}}
          </div>
          <div class="remark-item-right" @click="onClickPraise">
            <span class="glyphicon glyphicon-thumbs-up"></span> ({{cardInner.praiseNum}})
          </div>
          <div class="remark-item-right split">
            <div class="split-line"></div>
          </div>
          <div class="remark-item-right" @click="onClickRemark">
            <span class="glyphicon glyphicon-comment"></span> ({{cardInner.remarkNum}})
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {cardConfig} from "@/config";
  import timeFormat from "@/components/common/time_format";

  export default {
    name: "CardItem",
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    mixins: [timeFormat],
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
        }
      },
      onClickRemark() {
        this.$emit("onClickRemark", this.card);
      }
    },
    computed: {
      headPic() {
        if (!this.cardInner.anonymous) {
          return this.cardInner.pic;
        }
        else {
          return cardConfig.DEFAULT_PIC_URL;
        }
      },
      name() {
        if (!this.cardInner.anonymous) {
          return this.cardInner.name;
        }
        else {
          return cardConfig.DEFAULT_NAME;
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .panel-custom {
    background-color: #FFFFFF;
    padding: 10px;
    .remark {
      min-height: 50px;
      .person-icon {
        width: 48px;
        height: 48px;
      }
      .remark-person-name {
        color: #006a92;
      }
      p {
        font-family: Georgia, "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;;
      }
      .remark-foot {
        width: 100%;
        height: 20px;
        color: #808080;
        .remark-item-left {
          float: left;
        }
        .remark-item-right {
          float: right;
        }
        .remark-item-right:hover {
          cursor: pointer;
          color: #eb7350;
        }
        .split {
          height: 100%;
          padding-top: 3px;
          padding-bottom: 3px;
          margin-left: 10px;
          margin-right: 10px;
          .split-line {
            height: 100%;
            border-right: 1px #d5d5d5 solid;
          }
        }
      }
    }
  }

</style>
