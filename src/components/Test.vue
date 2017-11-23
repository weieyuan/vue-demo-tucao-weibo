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
    <div v-html="test"></div>
    <div>
      <emoji emoji="1f600" :size="32" set="messenger"></emoji>
    </div>
  </div>
</template>

<script>
  import {Picker, Emoji} from "emoji-mart-vue"
  import CEmoji from "@/widget/emoji/CEmoji"

  export default {
    components: {
      Picker,
      Emoji,
      CEmoji
    },
    data: function () {
      return {
        emojis: [],
        test: "&#x1F600",
        bShowEmoji: false
      }
    },
    created(){

    },
    methods: {
      onClickIcon(emoji, event){
        let index = this.emojis.indexOf(emoji);
        if(index == -1){
          this.emojis.push(emoji);
        }
        console.log(this.emojis);
      },
      showEmoji(event){
        console.log(event);
        this.$refs.ref4Emoji.show(event.offsetX, event.offsetY);
      }
    }
  }
</script>

<style>

</style>
