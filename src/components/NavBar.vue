<template>
<div>
    <h1>nav bar</h1>
      <router-link to="/">Home</router-link>
    <!-- <router-link to="/profile:id">Home</router-link> -->
      <router-link to="/UserProfile">UserProfile</router-link>
      <router-link to="/DesignImg">design img</router-link>

  </div>
</template>

<script>
export default {
  name: 'myProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>