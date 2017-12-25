<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/UserProfile">UserProfile</router-link>
      <router-link to="/DesignImg">DesignImg</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  height: 30px;
  border-bottom: 1px solid #e6e6e6;
}
nav *{
  margin: 0 5px;
}
</style>
