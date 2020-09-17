<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <champions />
        <dragons />
      </div>
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
</style>
