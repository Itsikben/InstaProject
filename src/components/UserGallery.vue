<template>
  <section>
 <section class="hero">
  <div class="hero-body">
    <div class="container">
    </div>
  </div>
</section>
<div class="head"><p> gallery</p></div>
     <div class="photos-holder">
      <div class="card" v-for="post in postToDisplay" :key='post.id' >
        {{post}} 
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="`${post.img}`" alt="Placeholder image">
            
          </figure>
        </div>

        <div class="content">
          {{postToDisplay.postText}}
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LOAD_POSTS } from "../store/modules/postModule";
import postService from "../services/PostService";
export default {
  name: "UserGallery",
  data() {
    return {
      user: null
    };
  },
  created() {
    var userId = this.$route.params.userId
    this.$store
      .dispatch(LOAD_POSTS, {userId})
  },
  computed:{
    postToDisplay() {
     return this.$store.state.post.posts
    }
  },
  watch: {
    '$route' (to, from) {
      var userId = this.$route.params.userId;
      this.$store
        .dispatch(LOAD_POSTS, userId)
        .then(posts => console.log("posts:", posts))
        .catch(err => {
          this.$router.push("/");
        });
    }
  }
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
  max-width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  border: 1px solid rgb(158, 196, 211);
  border-radius: 5px;
}
.card {
  max-width: 200px;
  max-height: 100%;
  margin: 5px;
  border-radius: 25px
}
.head{
  background-color: brown;
   max-width: 80%;
   margin: auto;
  font-family: 'Franklin Gothic Medium';
}
</style>


