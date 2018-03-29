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
    <button @click="onClickTestPromise">onClickTestPromise</button>
    <div>
      <p>测试生命周期函数的执行</p>
      <button @click="changeData">changeData</button>
      <life-circle-test :items="items"></life-circle-test>
    </div>
    <div>
      <mount-test></mount-test>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import {Picker, Emoji} from "emoji-mart-vue"
  import CEmoji from "@/widget/emoji/CEmoji"
  import {EmojiItem, DisplayInfoWithEmoji} from "@/widget/emoji"
  import Parent from "./Parent"
  import {fui, a} from "./A.js"
  import LifeCircleTest from "./LifeCircleTest"
  import MountTest from "./MountTest"

  export default {
    components: {
      Picker,
      Emoji,
      CEmoji,
      EmojiItem,
      DisplayInfoWithEmoji,
      Parent,
      LifeCircleTest,
      MountTest
    },
    data: function () {
      return {
        emojis: [],
        bShowEmoji: false,
        msg: "我们是ZHEGESHIDAI的[:grinning:][:smiley:]花朵和树苗[:smile:]sssss",
        items: [
          {
            msg: "A"
          },
          {
            msg: "B"
          },
          {
            msg: "C"
          }
        ],
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
      },
      onClickTestPromise() {
        Vue.http.post("/promise/1")
          .then(function (response) {
            console.log(response);
            return Vue.http.post("/promise/2")
          }, function () {
          })
          .then(function (response) {
            console.log(response);
            return Vue.http.post("/promise/3")
          }, function () {

          })
          .then(function (response) {
            console.log(response);
          }, function () {

          });
      },
      changeData() {
        this.items = [
          {
            msg: "A1"
          },
          {
            msg: "B1"
          },
          {
            msg: "C1"
          }
        ];
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
