<template>
  <p>Hello From Champions</p>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getAllChampions");
  },
};
</script>

<style>
</style>