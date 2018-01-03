<template>
  <div id="app">
    <nav-bar></nav-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import postService from "./services/PostService";
import navBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    navBar
  }
};
</script>

<style>
.space-container {
  padding-top: 50px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
