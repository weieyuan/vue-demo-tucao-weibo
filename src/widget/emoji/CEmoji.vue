<template>
  <div>
    <template v-for="group in emojiGroups">
      <li>
        <span class="emoji-item" v-for="emojiObj in group">
          <emoji :emoji="emojiObj" :size="32" :set="set" :title="emojiObj.name"
                 @click="onClickEmoji"></emoji>
        </span>
      </li>
    </template>
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
        emojis: []
      }
    },
    methods: {
      onClickEmoji(emoji, event){

      },
      backgroundImageFn(set, sheetSize){

      }
    }
  };

</script>

<style scoped lang="less" type="text/less">
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

</style>
