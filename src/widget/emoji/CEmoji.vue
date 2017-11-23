<template>
  <div class="emoji-container" v-show="bShow"
       v-bind:style="{width: containerWidth, top: top, left: left}">
    <div class="title">
      <span class="title-content glyphicon glyphicon-remove"
            @click="onClickClose"></span>
    </div>
    <div class="content">
      <template v-for="group in emojiGroups">
        <li>
        <span class="emoji-item" v-for="emojiObj in group">
          <emoji :emoji="emojiObj" :size="24" :sheetSize="32"
                 :set="set" :title="emojiObj.name"
                 :backgroundImageFn="backgroundImageFn"
                 @click="onClickEmoji"></emoji>
        </span>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
  import {Emoji} from "emoji-mart-vue"
  import {emojis as emojiObjs} from "./emoji_icon"

  export default {
    name: "CEmoji",
    components: {
      Emoji
    },
    props: {
      perLine: {
        type: Number,
        default: 9
      },
      size: {
        type: Number,
        default: 32
      },
      set: {
        type: String,
        default: "messenger"
      }
    },
    created() {
      let groupNum = Math.ceil(emojiObjs.length / this.perLine);
      for (let i = 0; i < groupNum; i++) {
        let groups = emojiObjs.slice(i * this.perLine, (i + 1) * this.perLine);
        this.emojiGroups[i] = groups;
      }
    },
    data() {
      return {
        emojiGroups: [],
        bShow: false,
        left: "0px",
        top: "0px"
      }
    },
    computed: {
      containerWidth() {
        return 36 * this.perLine + 46 + "px";
      }
    },
    methods: {
      onClickEmoji(emoji, event) {
        this.$emit("onClickEmoji", emoji);
        this.onClickClose();
      },
      backgroundImageFn(set, sheetSize) {
        return "/static/images/emoji/emoji_" + sheetSize + ".png";
      },
      show(iLeft = 0, iTop = 0) {
        this.bShow = true;
        this.left = iLeft + "px";
        this.top = iTop + "px";
      },
      onClickClose() {
        this.bShow = false;
      }
    }
  };

</script>

<style scoped lang="less" type="text/less">
  .emoji-container {
    position: absolute;
    background-color: #FFFFFF;
    border: 1px solid #d5d5d5;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    .title {
      width: 100%;
      height: 30px;
      background-color: #f5f5f5;
      padding: 5px 10px;
      .title-content {
        float: right;
        color: #696e78;
      }
      .title-content:hover {
        cursor: pointer;
      }
    }
    .content {
      height: 320px;
      overflow: auto;
      padding: 10px;
    }
    li {
      list-style-type: none;
      .emoji-mart-emoji {
        padding: 6px;
      }
      .emoji-mart-emoji:hover {
        background-color: #f4f4f4;
        border-radius: 100%;
        cursor: pointer;
      }
    }
  }

</style>
