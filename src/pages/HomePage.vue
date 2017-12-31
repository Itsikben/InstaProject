
<template>
<section>

    <div v-if="isLogged">
       <add-photo></add-photo>
        <followers-list></followers-list>
        <posts-list></posts-list>
    </div>
    <!-- <div class="loggin" v-else> -->
      <pre-loggin v-else></pre-loggin>
    
    </section>
</template>

<script>
"use strict";
import PreLoggin from "../components/PreLoggin";
import FollowersList from "../components/FollowersList";
import PostService from "../services/PostService.js";
import PostsList from "../components/PostsList";
import { LOAD_POSTS } from "../store/modules/postModule";
import AddPhoto from "../components/AddPhoto";

export default {
  name: "HomePage",
  data() {
    return {
        // isLogged: true
    };
  },
  created() {
    this.name = this.$store.getters.imageName;
      
  },
  computed:{
    isLogged(){
      return !!this.$store.state.user.user
      
    }
  },
  methods: {
    logout(){
      this.$store.commit('setUser',{user: null})
    }
  },
  components: {
    PostsList,
    FollowersList,
    PreLoggin,
    AddPhoto
  }
};
</script>

