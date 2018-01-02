
<template>
    <div v-if="post">
        <h2>PostDetails</h2>
        <section class="post">
    <div class="post-header">
      <div class="instagram">
        <img  src="https://instagram.fhfa2-1.fna.fbcdn.net/t51.2885-19/s150x150/25012742_296524800856734_2015366146122842112_n.jpg" class="user-img"/>
      </div>
      <span class="user-name">{{post.userId}}</span> 
    </div>
    <div class="post-img">
      <!-- <i v-if="isLiked" class="fa fa-heart fa-5x" :class="likeAnimClass" aria-hidden="true"></i> -->
      <img :src="post.imgUrl">
      <router-link :to="'/UserProfile/Post/'">beck</router-link>
      <button @click="deletePost()">del</button>
    </div>
    <div class="post-statistics">
      <div>
        <!-- <span @click="toggleLike">
          <i v-if="!isLiked" class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
          <i v-else class="fa fa-heart fa-2x red" aria-hidden="true"></i>
        </span>  -->
        <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
        <p>{{this.post.likes.length}}</p>
      </div>
      <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
    </div>
    <div class="post-content">
      <span class="user-name">sumbat </span> 
      <span>sometimes you have to jump and build your wings on the way down..🌌</span>     
    </div>
    <!-- <div class="post-comments">
      <div class="comment" v-for="(comment,index) in comments" :key="index">
        <span class="user-name">{{comment.user}}</span> 
        <span>{{comment.comment}}</span>     
      </div>
    </div> -->
    <!-- <div class="post-createdtime">
      created at: {{story.createdAt}}
    </div> -->
    <hr/>
    <!-- <div class="post-addcomment">
      <textarea v-model="tempComment.comment" class="comment-textarea" type="text" placeholder="Add a comment..." @keypress.enter.prevent="addComment"></textarea>
    </div> -->
  </section>
    </div>
</template>

<script>
import PostService from "../services/PostService.js";

export default {
  name: "PostDetails",
  data() {
    return {
        post: null
    };
  },
  created() {
      console.log(this.$route.params.postId);
      return new Promise(resolve => {
          console.log('this.$store.state.post.feed',this.$store.state.post.feed);
          var feed = this.$store.state.post.feed;
          var fundPost = feed.filter(post => post._id === this.$route.params.postId);
          var cuurPost = fundPost[0];
          console.log('cuurPost',cuurPost);
          resolve(cuurPost);
      })
      .then ((post)=>{
          this.post = post
          console.log(' this.post ', this.post)
      })
  },
  components: {
   
  },
  computed: {
    
  },
  watch:{

  },
  methods:{
      deletePost(postId){
      PostService.deletePost()
    }
  },
};
</script>
<style scoped>
.red{
  color: #ed4956;
}
.post-addcomment{
  font-size: 1.2em;
  display: flex;
  padding: 16px 16px;
  
}
.comment-textarea {
  width: 100%;
  background: 0 0;
  border: none;
  color: #262626;
  font-size: inherit;
  height: 18px;
  max-height: 80px;
  outline: none;
  padding: 0;
  resize: none;
}
.post {
  border-radius: 3px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;;
  margin: 0 auto;
  font-size: 0.83em;
  border: 1px solid #e6e6e6;
  max-width: 615px;
  margin-bottom: 60px;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e6e6e6;
  margin: 0 10px;
  padding: 0;
}
.post-comments {
  padding: 10px;
  text-align: left;
  max-width: 100%;
}
.comment {
  padding: 0;
  margin-bottom: 10px;
}
.post-createdtime {
  color: gray;
  padding: 10px;
  text-align: left;
  font-size: 0.7em;
}
.post-statistics {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
}
.post-statistics p {
  font-weight: 600;
}
.post-statistics * {
  margin-right: 10px;
}
.post-content {
  text-align: left;
  padding: 10px;
}
.post-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
.user-name {
  font-weight: 600;
}
.user-img {
  border: 1px solid #e6e6e6;
  width: 36px;
  height: 36px;
  margin: 0;
  border-radius: 50%;
  border: 2px solid white;
}
.post-img {
  position: relative;
  width: 100%;
}
.post-img img {
  width: 100%;
}
.post-img i {
  position: absolute;
  color: rgba(255, 255, 255, 0.719);
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.instagram {
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
</style>