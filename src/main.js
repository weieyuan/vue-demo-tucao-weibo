// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {globalConfig} from "./config"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "@/css/app.less"
import VueResource from "vue-resource"
import store from "@/store"
import Stomp from "@/widget/stomp"

Vue.config.productionTip = false

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true

//stomp
Vue.use(Stomp, {endPoint: globalConfig.endPoint})

Vue.mixin({
  data() {
    return {
      debug: globalConfig.debug,
      baseUrl: globalConfig.baseUrl
    }
  }
})

//初始化clientId，用于唯一标识一个客户端
store.commit("setClientId", Math.random().toString(36).slice(2))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
