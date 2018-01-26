import Vue from "vue"
import Vuex from "vuex"
import RemarkDetails from "./modules/remark_details"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clientId: ""
  },
  getters: {
    getClientId(state) {
      return state.clientId;
    }
  },
  mutations: {
    setClientId(state, strClientId) {
      state.clientId = strClientId;
    }
  },
  modules: {
    RemarkDetails
  }
})

export default store
