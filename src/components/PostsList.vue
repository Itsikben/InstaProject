<template>
  <section>
    <post-preview v-for="(story, idx) in feed" :key="idx" :story="story">
    </post-preview>
    {{feed[0]}}
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
  }
};
</script>

