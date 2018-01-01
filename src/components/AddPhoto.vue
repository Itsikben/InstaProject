<template>
  <section>

    <div class="add-img">
   <!-- <a href="#" id="upload_widget_opener" @click="add">add photo</a> -->
    <div class="control">
    <input class="input" type="text" placeholder="add coment" v-model="comment">
    <input class="input" type="text" placeholder="add img url" v-model="img">
   
    <a class="button is-dark" @click="sendPost">post!</a>
    <router-link to="/UserProfile/:5a451f41798f9438a4172044"></router-link>
  </div>
  </div>
  </section>
</template>

<script>

// var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
import UserService from "../services/UserService";
import { SAVE_POST }  from '../store/modules/postModule'
export default {
  name: "AddPhoto",
  data() {
    return {
        uploadedPhoto:'',
        comment:'',
        img:''
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.user._id
    },
    user() {
      return this.$store.state.user.user.userName
    }

  },
  methods: {
  
      // sendPost() {
      //  var post =   {
      //   "userId": this.userId,
      //   "userName": this.user,
      //   "img":this.img,
      //   "geolocation": '',
      //   "created":Date.now(),
      //   "likes": [],
      //     "comments": [
      // {
      //     "username":'',
      //     "userId": '',
      //     "text": '',
      //     "createdAt":''
      // }
      //  }


}


  
};
</script>
<style>
.add-img img {
  max-width: 150px;
}
.add-img {
  max-width: 500px;
  max-height: 250pxs;
  border: solid cadetblue;
}
</style>

