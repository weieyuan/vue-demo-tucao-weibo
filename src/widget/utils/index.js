const utils = {};

utils.timeFormat = function (iTimeValue) {
  let oDate = new Date(iTimeValue);
  let year = oDate.getFullYear();
  let month = ("0" + oDate.getMonth() + 1).slice(-2);
  let date = ("0" + oDate.getDate()).slice(-2);
  let hour = ("0" + oDate.getHours()).slice(-2);
  let minutes = ("0" + oDate.getMinutes()).slice(-2);
  let second = ("0" + oDate.getSeconds()).slice(-2);

  return year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + second;
};

utils.insert4String = function (strSrc, index, strInsert) {
  return strSrc.slice(0, index) + strInsert + strSrc.slice(index);
};

export default utils;


