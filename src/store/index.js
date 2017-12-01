import Vue from "vue"
import Vuex from "vuex"
import RemarkDetails from "./modules/remark_details"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    RemarkDetails
  }
})

export default store
