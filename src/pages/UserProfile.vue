<template>
  <section>
    <h1>my profile</h1>
    <user-details></user-details>
    <user-gallery></user-gallery>
  </section>
</template>

<script>
import UserDetails from '../components/UserDetails'
import UserGallery from '../components/UserGallery'
export default {
  name: "myProfile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    UserDetails,
    UserGallery
  }
};
</script>

