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
import AddPhoto from "../components/AddPhoto";
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
    UserGallery,
    AddPhoto
  }
};
</script>


<style>

</style>

