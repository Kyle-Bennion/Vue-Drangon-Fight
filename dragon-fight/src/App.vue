<template>
  <div id="app">
    <div class="container-fluid">
      <a name id="fight" class="btn btn-primary" role="button" @click="startFight">Fight</a>
      <div class="row" :class="{start: games.id}">
        <champions />
        <dragons />
      </div>
      <div class="row" :class="{start: !games.id}">
        <game />
      </div>
    </div>
  </div>
</template>

<script>
import champions from "./Pages/Champions.vue";
import dragons from "./Pages/Dragons.vue";
import game from "./Pages/Game.vue";
export default {
  name: "App",
  components: {
    champions,
    dragons,
    game,
  },
  methods: {
    startFight() {
      this.$store.dispatch("startFight");
    },
  },
  computed: {
    games() {
      return this.$store.state.activeGame;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.start {
  display: none;
}
</style>
