<template>
  <div class="col-6">
    <div class="row">
      <dragon v-for="dragon in dragons" :key="dragon.id" :dragonData="dragon" />
    </div>
  </div>
</template>

<script>
import dragon from "../components/DragonDetails.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllDragons");
  },
  components: {
    dragon,
  },
  computed: {
    dragons() {
      return this.$store.state.dragons;
    },
  },
};
</script>

<style>
</style>