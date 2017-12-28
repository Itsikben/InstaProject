<template>
  <section>

    <div class="add-img">
   <a href="#" id="upload_widget_opener" @click="add">add photo</a>
    <div class="control">
    <input class="input" type="text" placeholder="add coment" v-bind="newPost.comment">
    <img :src="newPost.uploadedPhoto">
    <a class="button is-dark" @click="sendPost">post!</a>
  </div>
  
  </div>
  </section>
</template>

<script>

// var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
import UserService from "../services/UserService";
export default {
  name: "AddPhoto",
  data() {
    return {
      newPost: {
        uploadedPhoto:'',
        comment:''
      }
      
      
    }
  },
  computed: {
    //  photoUrl() {
    //   // console.log(this.uploadedPhoto)
    //   return this.uploadedPhoto
    //  }
  },
  methods: {
      add(){  
      cloudinary.openUploadWidget({ cloud_name: 'dxdmd1v1z', upload_preset: 'xy7rt9uw'}, 
      (error, result) => { 
        console.log( result[0].secure_url)
        this.uploadedPhoto = result[0].secure_url;
        });
      },
      sendPost() {
        this.$store.dispatch("addPost", { newPost});
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
