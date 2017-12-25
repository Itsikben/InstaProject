
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
import FollowersList from "../components/followersList";
import ImgService from "../services/ImgService";
import PostsList from "../components/PostsList";

export default {
  name: "HomePage",
  data() {
    return {
      isLogged: true
    };
  },
  created() {
    this.name = this.$store.getters.imageName;
  },
  components: {
    PostsList,
    FollowersList,
    PreLoggin
  }
};
</script>