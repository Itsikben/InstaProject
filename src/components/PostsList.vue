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
      this.$socket.emit('feedReq', 'will be user id soon')
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

