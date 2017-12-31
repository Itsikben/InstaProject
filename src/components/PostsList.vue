<template>
  <section>
    <post-preview v-for="(n, idx) in 1" :key="idx">
      {{n}}
    </post-preview>
  </section>
</template>

<script>
import PostPreview from './PostPreview'
export default {
  name: "PostsList",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
      PostPreview,
  }
};
</script>

