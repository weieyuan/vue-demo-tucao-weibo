<template>
  <div>
    <card-item :card="card"></card-item>
    <div class="panel panel-default panel-remark-custom">
      <div class="panel-body">
        <textarea class="form-control input-style" rows="2" @keyup="onKeyup" v-model="inputRemark"></textarea>
      </div>
      <div class="panel-footer footer-custom">
        <div class="btn-custom">
          <a type="button" class="btn btn-success btn-sm" :class="{disabled: inputRemark === ''}"
             @click.stop="addRemark">评论</a>
        </div>
        <div class="checkbox checkbox-custom">
          <label>
            <input type="checkbox" value="" v-model="checked">
            匿名评论
          </label>
        </div>
      </div>
    </div>
    <remarks :remarks="remarks"></remarks>
  </div>
</template>

<script>
  import CardItem from "@/components/cards/CardItem"
  import Remarks from "@/components/remark/Remarks"
  import {getCardInfoById, getRemarksById} from "@/mock/card_mock"

  export default {
    components: {
      CardItem,
      Remarks
    },
    name: "RemarkDetails",
    props: {
      id: [String, Number]
    },
    data: function () {
      return {
        card: {},
        inputRemark: "",
        checked: true,
        btnStatus: "disabled",
        remarks: []
      };
    },
    created() {
      this.getCardInfo();
      this.getCardRemarks();
    },
    mounted() {
      console.log(this.$el);
    },
    computed: {},
    methods: {
      getCardInfo() {
        if (this.debug) {
          this.card = getCardInfoById(this.id);
        }
        else {
          //TODO
        }
      },
      getCardRemarks() {
        if (this.debug) {
          this.remarks = getRemarksById(this.id);
        }
        else {
          //TODO
        }
      },
      onKeyup(oEvent) {
//        let oTarget = oEvent.target;
//        oTarget.style.height = oTarget.scrollHeight + "px";
      },
      addRemark(){
        if(this.debug){
          let oRemark = {
            id: this.remarks.length,
            anonymous: this.checked,
            pic: "",
            name: "",
            time: 1509526435275 + 10000,
            remark: this.inputRemark,
            praiseNum: 0
          };
          this.remarks.unshift(oRemark);
          this.inputRemark = '';
        }
        else{
          //TODO:
        }
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
