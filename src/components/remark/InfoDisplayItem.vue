<template>
  <div>
    <div class="media-left">
      <img class="media-object person-icon" :src="headPic" alt="...">
    </div>
    <div class="media-body">
      <p>
        <b class="remark-person-name">{{name}}</b>：{{infoInner.msg}}
      </p>
      <div class="remark-foot">
        <div class="remark-item-left">
          <span class="glyphicon glyphicon-thumbs-time"></span> {{infoInner.time | formatTime}}
        </div>
        <template v-for="(rightBtn, index) in infoInner.rightBtns">
          <div class="remark-item-right" @click="onClickRightBtn(rightBtn)">
            <span class="glyphicon" :class="rightBtn.icon"></span> ({{rightBtn.label}})
          </div>
          <div v-if="index !== infoInner.rightBtns.length - 1" class="remark-item-right split">
            <div class="split-line"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import {cardConfig} from "@/config"
  import timeFormat from "@/components/common/time_format"

  export default {
    name: "InfoDisplayItem",
    mixins: [timeFormat],
    props: {
      info: {
        type: Object
      }
    },
    data: function () {
      return {
        infoInner: this.info
      }
    },
    computed: {
      headPic() {
        if (!this.infoInner.anonymous) {
          return this.infoInner.pic;
        }
        else {
          return cardConfig.DEFAULT_PIC_URL;
        }
      },
      name() {
        if (!this.infoInner.anonymous) {
          return this.infoInner.name;
        }
        else {
          return cardConfig.DEFAULT_NAME;
        }
      }
    },
    methods: {
      onClickRightBtn(oRightBtn){
        this.$emit("onClickRightBtn", oRightBtn, this.info);
      }
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
