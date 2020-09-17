import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../Services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: []
  },
  mutations: {
    setChampions(state, champions) {
      state.champions = champions
      console.log(state.champions);
    },
    setDragons(state, dragons) {
      state.dragons = dragons
      console.log(state.dragons);
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
    },
    async getAllDragons({ commit }) {
      try {
        let res = await api.get("/dragons")
        commit("setDragons", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
