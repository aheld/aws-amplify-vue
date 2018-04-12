import Vue from 'vue'
import Vuex from 'vuex'
import { API } from 'aws-amplify';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    autoApprove : true
  },
  mutations: {
<<<<<<< HEAD
    setParam(state, newValue) {
      const value = { response: true }
      API.get("gopuff-admin-backend", "/params").then(response => {
        console.log(response)
      });
      //const result = API.post('gopuff-admin-backend', '/params', newValue)
      //this.autoApprove = result
=======
    setParam(state, value) {
      //console.log("update autoApprove to " + value)
      state.autoApprove = (value == 'true')
>>>>>>> 8ac04aefabac9d58a4d17fd9ef1ae1ff48b88b37
    }
  }
})

export default store