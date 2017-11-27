<template>
  <div class="panel panel-default panel-remark-custom">
    <div class="panel-body">
      <textarea class="form-control input-style" rows="2" v-model="inputMessage"></textarea>
    </div>
    <div class="panel-footer footer-custom">
      <span class="emoji-btn">
        <emoji-item :emojiObj="smileEmoji" @onClickEmoji="onClickEmojiBtn"></emoji-item>
      </span>
      <c-emoji ref="ref4CEmoji" @onClickEmoji="onClickChooseEmoji"></c-emoji>
      <div class="btn-custom">
        <a type="button" class="btn btn-success btn-sm" :class="{disabled: inputMessage === ''}"
           @click.stop="onClickBtn">{{btnName}}</a>
      </div>
      <div class="checkbox checkbox-custom">
        <label>
          <input type="checkbox" value="" v-model="checked">
          匿名
        </label>
      </div>

    </div>
  </div>
</template>

<script>
  import {smileEmoji, EmojiItem, CEmoji, convertEmoji2Str} from "@/widget/emoji"

  export default {
    components: {
      EmojiItem,
      CEmoji
    },
    name: "UserInputPanel",
    props: {
      defaultInputMessage: {
        type: String,
        default: ""
      },
      btnName: String
    },
    data: function () {
      return {
        smileEmoji: smileEmoji,
        inputMessage: this.defaultInputMessage,
        checked: true
      };
    },
    methods: {
      onClickBtn() {
        this.$emit("onClickBtn", this.inputMessage, this.checked);
      },
      clearInputMessage() {
        this.inputMessage = "";
      },
      onClickEmojiBtn(emoji, event) {
        this.$refs.ref4CEmoji.show(event.offsetX + 24, event.offsetY + 24);
      },
      onClickChooseEmoji(emoji){
        let str = convertEmoji2Str(emoji);
        this.inputMessage += str;
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
      position: relative;
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
      .emoji-btn {

      }
    }
  }
</style>
