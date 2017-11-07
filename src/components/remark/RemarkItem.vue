<template>
  <div>
    <div class="media-left">
      <img class="media-object person-icon" :src="headPic" alt="...">
    </div>
    <div class="media-body">
      <p>
        <b class="remark-person-name">{{name}}</b>：{{remarkInner.remark}}
      </p>
      <div class="remark-foot">
        <div class="remark-item-left">
          <span class="glyphicon glyphicon-thumbs-time"></span> {{remarkInner.time | formatTime}}
        </div>
        <div class="remark-item-right" @click="onClickPraise">
          <span class="glyphicon glyphicon-thumbs-up"></span> ({{remarkInner.praiseNum}})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {cardConfig} from "@/config";
  import timeFormat from "@/components/common/time_format";

  export default {
    name: "RemarkItem",
    props: {
      remark: Object
    },
    mixins: [timeFormat],
    data: function () {
      return {
        remarkInner: this.remark
      };
    },
    computed: {
      headPic() {
        if (!this.remarkInner.anonymous) {
          return this.remarkInner.pic;
        }
        else {
          return cardConfig.DEFAULT_PIC_URL;
        }
      },
      name() {
        if (!this.remarkInner.anonymous) {
          return this.remarkInner.name;
        }
        else {
          return cardConfig.DEFAULT_NAME;
        }
      }
    },
    methods: {
      onClickPraise() {
        this.remarkInner.praiseNum += 1;
        if (this.debug) {
          console.log("onClickPraise");
        }
        else {
          //TODO:
        }
      },
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .person-icon {
    width: 48px;
    height: 48px;
  }

  .remark-person-name {
    color: #006a92;
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

</style>
