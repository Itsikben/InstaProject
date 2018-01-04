<template>
  <section>
 <section class="hero">
  <div class="hero-body">
    <div class="container">
    </div>
  </div>
</section>

<div class="title"><p> gallery</p></div>
     <div class="photos-holder">
      <div class="card animated fadeInRight" v-for="post in postToDisplay" :key='post.id' >
        {{post.title}} 
        
        <div class="card-image">
          <figure class="image is-4by3">
            <router-link :to="'/UserProfile/story/' + post._id">
            <img :src="`${post.img}`" alt="Placeholder image">
            </router-link>
            
          </figure>
        </div>

        <div class="content">
          {{postToDisplay.postText}}
          <br>
        </div>
      </div></router-link>
    </div>
  </section>
</template>

<script>
import { LOAD_POSTS } from "../store/modules/postModule";
import postService from "../services/PostService";
import swal from 'sweetalert';
export default {
  name: "UserGallery",
  data() {
    return {
      user: null
      
    };
  },
  created() {
     console.log('galery')
    var userId = this.$route.params.userId
    this.$store
      .dispatch(LOAD_POSTS, {userId})
      
  },
  computed:{
    postToDisplay() {
     return this.$store.state.post.posts
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     var userId = this.$route.params.userId;
  //     this.$store
  //       .dispatch(LOAD_POSTS, userId)
  //       .then(posts => console.log("posts:", posts))
  //       .catch(err => {
  //         this.$router.push("/");
  //       });
  //   }
  // }
  // computed: {
  //   postToDisplay() {
  //       return this.$store.actions.postToDisplay
  //       },
  // },
  // methods:{
  //   getPosts() {
  //     this.$store.dispatch(LOAD_POSTS,userId)
  //   } this.postToDisplay = posts
  // }
};
</script>

<style>
.photos-holder {
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  /* border: 1px solid rgb(158, 196, 211);
  border-radius: 5px; */
  margin-bottom: 5%;
}
.title{
  font-family: "Indie Flower", cursive;
  font-size:2em;
  font-weight: 1200;
  color: #003569;
  border-bottom: 1px solid gray;
  max-width: 80%;
  margin: auto;
  margin-bottom: 3%;
}
.card {
  max-width: 300px;
  min-width: 250px;
  max-height: 100%;
  margin: 5px;
  border-radius: 25px
}
/* .head{
  border-bottom: 1px solid gray;
  max-width: 80%;
  margin: auto;
  margin-bottom: 3%;
} */
</style>


