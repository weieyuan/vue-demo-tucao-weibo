<template>
  <div>
    <div>
      <picker set="messenger" :per-line="9" :sheetSize="20" :emojiSize="24" :include="['people']"
      @click="onClickIcon"></picker>
    </div>
    <div>
      <emoji v-for="emoji in emojis" :emoji="emoji" :size="32" set="messenger"></emoji>
    </div>
  </div>
</template>

<script>
  import {Picker, Emoji} from "emoji-mart-vue"

  export default {
    components: {
      Picker,
      Emoji
    },
    data: function () {
      return {
        emojis: []
      }
    },
    created(){
      this.emojis.push("grinning");
      this.emojis.push("smiley");
      this.emojis.push("smile");
      this.emojis.push("grin");
    },
    methods: {
      onClickIcon(){

      }
    }
  }
</script>

<style>

</style>
