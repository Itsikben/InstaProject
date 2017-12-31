<template>
  <section>

    <div class="add-img">
   <!-- <a href="#" id="upload_widget_opener" @click="add">add photo</a> -->
    <div class="control">
    <input class="input" type="text" placeholder="add coment" v-model="comment">
    <img :src="uploadedPhoto">
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
        comment:''

    }
  },
  computed: {
    userId() {
      return this.$store.state.user.user._id
    },

  },
  methods: {
      // add(){  
      // cloudinary.openUploadWidget({ cloud_name: 'dxdmd1v1z', upload_preset: 'xy7rt9uw'}, 
      // (error, result) => { 
      //   console.log( result[0].secure_url)
      //   this.uploadedPhoto = result[0].secure_url;
      //   });
      // },
      sendPost() {
        this.$store.dispatch(SAVE_POST, {comment: this.comment, user: this.userId});
        
      }

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
  border:solid cadetblue; 
}
</style>

