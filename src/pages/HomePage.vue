
<template>
<section>
    <div v-if="isLogged">
        <h2>HomePage</h2>
        <followers-list></followers-list>
        <posts-list></posts-list>
    </div>
    <followers-list v-else></followers-list>
    </section>
</template>

<script>
"use strict";
import PreLoggin from "../components/PreLoggin";
import FollowersList from "../components/FollowersList";
import PostService from "../services/PostService";
import PostsList from "../components/PostsList";
import { LOAD_POSTS } from "../store/modules/postModule";

export default {
  name: "HomePage",
  data() {
    return {
      isLogged: true
    };
  },
  created() {
    console.log('home page LOAD_POSTS', LOAD_POSTS);
    this.$store.dispatch({
      type: LOAD_POSTS,
      postIds: [0,1,3]
    });
    // this.name = this.$store.getters.imageName;
  },
  components: {
    PostsList,
    FollowersList,
    PreLoggin
  }
};
</script>