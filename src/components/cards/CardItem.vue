<template>

  <div class="panel panel-default panel-custom">
    <div class="media remark">
      <div class="media-left">
        <img class="media-object person-icon" :src="headPic" alt="...">
      </div>
      <div class="media-body">
        <h4 class="remark-person-name">匿***名</h4>
        <p class="media-heading">0月21日10:00，十九大新闻中心第三场记者招待会，邀请中共中央统战部常务副部长张裔炯、副部长冉万祥，中共中央对外联络部副部长郭业洲介绍有关情况，并回答记者提问。</p>
        <div class="remark-foot">
          <div class="remark-item-left"><span class="glyphicon glyphicon-thumbs-time"></span> 2017年10月31号 09:43</div>
          <div class="remark-item-right"><span class="glyphicon glyphicon-thumbs-up"></span> (100)</div>
          <div class="remark-item-right split"><div class="split-line"></div></div>
          <div class="remark-item-right"><span class="glyphicon glyphicon-comment"></span> (201)</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "CardItem",
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    data: function(){
      var cardInner = this.card;
      return {
        cardInner
      }
    },
    computed: {
      headPic(){
        if(this.cardInner.pic){
          return this.cardInner.pic;
        }
        else{
          return "static/images/person_default.png";
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .panel-custom{
    background-color: #FFFFFF;
    padding: 10px;
  .remark{
    min-height: 50px;
  .person-icon{
    width: 48px;
    height: 48px;
  }
  .remark-person-name{
    color: #006a92;
  }
  p{
    font-family: Georgia,"Xin Gothic","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;;
  }
  .remark-foot{
    width: 100%;
    height: 20px;
    color: #808080;
  .remark-item-left{
    float: left;
  }
  .remark-item-right{
    float: right;
  }
  .remark-item-right:hover{
    cursor:pointer;
    color: #eb7350;
  }
  .split{
    height: 100%;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-left: 10px;
    margin-right: 10px;
  .split-line{
    height: 100%;
    border-right: 1px #d5d5d5 solid;
  }
  }
  }
  }
  }

</style>
