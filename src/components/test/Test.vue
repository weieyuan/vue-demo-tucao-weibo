<template>
  <div>
    <div>
      <picker set="messenger" :per-line="9" :sheetSize="20" :emojiSize="24" :include="['people']"
              @click="onClickIcon"></picker>
    </div>
    <div style="position: relative">
      <button @click="showEmoji">showEmoji</button>
      <c-emoji ref="ref4Emoji"></c-emoji>
    </div>
    <div>
      <emoji emoji="1f600" :size="32" set="messenger"></emoji>
    </div>
    <parent></parent>
    <emoji-item emojiObj="grinning"></emoji-item>
    <display-info-with-emoji :msg="msg"></display-info-with-emoji>
  </div>
</template>

<script>
  import {Picker, Emoji} from "emoji-mart-vue"
  import CEmoji from "@/widget/emoji/CEmoji"
  import {EmojiItem, DisplayInfoWithEmoji} from "@/widget/emoji"
  import Parent from "./Parent"
  import {fui, a} from "./A.js"

  export default {
    components: {
      Picker,
      Emoji,
      CEmoji,
      EmojiItem,
      DisplayInfoWithEmoji,
      Parent
    },
    data: function () {
      return {
        emojis: [],
        bShowEmoji: false,
        msg: "我们是ZHEGESHIDAI的[:grinning:][:smiley:]花朵和树苗[:smile:]sssss"
      }
    },
    created() {
      console.log(fui);
      console.log(a);
    },
    methods: {
      onClickIcon(emoji, event) {
        let index = this.emojis.indexOf(emoji);
        if (index == -1) {
          this.emojis.push(emoji);
        }
        console.log(this.emojis);
      },
      showEmoji(event) {
        this.$refs.ref4Emoji.show(event.offsetX, event.offsetY);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
