<template>
  <div class="col-6 p-2">
    <div class="card">
      <img :src="dragonData.imgUrl" alt />
      <h1>{{dragonData.name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "dragon",
  props: { dragonData: { type: Object, required: true } },
};
</script>

<style scoped>
img {
  max-width: auto;
  max-height: 30vh;
}
</style>