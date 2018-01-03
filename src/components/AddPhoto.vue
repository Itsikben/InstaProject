<template>
  <section>

    <div class="add-img">
   <!-- <a href="#" id="upload_widget_opener" @click="add">add photo</a> -->
    <div class="control">
      <h1>add new post</h1>
    <input class="input" type="text" placeholder="Title" v-model="title">
    <input class="input" type="text" placeholder="add text" v-model="text">
    <input class="input" type="text" placeholder="add img url" v-model="imgUrl">
   
    <a class="button is-dark" @click="sendPost">post!</a>
    <router-link :to="submitUrl"></router-link>
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
        text:'',
        imgUrl:'',
        title: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    submitUrl() {
      return '/UserProfile/' + this.user.userId
    }
  },
  methods: {
      sendPost() {
       var post =   {
        "title": this.title,
        "userId": this.user._id,
        "username": this.user.username,
        "img":this.imgUrl,
        "geolocation": '',
        "createdAt": Date.now(),
        "likes": [],
          "comments": [],
          "text": this.text
        }
        this.$store.dispatch(SAVE_POST, {post});
      },

      setRundomGeolocation(){
        var lat = Math.rundom()+31;
        var lng = Math.rundom()*2+32;
      }
    //   getMyLocation() {
    // // return new Promise((resolve, reject) => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(({ coords }) => {
    //             resolve({
    //                 lat: coords.latitude,
    //                 lng: coords.longitude
    //             })
    //         })
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
  margin: auto;
}
.control h1 {
  font-family: 'Lucida Sans';
  text-align: center;
  background-color: chocolate;
}
.control a{
  text-align: center;
}
</style>

