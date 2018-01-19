import SockJs from "sockjs-client"
import Stomp from "stompjs"

let bConnected = false
let bFail = false

const Disconnect = function () {
  if (this.$stompClient && bConnected) {
    this.$stompClient.disconnect(() => {
      console.log("stomp disconnect from server");
    })
  }
}

let subscriberQueue = []
const Subscribe = function (strTopic, oCallback) {
  if (bFail) {
    throw "stomp connect to server failed"
  }
  if (bConnected) {
    this.$stompClient.subscribe(strTopic, oCallback)
  }
  else {
    subscriberQueue.push({
      topic: strTopic,
      callback: oCallback.bind(this)
    })
  }
}

const Send = function (...args) {
  if (this.$stompClient && bConnected) {
    if (args.length == 2) {
      this.$stompClient.send(args[0], {}, args[1])
    }
    else if (args.length == 3) {
      this.$stompClient.send(args[0], args[1], args[2])
    }
  }
}

const Init = function (Vue, options) {
  //init
  let m_Options = options || {}

  let socket = new SockJs(m_Options.endPoint)
  let stompClient = Stomp.over(socket)
  Vue.prototype.$stompClient = stompClient

  stompClient.connect({}, () => {
    bConnected = true
    console.log("success")
    if (subscriberQueue.length) {
      subscriberQueue.forEach((oSubscriber) => {
        stompClient.subscribe(oSubscriber.topic, oSubscriber.callback)
      })
      subscriberQueue = []
    }
  }, (error) => {
    bFail = true
    console.log("fail")
    console.error(error)
  })

  //disconnect
  Vue.prototype.$disconnect = Disconnect

  //subscribe
  Vue.prototype.$subscribe = Subscribe

  //send
  Vue.prototype.$send = Send
}

const install = function (Vue, options) {
  Init(Vue, options);
}

export default {install}
