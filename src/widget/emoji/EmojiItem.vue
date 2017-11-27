<template>
  <emoji :emoji="emojiObj" :size="size" :sheetSize="sheetSize"
         :set="set" :title="titleTip"
         :backgroundImageFn="backgroundImageFn"
         @click.native="onClickEmoji($event)"></emoji>
</template>

<script>
  import {Emoji} from "emoji-mart-vue"

  export default {
    name: "EmojiItem",
    components: {
      Emoji
    },
    props: {
      emojiObj: {
        type: [Object, String]
      },
      size: {
        type: Number,
        default: 24
      },
      sheetSize: {
        type: Number,
        default: 32
      },
      set: {
        type: String,
        default: "messenger"
      }
    },
    data() {
      return {};
    },
    computed: {
      titleTip() {
        if (typeof this.emojiObj == "object") {
          return this.emojiObj.name;
        }
        else {
          return "";
        }
      }
    },
    methods: {
      backgroundImageFn(set, sheetSize) {
        return "/static/images/emoji/emoji_" + sheetSize + ".png";
      },
      onClickEmoji(event) {
        this.$emit("onClickEmoji", this.emojiObj, event);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .emoji-mart-emoji {
    padding: 6px;
  }

  .emoji-mart-emoji:hover {
    background-color: #f4f4f4;
    border-radius: 100%;
    cursor: pointer;
  }
</style>
