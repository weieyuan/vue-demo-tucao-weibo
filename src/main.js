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

Vue.config.productionTip = false

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true


Vue.mixin({
  data() {
    return {
      debug: globalConfig.debug,
      baseUrl: globalConfig.baseUrl
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
