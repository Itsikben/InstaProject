<template>
  <section class="post">
    <div class="post-header">
      <div class="instagram">
        <img  src="https://instagram.fhfa2-1.fna.fbcdn.net/t51.2885-19/s150x150/25012742_296524800856734_2015366146122842112_n.jpg" class="user-img"/>
      </div>
      <span class="user-name">sumbat_tad</span> 
    </div>
    <div class="post-img">
      <img src="https://www.trvl.co.il/wp-content/uploads/2017/02/puppy-1903313_1280.jpg" alt="">
    </div>
    <div class="post-statistics">
      <div>
        <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
        <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
        <p>1,756 likes</p>
      </div>
      <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
    </div>
    <div class="post-content">
      <span class="user-name">sumbat_tad</span> 
      <span>sometimes you have to jump and build your wings on the way down..🌌</span>     
    </div>
    <div class="post-comments">
      <div class="comment" v-for="n in 4" :key="n">
        <span class="user-name">dani_vaitzman</span> 
        <span>omg unbelivobalets</span>     
      </div>
    </div>
    <div class="post-createdtime">
      45 MINUTES AGO
    </div>
    <hr/>
    <div class="post-addcomment">
      <textarea class="comment-textarea" type="text" placeholder="Add a comment..."></textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: "PostPreview",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped>
.post-addcomment{
  font-size: 1.2em;
  display: flex;
  padding: 16px 16px;
}
.comment-textarea {
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
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 50px;
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
  font-weight: 700;
}
.user-img {
  border: 1px solid #e6e6e6;

  width: 36px;
  height: 36px;
  margin: 0;
  border-radius: 50%;
  border: 2px solid white;
}
.post-img img {
  width: 100%;
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


