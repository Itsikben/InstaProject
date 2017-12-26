
<template>
<section>
  <button @click="isLogged = !isLogged">isLogged is now:{{isLogged}}</button>
    <div v-if="isLogged">
        <h2>HomePage</h2>
        <followers-list></followers-list>
        <posts-list></posts-list>
    </div>
    <pre-loggin v-else></pre-loggin>
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