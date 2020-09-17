<template>
  <div class="col-6 p-2">
    <div class="card" @click="setActiveChampion">
      <img :src="championData.imgUrl" alt />
      <h1>{{championData.name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "champion",
  props: { championData: { type: Object, required: true } },
  data() {
    return { newChampion: {} };
  },
  methods: {
    setActiveChampion() {
      this.$store.dispatch("setActiveChampion", this.newChampion);
      console.log("details");
    },
  },
};
</script>

<style scoped>
img {
  max-width: auto;
  max-height: 30vh;
}
</style>