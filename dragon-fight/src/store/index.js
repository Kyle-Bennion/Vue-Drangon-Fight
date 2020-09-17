import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../Services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: []
  },
  mutations: {
    setChampions(state, champions) {
      state.champions = champions
      console.log(state.champions);
    }
  },
  actions: {
    async getAllChampions({ commit }) {
      try {
        let res = await api.get("/champions")
        commit("setChampions", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
