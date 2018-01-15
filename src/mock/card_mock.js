const cards = [];
const remarks = {};
const replys = {};

for (let i = 0; i < 10; i++) {
  //一条微博
  let card = {
    id: i,
    anonymous: true,
    pic: "",
    name: "",
    time: 1509526435275 + i * 1000,
    praiseNum: 100, //点赞数
    remarkNum: 10, //评论数
    msg: "小区外的回民烧烤无证无照营业，占道经营，随意排放油烟和污水，严重影响市景市容，白天晚上两台发电机隆隆地响，噪音污染严重影响了附加居民的休息。"
  };
  cards.push(card);

  let arrRemark = [];
  for (let j = 0; j < 10; j++) {
    //一条评论
    let oRemark = {
      id: j,
      anonymous: true,
      pic: "",
      name: "",
      time: 1509526435275 + j * 1000,
      msg: "素质真低，坚决抵制，无法无天，绝不姑息",
      praiseNum: 300, //点赞数
      replyNum: 10 //回复数
    };
    arrRemark.push(oRemark);

    //回复
    let arrReply = [];
    for (let k = 0; k < 10; k++) {
      let oReply = {
        id: k,
        anonymous: true,
        pic: "",
        name: "",
        time: 1509526435275 + k * 1000,
        msg: "干的漂亮",
        praiseNum: 300 //点赞数
      };
      arrReply.push(oReply);
    }
    replys[i + "_" + j] = arrReply;
  }
  remarks[card.id] = arrRemark;
}

function addCard(strMsg, bAnonymous) {
  //一条微博
  let card = {
    id: cards.length,
    anonymous: true,
    pic: "",
    name: "",
    time: 1509526435275 + cards.length * 1000,
    praiseNum: 0, //点赞数
    remarkNum: 0, //评论数
    msg: strMsg
  };
  cards.unshift(card);

  //评论为空
  remarks[card.id] = [];
}

function getCardInfoById(strCardId) {
  for (let i = 0, len = cards.length; i < len; i++) {
    let oCard = cards[i];
    if (oCard.id == strCardId) {
      return oCard;
    }
  }
};

function getRemarksByCardId(strCardId) {
  return remarks[strCardId];
};

function addRemark(strCardId, strMsg, bAnonymous) {
  let arrRemark = remarks[strCardId];
  let oRemark = {
    id: arrRemark.length,
    anonymous: bAnonymous,
    pic: "",
    name: "",
    time: 1509526435275 + 10000,
    msg: strMsg,
    replyNum: 0,
    praiseNum: 0
  };
  arrRemark.unshift(oRemark);

  replys[strCardId + "_" + oRemark.id] = [];
};

function getReplysById(strCardId, strRemarkId) {
  return replys[strCardId + "_" + strRemarkId];
};

function addReply(strCardId, strRemarkId, strMsg, bAnonymous) {
  let arrReply = replys[strCardId + "_" + strRemarkId];
  let oReply = {
    id: arrReply.length,
    anonymous: bAnonymous,
    pic: "",
    name: "",
    time: 1509526435275 + arrReply.length * 1000,
    msg: strMsg,
    praiseNum: 0
  };
  arrReply.unshift(oReply);
}

function getNewMsgs() {
  for (let i = 0; i < 10; i++) {
    //一条微博
    let card = {
      id: cards.length,
      anonymous: true,
      pic: "",
      name: "",
      time: 1509526435275 + i * 1000,
      msg: "新消息" + cards.length,
      praiseNum: 100,
      remarkNum: 10
    };
    cards.unshift(card);

    let arrRemark = [];
    for (let j = 0; j < 10; j++) {
      //评论
      let oRemark = {
        id: j,
        anonymous: true,
        pic: "",
        name: "",
        time: 1509526435275 + j * 1000,
        msg: "素质真低，坚决抵制，无法无天，绝不姑息",
        praiseNum: 300,
        replyNum: 10
      };
      arrRemark.push(oRemark);

      //回复
      let arrReply = [];
      for (let k = 0; k < 10; k++) {
        let oReply = {
          id: k,
          anonymous: true,
          pic: "",
          name: "",
          time: 1509526435275 + k * 1000,
          msg: "干的漂亮",
          praiseNum: 300 //点赞数
        };
        arrReply.push(oReply);
      }
      replys[card.id + "_" + oRemark.id] = arrReply;
    }
    remarks[card.id] = arrRemark;
  }
};

export {
  getCardInfoById,
  getRemarksByCardId,
  getReplysById,
  getNewMsgs,
  addCard,
  addRemark,
  addReply
};

export default cards;
