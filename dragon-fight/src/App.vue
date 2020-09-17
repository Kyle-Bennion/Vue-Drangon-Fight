<template>
  <div id="app">
    <div class="container-fluid">
      <a name id="fight" class="btn btn-primary" role="button" @click="startFight">Fight</a>
      <div class="row" :class="{start: game.id}">
        <champions />
        <dragons />
      </div>
      <div class="row" :class="{start: !game.id}"></div>
    </div>
  </div>
</template>

<script>
import champions from "./Pages/Champions.vue";
import dragons from "./Pages/Dragons.vue";
export default {
  name: "App",
  components: {
    champions,
    dragons,
  },
  methods: {
    startFight() {
      this.$store.dispatch("startFight");
    },
  },
  computed: {
    game() {
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
