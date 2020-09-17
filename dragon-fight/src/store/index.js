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
      console.log(state.activeDragon)
    },
    setActiveChampion(state, champions) {
      state.activeChampion = champions
      console.log(state.activeChampion);
    },
    startFight(state, game) {
      state.activeGame = game.data
      console.log(game);
    },
    findDragon(state, dragon) {
      let res = state.dragons.filter(d => d.id == dragon)
      return res[0]

    },
    findChampion(state, champion) {
      return state.champions.filter(c => c.id == champion)
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
    async startFight({ commit }) {
      let res = await api.post("/games", { dragon: this.state.activeDragon, champion: this.state.activeChampion })
      let data = "/games/" + res.data.id
      let game = await api.get(data)
      commit("startFight", game)
      console.log(game)
    },
    setActiveChampion({ commit }, champion) {
      commit("setActiveChampion", champion)
      console.log(champion);
    },
    setActiveDragon({ commit }, dragon) {
      commit("setActiveDragons", dragon)
    },
    findChampion({ commit }, id) {
      commit("findChampion", id)
    },
    findDragon({ commit }, id) {
      commit("findDragon", id)
    }
  },
  modules: {
  }
})
