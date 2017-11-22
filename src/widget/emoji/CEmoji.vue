<template>
  <div>
    <template v-for="group in emojiGroups">
      <li>
        <span class="emoji-item" v-for="emojiId in group">
          <emoji :emoji="emojiId" :size="32" :set="set" :title="emojiId"
                 @click="onClickEmoji"></emoji>
        </span>
      </li>
    </template>
  </div>
</template>

<script>
  import {Emoji} from "emoji-mart-vue"
  import {emojiIcons} from "./emoji_icon"

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
      let groupNum = Math.ceil(emojiIcons.length / this.perLine);
      for (let i = 0; i < groupNum; i++) {
        let groups = emojiIcons.slice(i * this.perLine, (i + 1) * this.perLine);
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
        console.log(emoji);
        let index = this.emojis.indexOf(emoji);
        if(index == -1){
          this.emojis.push(emoji);
        }
        console.log(this.emojis);
        this.$http.post("/test/emoji", emoji).then(function(res){
          console.log();
        });
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
