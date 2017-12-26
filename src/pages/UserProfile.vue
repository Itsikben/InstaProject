<template>
  <section>
    <h1>my profile</h1>
    <div v-if="user">
        <div class="user-details">
           <img :src="profilePic">
          {{user.userName}}
          {{user.lastName}}
        </div>
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
      profilePic: 'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669030/hacotel_xzk6hc.jpg'
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


<style>

img {
    border-radius: 50%;
}

</style>

