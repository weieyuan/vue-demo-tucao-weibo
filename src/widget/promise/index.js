Vue.http.post("", {})
  .then(function (response) {
    return Vue.http.post("", {})
  }, function () {
  })
  .then(function (response) {
    return Vue.http.post("", {})
  }, function () {
  })
  .then(function (response) {

  }, function () {

  });


var p1 = Vue.http("", {});
var p2 = Vue.http("", {});
var p3 = Vue.http("", {});
Promise.all([p1, p2, p3])
  .then(function (res1, res2, res3) {

  })
  .catch(function (res) {

  });
