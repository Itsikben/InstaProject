<template>
  <section>
    <h1>my profile</h1>
    <div v-if="user">
      {{user.id}}
      {{user.userName}}
    </div>
    <user-details></user-details>
    <user-gallery></user-gallery>
  </section>
</template>

<script>
import UserService from '../services/UserService'
import UserDetails from '../components/UserDetails'
import UserGallery from '../components/UserGallery'
export default {
  name: "myProfile",
  data() {
    return {
      user: null,
      msg: "Welcome to Your Vue.js App"
    };
  },
  created(){
    UserService.getUserById(0).then(u =>{
       this.user = u;
       console.log(this.user, u);
    });
  },
  components:{
    UserDetails,
    UserGallery
  }
};
</script>

