<template>
  <div>
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
          <div class="remark-item-right split">
            <div class="split-line"></div>
          </div>
          <div class="remark-item-right" @click="onClickReply">
            <span class="glyphicon glyphicon-envelope"></span> ({{remarkInner.replyNum}})
          </div>
        </div>
      </div>
    </div>

    <div v-show="showReply">
      <div class="panel panel-default panel-remark-custom">
        <div class="panel-body">
          <textarea class="form-control input-style" rows="2"  v-model="inputReply"></textarea>
        </div>
        <div class="panel-footer footer-custom">
          <div class="btn-custom">
            <a type="button" class="btn btn-success btn-sm" :class="{disabled: inputReply === ''}"
               @click.stop="addReply">回复</a>
          </div>
          <div class="checkbox checkbox-custom">
            <label>
              <input type="checkbox" value="" v-model="checked">
              匿名评论
            </label>
          </div>
        </div>
      </div>
      <div class="list-group list-group-custom">
        <template v-for="reply in replys">
          <div class="list-group-item item-custom">
            <div>
              <div class="media-left">
                <img class="media-object person-icon" :src="replyHeadPic(reply)" alt="...">
              </div>
              <div class="media-body">
                <p>
                  <b class="remark-person-name">{{replyName(reply)}}</b>：{{reply.remark}}
                </p>
                <div class="remark-foot">
                  <div class="remark-item-left">
                    <span class="glyphicon glyphicon-thumbs-time"></span> {{reply.time | formatTime}}
                  </div>
                  <div class="remark-item-right" @click="onClickPraise">
                    <span class="glyphicon glyphicon-thumbs-up"></span> ({{reply.praiseNum}})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  import {cardConfig} from "@/config";
  import timeFormat from "@/components/common/time_format";
  import {getReplysById, addReply} from "@/mock/card_mock";

  export default {
    name: "RemarkItem",
    props: {
      remark: Object
    },
    mixins: [timeFormat],
    data: function () {
      return {
        remarkInner: this.remark,
        showReply: false,
        replys: [],
        inputReply: "",
        checked: true
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
      onClickReply() {
        this.showReply = !this.showReply;
        if (this.debug) {
          this.replys = getReplysById("", "");
        }
        else {
          //TODO:
        }
      },
      replyHeadPic(oReply) {
        if (!oReply.anonymous) {
          return oReply.pic;
        }
        else {
          return cardConfig.DEFAULT_PIC_URL;
        }
      },
      replyName(oReply) {
        if (!oReply.anonymous) {
          return oReply.name;
        }
        else {
          return cardConfig.DEFAULT_NAME;
        }
      },
      addReply(){
        this.remarkInner.replyNum += 1;
        if(this.debug){
          let oReply = {
            id: this.replys.length,
            anonymous: true,
            pic: "",
            name: "",
            time: 1509526435275 + this.replys.length * 1000,
            remark: this.inputReply,
            praiseNum: 300
          };
          this.replys.unshift(oReply);
          this.inputReply = "";
        }
        else{
          //TODO
        }
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

  .panel-remark-custom {
    margin-top: 10px;
    margin-left: 20px;

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

  .list-group-custom{
    margin-top: 20px;
    margin-left: 20px;

    .item-custom {
      background-color: #f7f7f7;
      border: none;
    }
  }

</style>
