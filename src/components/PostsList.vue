<template>
  <section>
    <post-preview v-for="(story, idx) in feed" :key="idx" :story="story">
    </post-preview>

  </section>
</template>

<script>
import PostPreview from "./PostPreview";
export default {
  name: "PostsList",
  data() {
    return {

    };
  },
  created(){ 
      console.log('feed in PostList > created',this.feed);
            this.$socket.emit('feedReq', 'will be user id soon');
  },
  components: {
    PostPreview
  },
  computed:{
    feed(){
      return this.$store.state.post.feed
    }
  },
methods:{
    addComment(){
      this.comments.push(this.tempComment);
      this.tempComment = {
        user:'sumbat_tad',
        comment:''
      }
    },
    toggleLike(){
      this.isLiked = !this.isLiked;
      this.animateLike();
      
    },
    animateLike(){
      this.likeAnim = true;
      setTimeout(() => {
        this.likeAnim = false;
      }, 1000);
    },
    like(){
      this.isLiked = true;
      this.animateLike();
    },
    deletePost(postId){
      PostService.deletePost()
    }
  }
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


