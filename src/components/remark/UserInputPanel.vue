<template>
  <div class="panel panel-default panel-remark-custom">
    <div class="panel-body">
      <textarea class="form-control input-style" rows="2" v-model="inputMessage"></textarea>
    </div>
    <div class="panel-footer footer-custom">
      <div class="btn-custom">
        <a type="button" class="btn btn-success btn-sm" :class="{disabled: inputMessage === ''}"
           @click.stop="onClickBtn">{{btnName}}</a>
      </div>
      <div class="checkbox checkbox-custom">
        <label>
          <input type="checkbox" value="" v-model="checked">
          匿名
        </label>
      </div>

    </div>
  </div>
</template>

<script>
  import {Picker} from "emoji-mart-vue"

  export default {
    components: {
      Picker
    },
    name: "UserInputPanel",
    props: {
      defaultInputMessage: {
        type: String,
        default: ""
      },
      btnName: String
    },
    data: function(){
      return {
        inputMessage: this.defaultInputMessage,
        checked: true
      };
    },
    methods: {
      onClickBtn(){
        this.$emit("onClickBtn", this.inputMessage, this.checked);
      },
      clearInputMessage(){
        this.inputMessage = "";
      }
    }
  }

</script>

<style scoped lang="less" type="text/less">
  .panel-remark-custom {
    margin-bottom: 0px;

    .input-style {
      resize: none;
      overflow: hidden;
    }

    .footer-custom {
      height: 50px;

      .checkbox-custom {
        float: right;
        margin-top: 5px;
        margin-right: 20px;
        margin-bottom: 0px;
      }

      .btn-custom {
        float: right;
      }
    }
  }
</style>
