<template>
  <div class="col-12">
    <div class="row">
      <div class="col-5">
        <div class="card p-1">
          <img :src="games.champion.imgUrl" alt />
          <h1>{{games.champion.name}}</h1>
          <h6>{{games.champion.health}}</h6>
        </div>
      </div>
      <div class="col-5">
        <div class="card p-1">
          <img :src="games.dragon.imgUrl" alt />
          <h1>{{games.dragon.name}}</h1>
          <h6>{{games.dragon.health}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "game",
  computed: {
    games() {
      return this.$store.state.activeGame;
    },
  },
};
</script>

<style scoped>
img {
  max-height: 30vh;
}
</style>