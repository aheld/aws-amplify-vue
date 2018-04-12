import Vue from 'vue'
import Vuex from 'vuex'
import { API } from 'aws-amplify';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    autoApprove : true
  },
  mutations: {
    setParam(state, value) {
      //console.log("update autoApprove to " + value)
      state.autoApprove = (value == 'true')
    }
  }
})

export default store