<template>
  <div class="col-6">
    <div class="row">
      <champion v-for="champion in champions" :key="champion.id" :championData="champion" />
    </div>
  </div>
</template>

<script>
import champion from "../components/ChampionDetails.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllChampions");
  },
  components: {
    champion,
  },
  computed: {
    champions() {
      return this.$store.state.champions;
    },
  },
};
</script>

<style>
</style>