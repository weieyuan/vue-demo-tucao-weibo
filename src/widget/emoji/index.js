import {smileEmoji, emojis} from "./emoji_icon"
import EmojiItem from "./EmojiItem"
import CEmoji from "./CEmoji"
import DisplayInfoWithEmoji from "./DisplayInfoWithEmoji"

function convertEmoji2Str(emoji) {
  let id = emoji.id;
  return "[:" + id + ":]";
};

function getEmojiId(strWrapperId){
  let strId = strWrapperId.replace("[:", "").replace(":]", "");
  return strId;
};

function _getEmoji(strWrapperId) {
  let strId = strWrapperId.replace("[:", "").replace(":]", "");
  let oEmojiEle = `<emoji-item emojiObj="${strId}"></emoji-item>`; //反引号中可以使用模板字符串${}
  return oEmojiEle;
};

function convertStr2Emoji(str) {
  let regExp = /\[:[a-zA-Z-_]+:\]/g;
  let arrRegExp = [];
  let temp = [];
  while ((temp = regExp.exec(str)) != null) {
    arrRegExp.push(temp);
  }
  let arrRes = [];
  let iStart = 0;
  let iEnd = str.length;
  arrRegExp.forEach(function(oRes){
    iEnd = oRes["index"];
    if(iStart != iEnd){
      let oText = {
        t: 0,
        m: str.slice(iStart, iEnd)
      };
      arrRes.push(oText);
    }

    let oEmoji = {
      t: 1,
      m: getEmojiId(oRes[0])
    };
    arrRes.push(oEmoji);

    iStart = iEnd + oRes[0].length;
    iEnd = str.length;
  });
  if(iStart != iEnd){
    let oText = {
      t: 0,
      m: str.slice(iStart, iEnd)
    };
    arrRes.push(oText);
  }

  return arrRes;
};

export {
  smileEmoji,
  EmojiItem,
  CEmoji,
  convertEmoji2Str,
  convertStr2Emoji,
  DisplayInfoWithEmoji
};

