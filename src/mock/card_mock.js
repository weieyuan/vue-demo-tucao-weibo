const cards = [];
const remarks = {};

for(let i = 0; i < 10; i++){
  let card = {
    id: i,
    anonymous: true,
    pic: "",
    name: "",
    time: 1509526435275 + i * 1000,
    praiseNum: 100,
    remarkNum: 201,
    content: "小区外的回民烧烤无证无照营业，占道经营，随意排放油烟和污水，严重影响市景市容，白天晚上两台发电机隆隆地响，噪音污染严重影响了附加居民的休息。"
  };
  cards.push(card);

  let arrRemark = [];
  for(let j = 0; j < 10; j++){
    let oRemark = {
      id: j,
      anonymous: true,
      pic: "",
      name: "",
      time: 1509526435275 + j * 1000,
      remark: "素质真低，坚决抵制，无法无天，绝不姑息",
      replyNum: 102,
      praiseNum: 300
    };
    arrRemark.push(oRemark);
  }
  remarks[card.id] = arrRemark;
}

function getCardInfoById(strCardId){
  for(let i = 0, len = cards.length; i < len; i++){
    let oCard = cards[i];
      if(oCard.id == strCardId){
        return oCard;
      }
  }
};

function getRemarksById(strCardId){
  return remarks[strCardId];
};

function getReplysById(strCardId, strRemarkId){
  let arrReply = [];
  for(let i = 0; i < 30; i++){
    let oReply = {
      id: i,
      anonymous: true,
      pic: "",
      name: "",
      time: 1509526435275 + i * 1000,
      remark: "干的漂亮",
      praiseNum: 300
    };
    arrReply.push(oReply);
  }
  return arrReply;
};

function getNewMsgs(){
  for(let i = 0; i < 10; i++){
    let card = {
      id: cards.length,
      anonymous: true,
      pic: "",
      name: "",
      time: 1509526435275 + i * 1000,
      praiseNum: 100,
      remarkNum: 201,
      content: "新消息" + cards.length
    };
    cards.unshift(card);

    let arrRemark = [];
    for(let j = 0; j < 10; j++){
      let oRemark = {
        id: j,
        anonymous: true,
        pic: "",
        name: "",
        time: 1509526435275 + j * 1000,
        remark: "素质真低，坚决抵制，无法无天，绝不姑息",
        praiseNum: 300
      };
      arrRemark.push(oRemark);
    }
    remarks[card.id] = arrRemark;
  }
};

export {
  getCardInfoById,
  getRemarksById,
  getReplysById,
  getNewMsgs
};

export default cards;
