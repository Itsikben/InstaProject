<template>
  <section>
    <h1>PostsList</h1>
    <post-preview v-for="n in 20" :key="n"></post-preview>
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

