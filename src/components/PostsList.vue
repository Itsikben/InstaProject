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
  components: {
    PostPreview
  },
  computed:{
    feed(){
      return this.$store.state.post.feed.slice().reverse()
    }
  }
};
</script>

