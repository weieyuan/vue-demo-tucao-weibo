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
            <emoji-item :emojiObj="emojiObj" @onClickEmoji="onClickEmoji"></emoji-item>
          </span>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
  import {emojis as emojiObjs} from "./emoji_icon"
  import EmojiItem from "./EmojiItem"

  export default {
    name: "CEmoji",
    components: {
      EmojiItem
    },
    props: {
      perLine: {
        type: Number,
        default: 9
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
    z-index: 500;
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
    }
  }

</style>
