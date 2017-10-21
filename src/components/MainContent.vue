<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="panel panel-default panel-custom">
          <div class="media remark">
            <div class="media-left">
              <img class="media-object person-icon" src="static/images/person_default.png" alt="...">
            </div>
            <div class="media-body">
              <h4 class="remark-person-name">匿***名</h4>
              <p class="media-heading">0月21日10:00，十九大新闻中心第三场记者招待会，邀请中共中央统战部常务副部长张裔炯、副部长冉万祥，中共中央对外联络部副部长郭业洲介绍有关情况，并回答记者提问。</p>
              <div class="remark-foot"><span class="glyphicon glyphicon-thumbs-up active"></span> (100)</div>
            </div>
          </div>
        </div>

        <div class="panel panel-default panel-custom">
          <div class="media remark">
            <div class="media-left">
              <img class="media-object person-icon" src="static/images/person_default.png" alt="...">
            </div>
            <div class="media-body">
              <h4 class="remark-person-name">匿***名</h4>
              <p class="media-heading">“脱贫攻坚战取得决定性进展，六千多万贫困人口稳定脱贫，贫困发生率从百分之十点二下降到百分之四以下。”在习近平总书记代表十八届中央委员会向党的十九大所作的报告中，一份令中国振奋、令世界惊叹的扶贫成绩单，就这样闪亮登场了。</p>
            </div>
          </div>
        </div>

        <div class="panel panel-default panel-custom">
          <div class="media remark">
            <div class="media-left">
              <img class="media-object person-icon" src="static/images/person_default.png" alt="...">
            </div>
            <div class="media-body">
              <h4 class="remark-person-name">匿***名</h4>
              <p class="media-heading">到2020年，让贫困人口和贫困地区同全国一道进入全面小康社会，这是习近平总书记的承诺和期望。这份阶段性的成绩单是如此亮眼，这是五年来在习近平总书记带领下，全国人民共同努力奋斗的结果，是中国对世界减贫事业的重大贡献。</p>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-4">
        <div class="panel panel-default left-panel-custom">
          <h4 class="title">社区</h4>
          <div class="panel-body">
            QQ: 472967051
            <br>
            微信：DESTINA
          </div>
        </div>
      </div>
    </div>
    主页 laravel
  </div>
</template>

<script>
  export default {
    name: "MainContent",
    data: function(){
      return {};
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
        float: right;
      }
    }
  }
  .active:hover{
    cursor:pointer
  }

  .left-panel-custom{
    position: relative;
    background: #fff;
    padding: 21px 30px;
    .title{
      margin-top: 0;
      padding-bottom: 7px;
      border-bottom: 1px solid #ebebeb;
      margin-bottom: 21px;
      position: relative;
    }
    .title::after{
      content: "";
      width: 90px;
      height: 1px;
      background: #f4645f;
      position: absolute;
      left: 0;
      bottom: -1px;
    }
  }



</style>
