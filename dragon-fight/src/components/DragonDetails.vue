<template>
  <div class="col-6 p-2" :id="dragonData.id" :class="{active: activeDragonCard==dragonData.id}">
    <div class="card" @click="setActiveDragon">
      <img :src="dragonData.imgUrl" alt />
      <h1>{{dragonData.name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "dragon",
  props: { dragonData: { type: Object, required: true } },
  data() {
    return { newDragon: {} };
  },
  methods: {
    setActiveDragon() {
      this.$store.dispatch("setActiveDragon", this.dragonData.id);
    },
  },
  computed: {
    activeDragonCard() {
      return this.$store.state.activeDragon;
    },
  },
};
</script>

<style scoped>
img {
  max-width: auto;
  max-height: 30vh;
}
.active {
  background-color: blue;
}
</style>