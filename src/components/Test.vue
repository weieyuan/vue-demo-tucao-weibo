<template>
  <div>
    <div>
      <picker set="messenger" :per-line="9" :sheetSize="20" :emojiSize="24" :include="['people']"
      @click="onClickIcon"></picker>
    </div>
    <div>
      <c-emoji></c-emoji>
    </div>
    <div></div>
  </div>
</template>

<script>
  import {Picker, Emoji} from "emoji-mart-vue"
  import CEmoji from "@/widget/emoji/CEmoji"

  export default {
    components: {
      Picker,
      CEmoji
    },
    data: function () {
      return {
        emojis: []
      }
    },
    created(){
//      this.emojis.push("grinning");
//      this.emojis.push("smiley");
//      this.emojis.push("smile");
//      this.emojis.push("grin");
//      this.emojis.push(":bowtie:");
//      this.emojis.push(":smile:");
//      this.emojis.push(":laughing:");
//      this.emojis.push(":blush:");
//      this.emojis.push(":smiley:");
//      this.emojis.push(":relaxed:");
//      this.emojis.push(":blush:");
//      this.emojis.push(":blush:");
//      this.emojis.push(":blush:");
    },
    methods: {
      onClickIcon(emoji, event){
        let index = this.emojis.indexOf(emoji);
        if(index == -1){
          this.emojis.push(emoji);
        }
        console.log(this.emojis);
      }
    }
  }
</script>

<style>

</style>
