<template>
  <section>
 <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
         my gallery
      </h1>
      <h2 class="subtitle">
        my gallery
      </h2>
    </div>
  </div>
</section>
     <div class="photos-holder">
    <button @click="getPosts">get posts</button>
      <div class="card" v-for="post in postToDisplay" :key="post" >
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="post.imgUrl" alt="Placeholder image">
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
import { LOAD_POSTS }  from '../store/modules/postModule'
import postService from '../services/PostService'
export default {
  name: "UserGallery",
  data() {
    return {
      user:null,
      userId:null,
      postToDisplay:[]
    };
  },
  created() {
        var userId = this.$route.params.userId
        postService.getPostByUserId(userId)
         .then(posts => this.postToDisplay = posts)
         .catch(err => {
             this.$router.push('/')
         })
    },
    // computed: {
    //   postToDisplay() {
    //       return this.$store.actions.postToDisplay
    //       },
    // },
    methods:{
      getPosts() {
        this.$store.dispatch(LOAD_POSTS)
      }
    }


};
</script>

<style>
.photos-holder{
  max-width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin:auto;
  border: 1px solid rgb(158, 196, 211);
  border-radius: 5px; 
}
.card {
    max-width: 200px;
    max-height: 100%;
    margin: 5px;
}
</style>


