<template>
  <section>
    <div class="datials-box">
      <user-details></user-details>
    </div>
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
    UserGallery,

  }
};
</script>


<style>
.datials-box{
    padding-top: 5%;
}


</style>

