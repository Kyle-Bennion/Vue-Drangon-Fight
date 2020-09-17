<template>
  <div class="row">
    <h1>{{games.id}}</h1>
    <h1>{{hero.name}}</h1>
    <h1>{{villan.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "game",
  computed: {
    games() {
      return this.$store.state.activeGame;
    },
    hero() {
      return this.$store.dispatch("findChampion", game.champion);
    },
    villan() {
      return this.$store.dispatch("findDragon", game.dragon);
    },
  },
};
</script>

<style>
</style>