<template>
  <section class="post">
    <div class="post-header">
      <div class="instagram">
        <img  src="https://instagram.fhfa2-1.fna.fbcdn.net/t51.2885-19/s150x150/25012742_296524800856734_2015366146122842112_n.jpg" class="user-img"/>
      </div>
      <span class="user-name" @click="showProfile">{{this.story.username}}</span>
    </div>
      <span class="story-title">{{story.title}}</span>
    <div class="post-img" @dblclick="like">
      <i v-if="isLiked" class="fa fa-heart fa-5x" :class="likeAnimClass" aria-hidden="true"></i>
      <img :src="story.img">
   
      <router-link :to="'/UserProfile/story/' + story._id">Details</router-link>
     
    </div>
    <div class="post-statistics">
      <div>
        <span @click="toggleLike">
          <i v-if="!isLiked" class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
          <i v-else class="fa fa-heart fa-2x red" aria-hidden="true"></i>
        </span> 
        <p class="likesnumber">{{story.likes.length}}</p>
      </div>
      <!-- <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i> -->
    </div>
    <div class="post-content">
      <span class="sub-user-name" ></span> 
      <span>{{story.text}}</span>     
    </div>
    <div class="post-comments">
      <div class="comment" v-for="(comment,index) in comments" :key="index">
        <span class="sub-user-name" ><i class="fa fa-comment-o fa-2x" aria-hidden="true"></i> {{comment.username}}: </span> 
        <span>{{comment.text}}</span>     
      </div>
    </div>
    <div class="post-createdtime">
      posted {{currTime}} ago
    </div>
    <hr/>
    <div class="post-addcomment">
      <textarea v-model="commentTxt" class="comment-textarea" type="text" placeholder="Add a comment..." @keypress.enter.prevent="addComment"></textarea>
    </div>
  </section>
</template>

<script>
import PostService from "../services/PostService.js";
export default {
  name: "PostPreview",
  props: ["story"],
  data() {
    return {
      commentTxt: "",
      likeAnim: false,
      currTime: PostService.timeSince(this.story.createdAt)
    };
  },
  computed: {
    likeAnimClass() {
      return {
        "animated bounceIn": this.likeAnim,
        "animated zoomOut": !this.likeAnim
      };
    },
    comments() {
      return this.story.comments;
    },
    isLiked(){
      return this.story.likes.indexOf(this.$store.state.user.user._id) !== -1
    }, 
    feed(){
      return this.$store.state.post.feed;
    }
  },
  methods: {
    addComment() {
      var commentInfo = {
        text: this.commentTxt,
        userId: this.$store.state.user.user._id,
        storyId: this.story._id,
        username: this.$store.state.user.user.username,
      }
      console.log('add comment executed')
      this.$socket.emit("sendComment", commentInfo);
      this.commentTxt = ""
      console.log(this.story.likes)
    },
    toggleLike() {
      this.animateLike();
    },
    animateLike() {
      this.likeAnim = true;
      setTimeout(() => {
        this.likeAnim = false;
      }, 1000);
    },
    like() {
    //  this.story.likes.push(this.$store.state.user.user._id)
    //  this.isLiked = true;
      var likeInfo = {
      userId: this.$store.state.user.user._id,
      storyId: this.story._id
      };
      this.$socket.emit("sendLike", likeInfo);
    },
    deletePost(postId) {
      PostService.deletePost();
    },
    showProfile() {
      this.$router.push("/UserProfile/"+ this.story.userId)
      
    }
  }
};
</script>
<style scoped>
.story-title{
  font-size: 1.8em
}
.red {
  color: #ed4956;
}
.post-addcomment {
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  margin: 0 auto;
  font-size: 0.83em;
  border: 1px solid #e6e6e6;
  max-width: 615px;
  margin-bottom: 60px;
  background-color: white;
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
  font-size: 1.2em;
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
  font-size: 1.8em;
  font-weight: 600;
}
.user-name:hover{
  cursor: pointer;
}
.sub-user-name{
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
.post-header .user-name :hover {
  color: red;
}
.likesnumber{
  margin-right: 60px;
}

@media (max-width: 550px) {
  
  .user-name {
  font-size: 1.2em;
  font-weight: 400;
}
.sub-user-name{
  font-weight: 400;
}


}
</style>


