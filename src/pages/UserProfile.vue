<template>
  <section>
    
    <user-details></user-details>
    <user-gallery></user-gallery>
  </section>
</template>

<script>
import UserService from "../services/UserService";
import UserDetails from "../components/UserDetails";
import UserGallery from "../components/UserGallery";
export default {
  name: "myProfile",
  data() {
    return {
      user: null
    };
  },
  created() {
  
  },
  components: {
    UserDetails,
    UserGallery
  }
};
</script>


<style>

</style>

