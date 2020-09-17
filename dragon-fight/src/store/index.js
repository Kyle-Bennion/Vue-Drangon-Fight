import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../Services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    activeChampion: {},
    activeDragon: {},
    activeGame: {}
  },
  mutations: {
    setChampions(state, champions) {
      state.champions = champions
    },
    setDragons(state, dragons) {
      state.dragons = dragons
    },
    setActiveDragons(state, dragons) {
      state.activeDragon = dragons
    },
    setActiveChampion(state, champions) {
      state.activeChampion = champions
      console.log(state.activeChampion);
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
    },
    setActiveChampion({ commit }, champion) {
      commit("setActiveChampion", champion)
    }
  },
  modules: {
  }
})
